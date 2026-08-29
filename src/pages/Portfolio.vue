<template>
  <main class="portfolio-page">

    <!-- =========================================
         HEADER
    ========================================== -->

    <header class="portfolio-header">

      <div class="portfolio-label">

        <span class="portfolio-label-number">
          06
        </span>

        <span class="portfolio-label-line"></span>

        <span>
          PORTFOLIO
        </span>

      </div>


      <div class="portfolio-heading">

        <div class="portfolio-heading-left">

          <h1 class="portfolio-title">

            Selected
            <br />

            <span class="portfolio-projects">
              projects.
            </span>

          </h1>


          <p class="portfolio-subtitle">

            A collection of digital experiences,
            identities, visual systems and creative
            work built with purpose.

          </p>

        </div>


        <div class="portfolio-count">

          <strong>
            {{ formatNumber(filteredProjects.length) }}
          </strong>

          <span>
            PROJECTS
          </span>

        </div>

      </div>

    </header>


    <!-- =========================================
         FILTERS
    ========================================== -->

    <section class="portfolio-filter-section">

      <div class="filter-header">

        <span>
          FILTER BY
        </span>

        <span>
          {{ activeCategory }}
        </span>

      </div>


      <div class="portfolio-filters">

        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :class="{
            active: activeCategory === category
          }"
          @click="setCategory(category)"
        >

          {{ category }}

        </button>

      </div>

    </section>


    <!-- =========================================
         PROJECT GRID
    ========================================== -->

    <section class="portfolio-grid">

      <article
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        class="portfolio-card"
        tabindex="0"
        @click="openProject(project)"
        @keydown.enter="openProject(project)"
      >

        <!-- CARD TOP -->

        <div class="portfolio-card-top">

          <span>
            {{ formatNumber(index + 1) }}
          </span>

          <span>
            {{ project.year }}
          </span>

        </div>


        <!-- IMAGE -->

        <div class="portfolio-image-wrap">

          <img
            :src="project.image"
            :alt="project.name"
            class="portfolio-image"
            loading="lazy"
          />

          <div class="portfolio-image-overlay"></div>

          <span class="portfolio-category">
            {{ project.category }}
          </span>

        </div>


        <!-- INFORMATION -->

        <div class="portfolio-card-info">

          <div class="portfolio-card-title">

            <span class="portfolio-type">
              {{ project.type }}
            </span>

            <h2>
              {{ project.name }}
            </h2>

          </div>


          <button
            type="button"
            class="portfolio-arrow"
            @click.stop="openProject(project)"
            :aria-label="`Open ${project.name}`"
          >

            ↗

          </button>

        </div>


        <!-- DESCRIPTION -->

        <p class="portfolio-description">
          {{ project.description }}
        </p>


        <!-- TECHNOLOGIES -->

        <div
          v-if="project.technologies?.length"
          class="portfolio-tech"
        >

          <span
            v-for="technology in project.technologies"
            :key="technology"
          >

            {{ technology }}

          </span>

        </div>

      </article>


      <!-- =========================================
           EMPTY STATE
      ========================================== -->

      <div
        v-if="filteredProjects.length === 0"
        class="portfolio-empty"
      >

        <span>
          00
        </span>

        <h2>
          No projects found.
        </h2>

        <p>
          Try selecting another category.
        </p>

        <button
          type="button"
          @click="setCategory('ALL')"
        >

          VIEW ALL PROJECTS

        </button>

      </div>

    </section>


    <!-- =========================================
         FOOTER
    ========================================== -->

    <footer class="portfolio-footer">

      <button
        type="button"
        class="portfolio-back"
        @click="goHome"
      >

        <span>
          ←
        </span>

        BACK TO HOME

      </button>


      <div class="portfolio-footer-right">

        <span>
          SELECTED WORK
        </span>

        <span>
          —
        </span>

        <span>
          {{ currentYear }}
        </span>

      </div>

    </footer>


    <!-- =====================================================
         PROJECT VIEWER
    ====================================================== -->

    <Transition name="project-view">

      <div
        v-if="selectedProject"
        class="project-viewer"
      >

        <!-- =========================================
             VIEWER HEADER
        ========================================== -->

        <header class="project-viewer-header">

          <div class="viewer-brand">

            <span class="viewer-number">
              {{ formatProjectNumber(selectedProject.id) }}
            </span>

            <span class="viewer-line"></span>

            <span>
              {{ selectedProject.category }}
            </span>

          </div>


          <div class="viewer-project-name">

            {{ selectedProject.name }}

          </div>


          <button
            type="button"
            class="viewer-close"
            @click="closeProject"
            aria-label="Close project"
          >

            <span></span>
            <span></span>

          </button>

        </header>


        <!-- =========================================
             VIEWER SCROLL
        ========================================== -->

        <div
          ref="viewerScroll"
          class="project-viewer-scroll"
        >

          <div class="project-viewer-content">


            <!-- =====================================
                 PROJECT INTRO
            ====================================== -->

            <section class="viewer-intro">

              <div class="viewer-intro-left">

                <span class="viewer-eyebrow">
                  {{ selectedProject.type }}
                </span>

                <h1>
                  {{ selectedProject.name }}
                </h1>

                <p>
                  {{ selectedProject.description }}
                </p>

              </div>


              <div class="viewer-meta">

                <div>

                  <span>
                    CLIENT
                  </span>

                  <strong>
                    {{ selectedProject.client || "—" }}
                  </strong>

                </div>


                <div>

                  <span>
                    YEAR
                  </span>

                  <strong>
                    {{ selectedProject.year }}
                  </strong>

                </div>


                <div>

                  <span>
                    ROLE
                  </span>

                  <strong>
                    {{ selectedProject.role || "—" }}
                  </strong>

                </div>


                <div>

                  <span>
                    CATEGORY
                  </span>

                  <strong>
                    {{ selectedProject.category }}
                  </strong>

                </div>

              </div>

            </section>


            <!-- =====================================
                 MAIN PROJECT IMAGE
            ====================================== -->

            <section
              class="viewer-main-image zoomable-image"
              @click="openImageZoom(selectedProject.image)"
            >

              <img
                :src="selectedProject.image"
                :alt="selectedProject.name"
              />

              <div class="image-zoom-hint">
                CLICK TO ZOOM ↗
              </div>

            </section>


            <!-- =====================================
                 PROJECT GALLERY
            ====================================== -->

            <section
              v-if="selectedProject.gallery?.length"
              class="viewer-gallery"
            >

              <div
                v-for="(image, index) in selectedProject.gallery"
                :key="`${selectedProject.id}-${index}`"
                class="viewer-gallery-image zoomable-image"
                @click="openImageZoom(image)"
              >

                <img
                  :src="image"
                  :alt="`${selectedProject.name} ${index + 1}`"
                  loading="lazy"
                />

                <div class="image-zoom-hint">
                  ZOOM ↗
                </div>

              </div>

            </section>


            <!-- =====================================
                 PROJECT DESCRIPTION
            ====================================== -->

            <section class="viewer-bottom">

              <div class="viewer-bottom-title">

                <span>
                  ABOUT THE PROJECT
                </span>

                <h2>
                  {{ selectedProject.name }}
                </h2>

              </div>


              <div class="viewer-bottom-description">

                <p>
                  {{ selectedProject.description }}
                </p>


                <div
                  v-if="selectedProject.technologies?.length"
                  class="viewer-technologies"
                >

                  <span
                    v-for="technology in selectedProject.technologies"
                    :key="technology"
                  >

                    {{ technology }}

                  </span>

                </div>

              </div>

            </section>


            <!-- =====================================
                 NEXT PROJECT
            ====================================== -->

            <button
              type="button"
              class="viewer-next-project"
              @click="openNextProject"
            >

              <span>
                NEXT PROJECT
              </span>

              <strong>
                {{ nextProject?.name || "Back to portfolio" }}
              </strong>

              <span class="next-arrow">
                ↗
              </span>

            </button>


          </div>

        </div>

      </div>

    </Transition>


    <!-- =====================================================
         IMAGE ZOOM / LIGHTBOX
    ====================================================== -->

    <Transition name="image-lightbox">

      <div
        v-if="zoomedImage"
        class="image-lightbox"
        @click.self="closeImageZoom"
      >

        <!-- =========================================
             LIGHTBOX HEADER
        ========================================== -->

        <div class="image-lightbox-header">

          <span>
            IMAGE VIEWER
          </span>


          <span class="image-zoom-percentage">
            {{ Math.round(imageZoom * 100) }}%
          </span>


          <button
            type="button"
            class="image-lightbox-close"
            @click="closeImageZoom"
            aria-label="Close image viewer"
          >

            <span></span>
            <span></span>

          </button>

        </div>


        <!-- =========================================
             IMAGE STAGE
        ========================================== -->

        <div
          class="image-lightbox-stage"
          @wheel="handleImageWheel"
        >

          <img
            :src="zoomedImage"
            alt="Zoomed project image"
            class="zoomed-project-image"
            :style="{
              transform: `scale(${imageZoom})`
            }"
            draggable="false"
          />

        </div>


        <!-- =========================================
             ZOOM CONTROLS
        ========================================== -->

        <div class="image-lightbox-controls">

          <button
            type="button"
            @click="zoomOut"
            :disabled="imageZoom <= MIN_ZOOM"
            aria-label="Zoom out"
          >
            −
          </button>


          <button
            type="button"
            class="reset-zoom"
            @click="resetZoom"
          >
            RESET
          </button>


          <button
            type="button"
            @click="zoomIn"
            :disabled="imageZoom >= MAX_ZOOM"
            aria-label="Zoom in"
          >
            +
          </button>

        </div>


        <!-- =========================================
             LIGHTBOX HINT
        ========================================== -->

        <div class="image-lightbox-hint">

          SCROLL TO ZOOM · ESC TO CLOSE

        </div>

      </div>

    </Transition>

  </main>
