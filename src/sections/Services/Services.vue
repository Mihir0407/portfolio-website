<template>
  <section
    ref="servicesSection"
    id="services"
    class="services-section"
  >

    <!-- =========================================
         BACKGROUND DECORATION
    ========================================== -->

    <div class="services-dots services-dots-top"></div>

    <div class="services-dots services-dots-bottom"></div>


    <!-- =========================================
         MAIN SERVICES WRAPPER
    ========================================== -->

    <div
      ref="servicesInner"
      class="services-inner"
    >

      <!-- =======================================
           LEFT CONTENT
      ======================================== -->

      <div
        ref="servicesIntro"
        class="services-intro"
      >

        <!-- SECTION LABEL -->

        <div class="services-label">

          <span class="services-label-number">
            04
          </span>

          <span class="services-label-line"></span>

          <span>
            SERVICES
          </span>

        </div>


        <!-- HEADING -->

        <h2 class="services-title">

          Solutions
          <br />

          designed to
          <br />

          <span>elevate</span>
          brands.

        </h2>


        <!-- DESCRIPTION -->

        <p class="services-description">

          I help businesses and startups turn ideas
          into powerful digital experiences through
          strategy, design and technology.

        </p>


        <!-- AVAILABILITY -->

        <div class="services-availability">

          <span class="availability-dot"></span>

          <span>
            AVAILABLE FOR PROJECTS
          </span>

        </div>


        <!-- SIGNATURE -->

        <div class="services-signature">

          <span>
            Let's build something great together.
          </span>

          <strong>
            Saurbh Joshi
          </strong>

          <strong>
            Mihir H Sata
          </strong>

          <div class="signature-line">

            <span></span>

            <div class="signature-barcode">

              <i
                v-for="n in 22"
                :key="n"
              ></i>

            </div>

          </div>

        </div>

      </div>


      <!-- =======================================
           SERVICES GRID
      ======================================== -->

      <div
        ref="servicesGrid"
        class="services-grid"
      >

        <article
          v-for="(service, index) in services"
          :key="service.id"
          class="service-card"
        >

          <!-- CARD TOP -->

          <div class="service-card-top">

            <div class="service-icon">

              <span
                v-if="service.id === '02'"
                class="code-icon"
              >
                &lt;/&gt;
              </span>

              <span v-else>
                {{ service.icon }}
              </span>

            </div>

            <span class="service-number">
              {{ service.id }}
            </span>

          </div>


          <!-- CARD CONTENT -->

          <div class="service-card-content">

            <h3>
              {{ service.title }}
            </h3>

            <div class="service-line"></div>

            <p>
              {{ service.description }}
            </p>

          </div>


          <!-- CARD FOOTER -->

          <div class="service-card-footer">

            <span>
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <span class="service-arrow">
              ↗
            </span>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>


<script setup>

import {
  ref,
  onMounted,
  onBeforeUnmount
} from "vue";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import {
  services
} from "./servicesData";


/* =========================================
   REGISTER GSAP
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   REFS
========================================= */

const servicesSection = ref(null);

const servicesInner = ref(null);

const servicesIntro = ref(null);

const servicesGrid = ref(null);


/* =========================================
   GSAP CONTEXT
========================================= */

let animationContext = null;


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

onMounted(() => {

  animationContext = gsap.context(() => {


    /* =====================================
       INITIAL STATES
    ===================================== */

    gsap.set(".services-label", {
      opacity: 0,
      y: 25
    });


    gsap.set(".services-title", {
      opacity: 0,
      y: 45
    });


    gsap.set(".services-description", {
      opacity: 0,
      y: 30
    });


    gsap.set(".services-availability", {
      opacity: 0,
      y: 25
    });


    gsap.set(".services-signature", {
      opacity: 0,
      y: 25
    });


    gsap.set(".service-card", {
      opacity: 0,
      y: 60,
      scale: 0.96
    });


    /* =====================================
       MAIN SERVICES REVEAL
    ===================================== */

    const timeline = gsap.timeline({

      scrollTrigger: {

        trigger: servicesSection.value,

        start: "top 75%",

        toggleActions:
          "play none none reverse"

      }

    });


    timeline

      /* ---------------------------------
         LABEL
      --------------------------------- */

      .to(".services-label", {

        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power3.out"

      })


      /* ---------------------------------
         TITLE
      --------------------------------- */

      .to(".services-title", {

        opacity: 1,

        y: 0,

        duration: 0.7,

        ease: "power3.out"

      }, "-=0.25")


      /* ---------------------------------
         DESCRIPTION
      --------------------------------- */

      .to(".services-description", {

        opacity: 1,

        y: 0,

        duration: 0.55,

        ease: "power3.out"

      }, "-=0.3")


      /* ---------------------------------
         AVAILABILITY
      --------------------------------- */

      .to(".services-availability", {

        opacity: 1,

        y: 0,

        duration: 0.45,

        ease: "power3.out"

      }, "-=0.25")


      /* ---------------------------------
         SIGNATURE
      --------------------------------- */

      .to(".services-signature", {

        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power3.out"

      }, "-=0.25");


    /* =====================================
       SERVICE CARDS
       APPEAR ONE BY ONE
    ===================================== */

    gsap.to(".service-card", {

      opacity: 1,

      y: 0,

      scale: 1,

      duration: 0.7,

      stagger: 0.15,

      ease: "power3.out",

      scrollTrigger: {

        trigger: servicesGrid.value,

        start: "top 80%",

        toggleActions:
          "play none none reverse"

      }

    });


    /* =====================================
       REFRESH SCROLLTRIGGER
    ===================================== */

    ScrollTrigger.refresh();

  }, servicesSection.value);

});


/* =========================================
   CLEANUP
========================================= */

onBeforeUnmount(() => {

  animationContext?.revert();

  animationContext = null;

  ScrollTrigger.refresh();

});

</script>


<style scoped>

@import "./services.css";

</style>