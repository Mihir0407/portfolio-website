<template>
  <section id="work" class="work-section">

    <!-- =========================================
         DECORATION
    ========================================== -->

    <div class="work-dots work-dots-top"></div>
    <div class="work-dots work-dots-bottom"></div>


    <!-- =========================================
         LANYARDS
    ========================================== -->

    <div class="work-hanger hanger-left">
      <div class="hanger-strap"></div>
      <div class="hanger-ring"></div>
    </div>

    <div class="work-hanger hanger-right">
      <div class="hanger-strap"></div>
      <div class="hanger-ring"></div>
    </div>


    <!-- =========================================
         HEADER
    ========================================== -->

    <header class="work-header">

      <div class="work-label">

        <span class="work-label-number">
          03
        </span>

        <span class="work-label-line"></span>

        <span>
          SELECTED WORK
        </span>

      </div>


      <div class="work-header-content">

        <div class="work-title-wrap">

          <h1 class="work-title">
            Work that
            <br />
            speaks for
            <span>itself.</span>
          </h1>

          <p class="work-subtitle">
            A selection of digital experiences,
            identities and visual systems
            built with purpose.
          </p>

        </div>


        <div class="work-counter">

          <span class="counter-current">
            {{ formatNumber(activeProject + 1) }}
          </span>

          <span class="counter-divider">
            /
          </span>

          <span class="counter-total">
            {{ formatNumber(featuredProjects.length) }}
          </span>

        </div>

      </div>

    </header>


    <!-- =========================================
         MAIN CONTENT
    ========================================== -->

    <div class="work-layout">


      <!-- =======================================
           LEFT PROJECT NAVIGATION
      ======================================== -->

      <aside class="work-sidebar">

        <div class="project-list">

          <button
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            type="button"
            class="project-nav-item"
            :class="{
              active: activeProject === index
            }"
            @click="changeProject(index)"
          >

            <span class="nav-number">
              {{ formatNumber(index + 1) }}
            </span>


            <span class="nav-project-info">

              <strong>
                {{ project.name }}
              </strong>

              <small>
                {{ project.type }}
              </small>

            </span>


            <span class="nav-arrow">
              ↗
            </span>

          </button>

        </div>


        <!-- VIEW ALL -->

        <button
          type="button"
          class="view-projects-button"
          @click="goToPortfolio"
        >

          <span class="barcode-small">

            <i
              v-for="n in 12"
              :key="n"
            ></i>

          </span>

          <span>
            VIEW ALL PROJECTS
          </span>

          <span>
            ↗
          </span>

        </button>

      </aside>


      <!-- =======================================
           PROJECT STAGE
      ======================================== -->

      <main class="work-stage">


        <!-- =====================================
             MAIN CARD
        ====================================== -->

        <article class="main-project-card">


          <!-- CARD TOP -->

          <div class="project-top">

            <div class="project-id">

              <span class="meta-label">
                PROJECT NO.
              </span>

              <strong>
                {{ formatProjectNumber(currentProject.id) }}
              </strong>

            </div>


            <div class="project-year">

              <strong>
                {{ currentProject.year }}
              </strong>

              <span>
                {{ currentProject.status }}
              </span>

            </div>

          </div>


          <!-- IMAGE -->

          <div class="project-image-wrap">

            <img
              :key="currentProject.id"
              :src="currentProject.image"
              :alt="currentProject.name"
              class="project-image"
            />

            <div class="image-overlay"></div>

            <span class="image-tag">
              {{ currentProject.category }}
            </span>

          </div>


          <!-- CARD BOTTOM -->

          <div class="project-bottom">

            <div class="project-main-info">

              <span class="meta-label">
                {{ currentProject.category }}
              </span>

              <h2>
                {{ currentProject.name }}
              </h2>

              <p class="project-type">
                {{ currentProject.type }}
              </p>

            </div>


            <div class="project-description">

              <p>
                {{ currentProject.description }}
              </p>

            </div>


            <div class="project-tech">

              <span
                v-for="technology in currentProject.technologies"
                :key="technology"
              >
                {{ technology }}
              </span>

            </div>

          </div>


          <!-- SIDE INFORMATION -->

          <aside class="project-info-panel">

            <div class="info-row">

              <span>
                CLIENT
              </span>

              <strong>
                {{ currentProject.client }}
              </strong>

            </div>


            <div class="info-row">

              <span>
                CATEGORY
              </span>

              <strong>
                {{ currentProject.category }}
              </strong>

            </div>


            <div class="info-row">

              <span>
                ROLE
              </span>

              <strong>
                {{ currentProject.role }}
              </strong>

            </div>


            <div class="info-row">

              <span>
                YEAR
              </span>

              <strong>
                {{ currentProject.year }}
              </strong>

            </div>


            <div class="info-row">

              <span>
                STATUS
              </span>

              <strong class="status-complete">

                <i></i>

                {{ currentProject.status }}

              </strong>

            </div>


            <div class="side-barcode">

              <i
                v-for="n in 20"
                :key="n"
              ></i>

            </div>


            <small>
              #{{ formatProjectNumber(currentProject.id) }}
              — {{ currentProject.shortName }}
            </small>

          </aside>

        </article>


        <!-- =====================================
             CARD NAVIGATION
        ====================================== -->

        <div class="stage-navigation">

          <button
            type="button"
            class="stage-arrow"
            @click="previousProject"
            aria-label="Previous project"
          >
            ←
          </button>


          <div class="stage-dots">

            <button
              v-for="(project, index) in featuredProjects"
              :key="project.id"
              type="button"
              :class="{
                active: activeProject === index
              }"
              @click="changeProject(index)"
              :aria-label="`Open ${project.name}`"
            ></button>

          </div>


          <button
            type="button"
            class="stage-arrow"
            @click="nextProject"
            aria-label="Next project"
          >
            →
          </button>

        </div>

      </main>

    </div>

  </section>