</template>


<script setup lang="ts">

import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref
} from "vue";

import {
  useRouter
} from "vue-router";

import {
  projects,
  type Project
} from "../sections/work/workData";

import "./Portfolio.css";


// =====================================================
// ROUTER
// =====================================================

const router = useRouter();


// =====================================================
// CURRENT YEAR
// =====================================================

const currentYear = new Date().getFullYear();


// =====================================================
// NUMBER HELPERS
// =====================================================

const formatNumber = (number: number) => {

  return String(number).padStart(2, "0");

};


const formatProjectNumber = (number: number) => {

  return String(number).padStart(3, "0");

};


// =====================================================
// CATEGORY ORDER
// =====================================================
//
// Main portfolio order:
//
// 1. 3D EXHIBITION
// 2. BROCHURE DESIGN
// 3. PACKAGING DESIGN
// 4. WEB DEVELOPMENT
// 5. UI/UX DESIGN
//
// Remaining categories follow afterwards.
//

const categoryOrder = [
  "3D EXHIBITION",
  "BROCHURE DESIGN",
  "PACKAGING DESIGN",
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "LOGO DESIGN",
  "BRAND IDENTITY",
  "BOOK COVER DESIGN",
  "CATALOG DESIGN",
  "FOOD PACKAGING",
  "BOX PACKAGING"
];


