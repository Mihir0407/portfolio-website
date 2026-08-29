<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  side: 'left' | 'right'
  position: 1 | 2 | 3
  service: string
  image: string
  number: string
}

const props = defineProps<Props>()

const assembly = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null
let floatingTween: gsap.core.Tween | null = null

onMounted(() => {
  if (!assembly.value) return

  ctx = gsap.context(() => {

    const isLeft = props.side === 'left'

    const strap = assembly.value!.querySelector('.lanyard')
    const ring = assembly.value!.querySelector('.lanyard-ring')

    const startRotation = isLeft ? -8 : 8
    const finalRotation = isLeft ? -3 : 3

    /*
    =====================================================
    INITIAL STATE
    =====================================================
    */

    gsap.set(assembly.value, {
      opacity: 0,
      y: -520,
      rotation: startRotation,
    })

    /*
    =====================================================
    SCROLL ANIMATION
    =====================================================
    */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: assembly.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },

      defaults: {
        ease: 'power3.out',
      },
    })

    /*
    CARD DROPS
    */

    tl.to(
      assembly.value,
      {
        opacity: 1,
        y: 0,
        rotation: finalRotation,
        duration: 1.25,
        ease: 'power3.out',
      }
    )

    /*
    LANYARD
    */

    if (strap) {
      tl.from(
        strap,
        {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=1.05'
      )
    }

    /*
    RING
    */

    if (ring) {
      tl.from(
        ring,
        {
          opacity: 0,
          scale: 0.5,
          transformOrigin: 'center',
          duration: 0.35,
          ease: 'back.out(2)',
        },
        '-=0.55'
      )
    }

    /*
    FIRST SWING
    */

    tl.to(
      assembly.value,
      {
        rotation: isLeft ? 4 : -4,
        duration: 0.5,
        ease: 'power2.inOut',
      }
    )

    /*
    SECOND SWING
    */

    tl.to(
      assembly.value,
      {
        rotation: isLeft ? -6 : 6,
        duration: 0.6,
        ease: 'power2.inOut',
      }
    )

    /*
    FINAL SETTLE
    */

    tl.to(
      assembly.value,
      {
        rotation: finalRotation,
        duration: 0.8,
        ease: 'elastic.out(1, 0.45)',
      }
    )

    /*
    =====================================================
    FLOATING AFTER ANIMATION
    =====================================================
    */

    floatingTween = gsap.to(assembly.value, {
      rotation: finalRotation + (isLeft ? 0.5 : -0.5),
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      paused: true,
    })

    /*
    Start floating only after card enters viewport
    */

    tl.call(() => {
      floatingTween?.play()
    })

  }, assembly.value)
})

onBeforeUnmount(() => {
  floatingTween?.kill()
  ctx?.revert()
})
</script>

<template>
  <div
    ref="assembly"
    class="id-card-wrapper"
    :class="[side, `position-${position}`]"
  >
    <!-- =====================================================
         SINGLE LANYARD
    ====================================================== -->

    <div class="lanyard">
      <div class="lanyard-strap">
        <div class="strap-weave"></div>
        <div class="strap-highlight"></div>
        <div class="strap-shadow"></div>
      </div>

      <!-- STRAP FOLD -->
      <div class="strap-fold">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- METAL RING -->
      <div class="lanyard-ring">
        <div class="ring-inner"></div>
      </div>
    </div>

    <!-- =====================================================
         ID CARD
    ====================================================== -->

    <article class="id-card">
      <div class="card-inner">

        <!-- BRAND -->
        <div class="card-brand">
          <div class="brand-mark">f</div>

          <span>freesamric</span>
        </div>

        <!-- PORTFOLIO IMAGE -->
        <div class="id-photo">
          <img
            :src="image"
            :alt="service"
          />
        </div>

        <!-- INFORMATION -->
        <div class="id-info">
          <div class="service-info">
            <span class="service-label">
              SERVICE
            </span>

            <h1>
              {{ service }}
            </h1>
          </div>

          <div class="id-number">
            {{ number }}
          </div>
        </div>

        <!-- FOOTER -->
        <div class="id-card-footer">
          <div
            class="barcode"
            aria-label="Portfolio barcode"
          >
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

      </div>
    </article>
  </div>
</template>

<style scoped>
@import "./IDCard.css";
</style>