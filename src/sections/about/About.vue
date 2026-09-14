<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    icon: "♧",
    title: "Collaboration",
    text: "Stronger together, better results.",
  },
  {
    icon: "♢",
    title: "Creativity",
    text: "Ideas that connect and inspire.",
  },
  {
    icon: "↗",
    title: "Innovation",
    text: "Exploring new ways to solve problems.",
  },
  {
    icon: "◎",
    title: "Impact",
    text: "Building solutions that create value.",
  },
];

const people = [
  {
    number: "01",
    name: "Saurbh Joshi",
    role: "Designer & Digital Strategist",
    image: "/images/saurabh.png",
    description:
      "Creative designer who believes in the power of visual storytelling. I craft engaging designs and strategies that connect brands with people and create lasting impact.",
  },
  {
    number: "02",
    name: "Mihir Sata",
    role: "Developer & Creative Technologist",
    image: "/images/mihir.jpg",
    description:
      "Passionate developer who loves turning ideas into scalable digital solutions. I enjoy working with modern technologies.",
  },
];

/* =========================================================
   SECTION REFERENCE
========================================================= */

const aboutSection = ref(null);

let animationContext = null;

/* =========================================================
   GSAP ANIMATION
========================================================= */

onMounted(() => {
  if (!aboutSection.value) return;

  animationContext = gsap.context(() => {
    const intro = ".about-intro";
    const label = ".about-section-label";
    const titleLines = ".about-heading-accent, .about-heading-main";
    const wave = ".wave";
    const valueCards = ".value-card";
    const personCards = ".person-card";
    const straps = ".strap";
    const clips = ".clip";
    const images = ".person-image img";

    /* -------------------------------------------------------
       INITIAL STATES
    ------------------------------------------------------- */

    gsap.set(intro, {
      opacity: 0,
      x: -50,
    });

    gsap.set(label, {
      opacity: 0,
      y: 20,
    });

    gsap.set(titleLines, {
      opacity: 0,
      y: 50,
    });

    gsap.set(wave, {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(valueCards, {
      opacity: 0,
      y: 40,
    });

    gsap.set(personCards, {
      opacity: 0,
      y: 70,
      rotate: 2,
    });

    gsap.set(images, {
      scale: 1.08,
    });

    gsap.set(straps, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(clips, {
      opacity: 0,
      y: -15,
    });

    /* -------------------------------------------------------
       MAIN TIMELINE
    ------------------------------------------------------- */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 75%",
        end: "top 35%",
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to(intro, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
      })

      .to(label, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      })

      .to(
        titleLines,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.15",
      )

      .to(
        wave,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.15",
      )

      .to(
        valueCards,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.1",
      )

      .to(
        personCards,
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.35",
      )

      .to(
        straps,
        {
          scaleY: 1,
          duration: 0.45,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.5",
      )

      .to(
        clips,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.12,
          ease: "back.out(1.5)",
        },
        "-=0.3",
      )

      .to(
        images,
        {
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.45",
      );
  }, aboutSection.value);
});

/* =========================================================
   CLEANUP
========================================================= */

onUnmounted(() => {
  animationContext?.revert();
  animationContext = null;
});
</script>

<template>
  <section ref="aboutSection" id="about" class="about-section">
    <!-- Decorative dots -->
    <div class="dots dots-top" aria-hidden="true"></div>

    <div class="dots dots-bottom" aria-hidden="true"></div>

    <div class="about-container">
      <!-- =================================================
           LEFT CONTENT
      ================================================== -->

      <div class="about-intro">
        <!-- Section label -->

        <div class="about-section-label">
          <span class="about-section-number">02</span>
          <span class="about-section-line" aria-hidden="true"></span>
          <span class="about-section-title">ABOUT US</span>
        </div>
        <!-- Main heading -->

        <h2 class="about-heading">
          <span class="about-heading-accent">Two minds.</span>
          <span class="about-heading-main">One creative</span>
          <span class="about-heading-accent">direction.</span>
        </h2>

        <!-- Decorative wave -->

        <div class="wave" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- Values -->

        <div class="values-grid">
          <article v-for="value in values" :key="value.title" class="value-card">
            <div class="value-icon" aria-hidden="true">
              {{ value.icon }}
            </div>

            <div class="value-content">
              <h3>
                {{ value.title }}
              </h3>

              <p>
                {{ value.text }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- =================================================
           PEOPLE
      ================================================== -->

      <div class="people-wrapper">
        <article v-for="person in people" :key="person.name" class="person-card">
          <!-- Lanyard -->

          <div class="strap" aria-hidden="true"></div>

          <div class="clip" aria-hidden="true"></div>

          <!-- Image -->

          <div class="person-image">
            <img :src="person.image" :alt="person.name" loading="lazy" />
          </div>

          <!-- Details -->

          <h3 class="person-name">
            {{ person.name }}
          </h3>

          <p class="person-role">
            {{ person.role }}
          </p>

          <div class="small-line" aria-hidden="true"></div>

          <p class="person-description">
            {{ person.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