// =====================================================
// FILTER CATEGORIES
// =====================================================

const categories = [
  "ALL",
  ...categoryOrder
];


// =====================================================
// ACTIVE CATEGORY
// =====================================================

const activeCategory = ref("ALL");


// =====================================================
// SELECTED PROJECT
// =====================================================

const selectedProject =
  ref<Project | null>(null);


// =====================================================
// VIEWER SCROLL
// =====================================================

const viewerScroll =
  ref<HTMLElement | null>(null);


// =====================================================
// IMAGE ZOOM
// =====================================================

const zoomedImage =
  ref<string | null>(null);


const imageZoom =
  ref(1);


const MIN_ZOOM = 1;

const MAX_ZOOM = 4;

const ZOOM_STEP = 0.25;


// =====================================================
// SORT PROJECTS BY CATEGORY
// =====================================================
//
// This keeps the actual project cards in the
// same order as the categories above.
//
// Projects inside the same category keep
// their original order from workData.ts.
//

const orderedProjects =
  computed<Project[]>(() => {

    return [...projects].sort(
      (a, b) => {

        const aIndex =
          categoryOrder.indexOf(
            a.category.toUpperCase()
          );

        const bIndex =
          categoryOrder.indexOf(
            b.category.toUpperCase()
          );

        const safeA =
          aIndex === -1
            ? 999
            : aIndex;

        const safeB =
          bIndex === -1
            ? 999
            : bIndex;

        return safeA - safeB;

      }
    );

  });


// =====================================================
// FILTERED PROJECTS
// =====================================================

const filteredProjects =
  computed<Project[]>(() => {

    if (activeCategory.value === "ALL") {

      return orderedProjects.value;

    }


    return orderedProjects.value.filter(
      (project) =>
        project.category.toUpperCase() ===
        activeCategory.value.toUpperCase()
    );

  });


