<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import IDCard from '../../components/IDCard/IDCard.vue'

gsap.registerPlugin(ScrollTrigger)

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {

    /*
    =====================================================
    HERO CONTENT
    =====================================================
    */

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      defaults: {
        ease: 'power3.out',
      },
    })

    heroTl
      .from('.hero-eyebrow', {
        opacity: 0,
        y: 25,
        duration: 0.5,
      })
      .from(
        '.hero-title',
        {
          opacity: 0,
          y: 45,
          scale: 0.95,
          duration: 0.8,
          ease: 'power4.out',
        },
        '-=0.25'
      )
      .from(
        '.hero-description',
        {
          opacity: 0,
          y: 20,
          duration: 0.55,
        },
        '-=0.35'
      )
      .from(
        '.hero-actions',
        {
          opacity: 0,
          y: 15,
          duration: 0.5,
        },
        '-=0.3'
      )

    /*
    =====================================================
    BACKGROUND SHAPES
    =====================================================
    */

    gsap.from('.shape-one', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -80,
      rotation: -8,
      duration: 1.2,
      ease: 'power3.out',
    })

    gsap.from('.shape-two', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: 80,
      rotation: 8,
      duration: 1.2,
      ease: 'power3.out',
    })

    /*
    =====================================================
    BOTTOM DECORATIONS
    =====================================================
    */

    gsap.from('.hero-dots', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 15,
      duration: 0.5,
      delay: 0.5,
    })

    gsap.from('.hero-corner', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      scale: 0.5,
      rotation: -90,
      duration: 0.6,
      delay: 0.6,
      ease: 'back.out(1.7)',
    })

  })
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <section id="home" class="hero">

    <div class="hero-panel">

    

      <!-- Soft background decoration -->

      <div class="background-shape shape-one"></div>
      <div class="background-shape shape-two"></div>

      <div class="hero-noise"></div>


      <!-- Hanging cards -->

       <!-- ==================================================
         LEFT PORTFOLIO CARDS
    =================================================== -->

    <IDCard
      side="left"
      :position="1"
      service="Premium 3D Exhibition Stall Design"
      image="/images/stall.png"
      number="001"
    />

    <IDCard
      side="left"
      :position="2"
      service="Industrial Brochure Design"
      image="/brochure/bh.png"
      number="002"
    />

    <IDCard
      side="left"
      :position="3"
      service="Food Packaging Design"
      image="/food-packing/fp1/fp1.webp"
      number="003"
    />


    <!-- ==================================================
         RIGHT PORTFOLIO CARDS
    =================================================== -->
 <IDCard
      side="right"
      :position="1"
      service="Website Development"
      image="/images/web.png"
      number="006"
    />
    <IDCard
      side="right"
      :position="2"
      service="UI/UX Design"
      image="/images/ux.png"
      number="005"
    />

    <IDCard
      side="right"
      :position="3"
      service="Logo Design"
      image="/images/logo.jpeg"
      number="004"
    />




      <!-- Center -->

      <div class="hero-copy">

        <p class="hero-eyebrow">
          HELLO, Welcome to the 
        </p>

        <h1 class="hero-title">
          <span>Creative</span>
          <span>world</span>
        </h1>

        <p class="hero-description">
          We design and build digital experiences
          <br />
          that feel simple, thoughtful and easy to use.
        </p>

        <div class="hero-actions">

          <a href="#work" class="hero-button primary">
            View My Work
            <span>↗</span>
          </a>

          <a href="#contact" class="hero-button secondary">
            Let's Talk
          </a>

        </div>

      </div>


      <!-- Bottom decorative elements -->

      <div class="hero-dots">
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>

      <div class="hero-corner">
        ↗
      </div>

    </div>

  </section>
</template>

<style scoped>
@import './Hero.css';
</style>