</template>


<script setup lang="ts">

import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref
} from "vue";

import {
  useRouter
} from "vue-router";

import gsap from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

import {
  projects,
  type Project
} from "./workData";


// =========================================
// ROUTER
// =========================================

const router = useRouter();


// =========================================
// GSAP
// =========================================

gsap.registerPlugin(ScrollTrigger);


// =========================================
// FEATURED PROJECTS
// =========================================
//
// Homepage only shows the first 5.
// Full portfolio shows all projects.
//

const featuredProjects = [
  projects.find(project => project.id === 3),  // 3D Exhibition
  projects.find(project => project.id === 17), // Brochure
  projects.find(project => project.id === 4),  // Packaging
  projects.find(project => project.id === 1),  // Web Development
  projects.find(project => project.id === 2),  // UI/UX
].filter((project): project is Project => Boolean(project));

// =========================================
// STATE
// =========================================

const activeProject = ref(0);


// =========================================
// CURRENT PROJECT
// =========================================

const currentProject = computed(() => {
  return (
    featuredProjects[activeProject.value] ||
    featuredProjects[0]
  );
});


// =========================================
// HELPERS
// =========================================

function formatNumber(number: number) {
  return String(number).padStart(2, "0");
}


function formatProjectNumber(number: number) {
  return String(number).padStart(3, "0");
}


// =========================================
// CHANGE PROJECT
// =========================================

function changeProject(index: number) {

  if (
    index < 0 ||
    index >= featuredProjects.length
  ) {
    return;
  }

  if (index === activeProject.value) {
    return;
  }

  activeProject.value = index;
}


// =========================================
// NEXT PROJECT
// =========================================

function nextProject() {

  if (!featuredProjects.length) {
    return;
  }

  activeProject.value =
    (activeProject.value + 1) %
    featuredProjects.length;
}


// =========================================
// PREVIOUS PROJECT
// =========================================

function previousProject() {

  if (!featuredProjects.length) {
    return;
  }

  activeProject.value =
    (
      activeProject.value -
      1 +
      featuredProjects.length
    ) %
    featuredProjects.length;
}


// =========================================
// GO TO FULL PORTFOLIO
// =========================================

function goToPortfolio() {
  router.push("/portfolio");
}


// =========================================
// GSAP CONTEXT
// =========================================

let animationContext:
  gsap.Context | null = null;


// =========================================
// MOUNT
// =========================================

onMounted(() => {

  animationContext = gsap.context(() => {

    // ---------------------------------------
    // INITIAL STATES
    // ---------------------------------------

    gsap.set(".work-label", {
      opacity: 0,
      y: 25
    });

    gsap.set(".work-title-wrap", {
      opacity: 0,
      y: 45
    });

    gsap.set(".work-counter", {
      opacity: 0,
      y: 25
    });

    gsap.set(".work-sidebar", {
      opacity: 0,
      x: -40
    });

    gsap.set(".main-project-card", {
      opacity: 0,
      y: 60,
      scale: 0.97
    });

    gsap.set(".stage-navigation", {
      opacity: 0,
      y: 25
    });


    // ---------------------------------------
    // REVEAL TIMELINE
    // ---------------------------------------

    const timeline = gsap.timeline({

      scrollTrigger: {

        trigger: ".work-section",

        start: "top 75%",

        toggleActions:
          "play none none reverse"

      }

    });


    timeline

      // LABEL
      .to(".work-label", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      })

      // TITLE
      .to(
        ".work-title-wrap",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out"
        },
        "-=0.25"
      )

      // COUNTER
      .to(
        ".work-counter",
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out"
        },
        "-=0.4"
      )

      // SIDEBAR
      .to(
        ".work-sidebar",
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out"
        },
        "-=0.2"
      )

      // PROJECT CARD
      .to(
        ".main-project-card",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      )

      // NAVIGATION
      .to(
        ".stage-navigation",
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out"
        },
        "-=0.35"
      );


    ScrollTrigger.refresh();

  });

});


// =========================================
// CLEANUP
// =========================================

onBeforeUnmount(() => {

  animationContext?.revert();

  ScrollTrigger.refresh();

});

</script>


<style scoped>
@import "./work.css";
</style>