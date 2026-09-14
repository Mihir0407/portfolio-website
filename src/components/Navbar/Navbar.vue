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
// NAVIGATION SECTIONS
// ============================================

const sections = [
  "home",
  "about",
  "work",
  "portfolio",
  "services",
  "contact",
];


// ============================================
// STATE
// ============================================

const activeSection = ref("home");
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle("menu-open", isMenuOpen.value);
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.classList.remove("menu-open");
};

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
    behavior: smooth ? "smooth" : "auto",
  });
};


// ============================================
// NAVIGATE TO SECTION / PAGE
// ============================================

const navigateTo = async (
  sectionId: string
) => {
    closeMenu();
  // ==========================================
  // PORTFOLIO PAGE
  // ==========================================

  if (sectionId === "portfolio") {

    if (route.path !== "/portfolio") {
      await router.push("/portfolio");
    }

    activeSection.value = "portfolio";

    return;
  }


  // ==========================================
  // ALREADY ON HOME
  // ==========================================

  if (route.path === "/") {

    // Update URL hash
    if (route.hash !== `#${sectionId}`) {

      await router.replace({
        path: "/",
        hash: `#${sectionId}`,
      });

    }

    // Wait for Vue DOM update
    await nextTick();

    // Wait for layout / GSAP
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
  // OTHER PAGE → HOME
  // ==========================================

  await router.push({
    path: "/",
    hash: `#${sectionId}`,
  });

  await nextTick();

  // Wait for Home page to mount
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

  // ==========================================
  // PORTFOLIO PAGE
  // ==========================================

  if (route.path === "/portfolio") {

    activeSection.value = "portfolio";

    return;
  }


  // ==========================================
  // OTHER NON-HOME PAGES
  // ==========================================

  if (route.path !== "/") {

    activeSection.value = "";

    return;
  }


  // ==========================================
  // HOME SECTIONS
  // ==========================================

  const scrollPosition =
    window.scrollY +
    NAVBAR_OFFSET +
    20;

  let current = "home";


  const homeSections = [
    "home",
    "about",
    "work",
    "services",
    "contact",
  ];


  for (const id of homeSections) {

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


  activeSection.value = current;
};


// ============================================
// NAVBAR SCROLL STATE
// ============================================

const updateNavbarState = () => {

  const navbar =
    document.querySelector(".navbar");

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


  // Portfolio is a separate page
  if (
    !sections.includes(id) ||
    id === "portfolio"
  ) {

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
  // NAVBAR ENTRANCE ANIMATION
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
      @click.prevent="navigateTo('home')"
    >

      <img
        src="/images/karm-logo.png"
        alt="Karm Design Studio"
        class="nav-logo-image"
      />

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
          :href="
            section === 'portfolio'
              ? '/portfolio'
              : `/#${section}`
          "

          class="nav-link"

          :class="{
            active:
              (route.path === '/' &&
                activeSection === section) ||
              (route.path === '/portfolio' &&
                section === 'portfolio')
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

      <span class="nav-cta-text">
        Let's talk
      </span>

      <span class="nav-cta-arrow">
        ↗
      </span>

    </a>
    <button
  class="mobile-menu-button"
  type="button"
  aria-label="Open navigation menu"
  :aria-expanded="isMenuOpen"
  @click="toggleMenu"
>
  <span></span>
  <span></span>
  <span></span>
</button>

  </nav>
  <Transition name="mobile-overlay">
  <div
    v-if="isMenuOpen"
    class="mobile-menu-overlay"
    @click="closeMenu"
  ></div>
</Transition>

<Transition name="mobile-sidebar">
  <aside
    v-if="isMenuOpen"
    class="mobile-sidebar"
  >

    <div class="mobile-sidebar-header">
      <span>MENU</span>

      <button
        class="mobile-menu-close"
        type="button"
        @click="closeMenu"
      >
        ×
      </button>
    </div>

    <nav class="mobile-navigation">

      <a
        v-for="(section, index) in sections"
        :key="section"
        :href="
          section === 'portfolio'
            ? '/portfolio'
            : `/#${section}`
        "
        class="mobile-nav-link"
        :class="{
          active:
            (route.path === '/' &&
              activeSection === section) ||
            (route.path === '/portfolio' &&
              section === 'portfolio')
        }"
        @click.prevent="navigateTo(section)"
      >

        <span class="mobile-nav-number">
          {{ String(index + 1).padStart(2, "0") }}
        </span>

        <span class="mobile-nav-name">
          {{ section }}
        </span>

        <span class="mobile-nav-arrow">
          ↗
        </span>

      </a>

    </nav>

    <a
      href="/#contact"
      class="mobile-sidebar-cta"
      @click.prevent="navigateTo('contact')"
    >
      <span>Let's talk</span>
      <span>↗</span>
    </a>

  </aside>
</Transition>

</template>