// =====================================================
// NEXT PROJECT
// =====================================================

const nextProject =
  computed<Project | null>(() => {

    if (!selectedProject.value) {

      return null;

    }


    const currentIndex =
      filteredProjects.value.findIndex(
        (project) =>
          project.id ===
          selectedProject.value?.id
      );


    if (currentIndex === -1) {

      return null;

    }


    if (
      filteredProjects.value.length <= 1
    ) {

      return null;

    }


    return (
      filteredProjects.value[
        (currentIndex + 1) %
        filteredProjects.value.length
      ] || null
    );

  });


// =====================================================
// BODY SCROLL
// =====================================================

const lockBodyScroll = () => {

  document.body.style.overflow = "hidden";

};


const unlockBodyScroll = () => {

  document.body.style.overflow = "";

};


// =====================================================
// CHANGE CATEGORY
// =====================================================

const setCategory = (
  category: string
) => {

  activeCategory.value = category;


  if (selectedProject.value) {

    closeProject();

  }


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

};


// =====================================================
// OPEN PROJECT
// =====================================================

const openProject = (
  project: Project
) => {

  selectedProject.value = project;

  lockBodyScroll();


  nextTick(() => {

    if (viewerScroll.value) {

      viewerScroll.value.scrollTo({

        top: 0,

        behavior: "auto"

      });

    }

  });

};


// =====================================================
// CLOSE PROJECT
// =====================================================

const closeProject = () => {

  selectedProject.value = null;

  unlockBodyScroll();

};


// =====================================================
// NEXT PROJECT
// =====================================================

const openNextProject = () => {

  if (!nextProject.value) {

    closeProject();

    return;

  }


  selectedProject.value =
    nextProject.value;


  nextTick(() => {

    if (viewerScroll.value) {

      viewerScroll.value.scrollTo({

        top: 0,

        behavior: "auto"

      });

    }

  });

};


// =====================================================
// OPEN IMAGE ZOOM
// =====================================================

const openImageZoom = (
  image: string
) => {

  zoomedImage.value = image;

  imageZoom.value = 1;

  lockBodyScroll();

};


// =====================================================
// CLOSE IMAGE ZOOM
// =====================================================

const closeImageZoom = () => {

  zoomedImage.value = null;

  imageZoom.value = 1;


  // Keep body locked when project viewer
  // is still open.

  if (selectedProject.value) {

    lockBodyScroll();

  } else {

    unlockBodyScroll();

  }

};


// =====================================================
// ZOOM IN
// =====================================================

const zoomIn = () => {

  imageZoom.value = Math.min(

    MAX_ZOOM,

    Number(
      (
        imageZoom.value +
        ZOOM_STEP
      ).toFixed(2)
    )

  );

};


// =====================================================
// ZOOM OUT
// =====================================================

const zoomOut = () => {

  imageZoom.value = Math.max(

    MIN_ZOOM,

    Number(
      (
        imageZoom.value -
        ZOOM_STEP
      ).toFixed(2)
    )

  );

};


// =====================================================
// RESET ZOOM
// =====================================================

const resetZoom = () => {

  imageZoom.value = 1;

};


// =====================================================
// MOUSE WHEEL ZOOM
// =====================================================

const handleImageWheel = (
  event: WheelEvent
) => {

  event.preventDefault();


  if (event.deltaY < 0) {

    zoomIn();

  } else {

    zoomOut();

  }

};


// =====================================================
// ESCAPE KEY
// =====================================================

const handleEscape = (
  event: KeyboardEvent
) => {

  if (event.key !== "Escape") {

    return;

  }


  // Image zoom gets priority.

  if (zoomedImage.value) {

    closeImageZoom();

    return;

  }


  // Then close project viewer.

  if (selectedProject.value) {

    closeProject();

  }

};


// =====================================================
// GO HOME
// =====================================================

const goHome = () => {

  closeImageZoom();

  closeProject();

  router.push("/");

};


// =====================================================
// MOUNT
// =====================================================

onMounted(() => {

  window.addEventListener(
    "keydown",
    handleEscape
  );

});


// =====================================================
// UNMOUNT
// =====================================================

onUnmounted(() => {

  window.removeEventListener(
    "keydown",
    handleEscape
  );

  unlockBodyScroll();

});

</script>


<style scoped>

/*
  Portfolio.css is loaded globally
  through the import above.
*/

</style>