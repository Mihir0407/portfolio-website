<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './About.css'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: '♧',
    title: 'Collaboration',
    text: 'Stronger together, better results.'
  },
  {
    icon: '♢',
    title: 'Creativity',
    text: 'Ideas that connect and inspire.'
  },
  {
    icon: '↗',
    title: 'Innovation',
    text: 'Exploring new ways to solve problems.'
  },
  {
    icon: '◎',
    title: 'Impact',
    text: 'Building solutions that create value.'
  }
]

const people = [
  {
    number: '01',
    name: 'Saurbh Joshi',
    role: 'Designer & Digital Strategist',
    image: '/images/saurbh.png',
    description:
      'Creative designer who believes in the power of visual storytelling. I craft engaging designs and strategies that connect brands with people and create lasting impact.'

  },
  {
    number: '02',
    name: 'Mihir Sata',
    role: 'Developer & Creative Technologist',
    image: '/images/mihir.jpg',
    description:
      'Passionate developer who loves turning ideas into scalable digital solutions. I enjoy working with modern technologies.'
  },
]

let animationContext = null

onMounted(() => {
  animationContext = gsap.context(() => {

    gsap.set('.about-intro', {
      opacity: 0,
      x: -50
    })

    gsap.set('.section-label', {
      opacity: 0,
      y: 20
    })

    gsap.set('.about-title-line', {
      opacity: 0,
      y: 50
    })

    gsap.set('.wave', {
      opacity: 0,
      scaleX: 0,
      transformOrigin: 'left center'
    })

    gsap.set('.value-card', {
      opacity: 0,
      y: 40
    })

    gsap.set('.person-card', {
      opacity: 0,
      y: 70,
      rotate: 2
    })

    gsap.set('.person-image img', {
      scale: 1.08
    })

    gsap.set('.strap', {
      scaleY: 0,
      transformOrigin: 'top center'
    })

    gsap.set('.clip', {
      opacity: 0,
      y: -15
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 75%',
        end: 'top 35%',
        scrub: 0.3,
        markers: false
      }
    })

    tl.to('.about-intro', {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: 'power2.out'
    })

    tl.to('.section-label', {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: 'power2.out'
    })

    tl.to(
      '.about-title-line',
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: 'power3.out'
      },
      '-=0.15'
    )

    tl.to(
      '.wave',
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.35,
        ease: 'power2.out'
      },
      '-=0.15'
    )

    tl.to(
      '.value-card',
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      },
      '-=0.1'
    )

    tl.to(
      '.person-card',
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.65,
        stagger: 0.15,
        ease: 'power3.out'
      },
      '-=0.35'
    )

    tl.to(
      '.strap',
      {
        scaleY: 1,
        duration: 0.45,
        stagger: 0.12,
        ease: 'power2.out'
      },
      '-=0.5'
    )

    tl.to(
      '.clip',
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.12,
        ease: 'back.out(1.5)'
      },
      '-=0.3'
    )

    tl.to(
      '.person-image img',
      {
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out'
      },
      '-=0.45'
    )

  })
})

onUnmounted(() => {
  animationContext?.revert()
  ScrollTrigger.refresh()
})
</script>

<template>

  <section id="about" class="about-section">

    <div class="dots dots-top"></div>
    <div class="dots dots-bottom"></div>

    <div class="about-container">

      <!-- LEFT -->

      <div class="about-intro">

        <div class="section-label">

          <span class="section-number">
            02
          </span>

          <span class="section-line"></span>

          <span class="title">
            ABOUT US
          </span>

        </div>

        <h2 class="about-heading">

          <span class="about-title-line">
            Two minds.
          </span>

          <span class="about-title-line">
            One creative
          </span>

          <span class="about-title-line green">
            direction.
          </span>

        </h2>

        <div class="wave">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="values-grid">

          <div v-for="value in values" :key="value.title" class="value-card">

            <div class="value-icon">
              {{ value.icon }}
            </div>

            <div>
              <h3>
                {{ value.title }}
              </h3>

              <p>
                {{ value.text }}
              </p>
            </div>

          </div>

        </div>

      </div>


      <!-- PEOPLE -->

      <div class="people-wrapper">

        <div v-for="person in people" :key="person.name" class="person-card">

          <div class="strap"></div>

          <div class="clip"></div>

          <div class="person-image">

            <img :src="person.image" :alt="person.name" />

          </div>

          <h3 class="person-name">
            {{ person.name }}
          </h3>

          <p class="person-role">
            {{ person.role }}
          </p>

          <div class="small-line"></div>

          <p class="person-description">
            {{ person.description }}
          </p>

        </div>

      </div>

    </div>

  </section>

</template>

<style scoped>
.about-title-line {
  display: block;
}

.green {
  color: #39785f;
}
</style>