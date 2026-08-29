<script setup lang="ts">

import {
  nextTick,
  onMounted,
  onUnmounted,
  ref,
} from "vue";

import {
  useRoute,
  useRouter,
} from "vue-router";

import gsap from "gsap";

import "./Navbar.css";


// ============================================
// ROUTER
// ============================================

const router = useRouter();
const route = useRoute();


// ============================================
// SECTIONS
// ============================================

const sections = [
  "home",
  "about",
  "work",
  "services",
  "contact",
];


// ============================================
// STATE
// ============================================

const activeSection = ref("home");


// ============================================
// NAVBAR OFFSET
// ============================================

const NAVBAR_OFFSET = 120;


// ============================================
// GET SECTION
// ============================================

const getSection = (id: string) => {

  return document.getElementById(id);

};


// ============================================
// SCROLL TO SECTION
// ============================================

const scrollToSection = (
  id: string,
  smooth = true
) => {

  const section = getSection(id);

  if (!section) {
    return;
  }


  const sectionTop =
    section.getBoundingClientRect().top +
    window.scrollY;


  const target =
    Math.max(
      0,
      sectionTop - NAVBAR_OFFSET
    );


  window.scrollTo({

    top: target,

    behavior:
      smooth
        ? "smooth"
        : "auto",

  });

};


// ============================================
// NAVIGATE TO SECTION
// ============================================

const navigateTo = async (
  sectionId: string
) => {

  // ==========================================
  // ALREADY ON HOME
  // ==========================================

  if (route.path === "/") {

    /*
     * Update URL hash without allowing
     * Vue Router to perform its own scrolling.
     */

    if (route.hash !== `#${sectionId}`) {

      await router.replace({
        path: "/",
        hash: `#${sectionId}`,
      });

    }


    /*
     * Wait for Vue DOM update.
     */

    await nextTick();


    /*
     * Wait for GSAP / ScrollTrigger layout.
     */

    setTimeout(() => {

      scrollToSection(
        sectionId,
        true
      );

      updateActiveSection();

    }, 50);


    return;

  }


  // ==========================================
  // OTHER PAGE
  // ==========================================

  await router.push({
    path: "/",
    hash: `#${sectionId}`,
  });


  await nextTick();


  /*
   * Wait until Home + GSAP are mounted.
   */

  setTimeout(() => {

    scrollToSection(
      sectionId,
      true
    );

    updateActiveSection();

  }, 250);

};


// ============================================
// ACTIVE SECTION
// ============================================

const updateActiveSection = () => {

  /*
   * Active section only matters on Home.
   */

  if (route.path !== "/") {

    activeSection.value = "";

    return;

  }


  const scrollPosition =
    window.scrollY +
    NAVBAR_OFFSET +
    20;


  let current = "home";


  for (const id of sections) {

    const section =
      getSection(id);

    if (!section) {
      continue;
    }


    const top =
      section.getBoundingClientRect().top +
      window.scrollY;


    if (
      scrollPosition >= top
    ) {

      current = id;

    }

  }


  activeSection.value =
    current;

};


// ============================================
// NAVBAR SCROLL STATE
// ============================================

const updateNavbarState = () => {

  const navbar =
    document.querySelector(
      ".navbar"
    );

  if (!navbar) {
    return;
  }


  navbar.classList.toggle(
    "navbar-scrolled",
    window.scrollY > 40
  );

};


// ============================================
// SCROLL HANDLER
// ============================================

const handleScroll = () => {

  updateActiveSection();

  updateNavbarState();

};


// ============================================
// INITIAL HASH
// ============================================

const handleInitialHash = async () => {

  if (route.path !== "/") {
    return;
  }

  if (!route.hash) {
    return;
  }


  const id =
    route.hash.substring(1);


  if (!sections.includes(id)) {
    return;
  }


  await nextTick();


  setTimeout(() => {

    scrollToSection(
      id,
      false
    );

    updateActiveSection();

  }, 250);

};


// ============================================
// MOUNT
// ============================================

onMounted(async () => {

  // ==========================================
  // NAVBAR ENTRANCE
  // ==========================================

  gsap.fromTo(

    ".navbar",

    {
      y: -120,
      opacity: 0,
      scale: 0.96,
    },

    {
      y: 0,
      opacity: 1,
      scale: 1,

      duration: 1.2,

      delay: 0.15,

      ease: "power3.out",

    }

  );


  // ==========================================
  // SCROLL EVENT
  // ==========================================

  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true,
    }
  );


  // ==========================================
  // INITIAL STATE
  // ==========================================

  updateActiveSection();

  updateNavbarState();

  await handleInitialHash();

});


// ============================================
// CLEANUP
// ============================================

onUnmounted(() => {

  window.removeEventListener(
    "scroll",
    handleScroll
  );

});

</script>


<template>

  <nav class="navbar">


    <!-- ======================================
         LOGO
    ======================================= -->

    <a
      href="/"
      class="nav-logo"

      @click.prevent="
        navigateTo('home')
      "
    >

      <span class="logo-icon">
        F
      </span>

      <span class="logo-text">
        freelancer
      </span>

    </a>


    <!-- ======================================
         NAVIGATION
    ======================================= -->

    <ul class="nav-links">

      <li
        v-for="section in sections"
        :key="section"
      >

        <a
          :href="`/#${section}`"

          class="nav-link"

          :class="{
            active:
              route.path === '/' &&
              activeSection === section
          }"

          @click.prevent="
            navigateTo(section)
          "
        >

          {{ section }}

        </a>

      </li>

    </ul>


    <!-- ======================================
         CTA
    ======================================= -->

    <a
      href="/#contact"
      class="nav-cta"

      @click.prevent="
        navigateTo('contact')
      "
    >

      <span>
        Let's talk
      </span>

      <span class="nav-cta-arrow">
        ↗
      </span>

    </a>

  </nav>

</template>