<template>
  <footer id="footer" class="footer-section">

    <!-- Decorative dots -->
    <div class="footer-dots footer-dots-left"></div>
    <div class="footer-dots footer-dots-right"></div>


    <div class="footer-container">

      <!-- ================================= -->
      <!-- CTA -->
      <!-- ================================= -->

      <section class="footer-cta">

        <div class="section-label">

          <span class="section-number">06</span>

          <span class="section-line"></span>

          <span>LET'S WORK TOGETHER</span>

        </div>


        <div class="footer-cta-content">

          <div class="footer-heading">

            <p class="footer-eyebrow">
              GOT A PROJECT IN MIND?
            </p>

            <h2>
              Let's create
              <span>something</span>
              meaningful.
            </h2>

          </div>


          <a
            href="#contact"
            class="footer-talk-button"
          >

            <span>LET'S TALK</span>

            <span class="footer-arrow">↗</span>

          </a>

        </div>

      </section>


      <!-- ================================= -->
      <!-- FOOTER NAV -->
      <!-- ================================= -->

      <div class="footer-main">


        <!-- BRAND -->

        <div class="footer-brand">

  <div class="footer-logo">
    <img
      src="/images/karm-logo.png"
      alt="Karm Design Studio"
    />
  </div>


    <p>
      Creative design &amp;
      digital experiences.
    </p>



</div>


        <!-- NAVIGATION -->

        <div class="footer-column">

          <span class="footer-column-title">
            NAVIGATION
          </span>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>


        <!-- CONTACT -->
 
        <div class="footer-column">

          <span class="footer-column-title">
            CONTACT
          </span>

          <a href="mailto:hello@yourdomain.com">
            hello@yourdomain.com
          </a>

          <span>
            Ahmedabad, India
          </span>

        </div>


        <!-- SOCIAL -->

       <!-- SOCIAL -->

<div class="footer-column">

  <span class="footer-column-title">
    SOCIAL
  </span>

  <a
    href="#"
    target="_blank"
    rel="noopener"
  >
    LinkedIn ↗
  </a>

  <a
    href="#"
    target="_blank"
    rel="noopener"
  >
    Instagram ↗
  </a>

  <a
    href="https://www.behance.net/creativedesignerin"
    target="_blank"
    rel="noopener"
  >
    Behance ↗
  </a>

</div>


<!-- LEGAL -->

<div class="footer-column">

  <span class="footer-column-title">
    LEGAL
  </span>

  <a href="/privacy-policy">
    Privacy Policy ↗
  </a>

  <a href="/terms">
    Terms & Conditions ↗
  </a>

</div>

      </div>


      <!-- ================================= -->
      <!-- BOTTOM -->
      <!-- ================================= -->

      <div class="footer-bottom">

        <span>
          © 2026 Freelancer. All rights reserved.
        </span>


        <span class="footer-availability">

          <span></span>

          AVAILABLE FOR PROJECTS

        </span>


        <button
          class="back-top"
          @click="scrollToTop"
        >

          BACK TO TOP

          <span>↑</span>

        </button>

      </div>

    </div>

  </footer>
</template>


<script setup lang="ts">

import {
  onMounted,
  onUnmounted
} from "vue";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import "./Footer.css";

gsap.registerPlugin(
  ScrollTrigger
);


// =================================
// BACK TO TOP
// =================================

const scrollToTop = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};


// =================================
// ANIMATION
// =================================

let ctx: gsap.Context | undefined;

onMounted(() => {

  ctx = gsap.context(() => {

    gsap.from(".footer-cta", {

      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 80%",
        toggleActions:
          "play none none reverse"
      },

      y: 70,
      opacity: 0,

      duration: 1,

      ease: "power3.out"

    });


    gsap.from(".footer-main", {

      scrollTrigger: {
        trigger: ".footer-main",
        start: "top 85%",
        toggleActions:
          "play none none reverse"
      },

      y: 40,
      opacity: 0,

      duration: 0.9,

      delay: 0.15,

      ease: "power3.out"

    });


    gsap.from(".footer-bottom", {

      scrollTrigger: {
        trigger: ".footer-bottom",
        start: "top 90%",
        toggleActions:
          "play none none reverse"
      },

      opacity: 0,

      duration: 0.8,

      delay: 0.2

    });

  });

});


onUnmounted(() => {

  ctx?.revert();

});

</script>