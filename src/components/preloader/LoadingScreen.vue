<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const tl = gsap.timeline();

  // Initial state
  gsap.set(".loader-logo", {
    opacity: 0,
    scale: 0.85,
  });

  gsap.set(".loader-shutter-top", {
    yPercent: 0,
  });

  gsap.set(".loader-shutter-bottom", {
    yPercent: 0,
  });

  // Logo appears
  tl.to(".loader-logo", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power3.out",
  })

    // Small pause
    .to({}, {
      duration: 0.35,
    })

    // Shutter opens
    .to(
      ".loader-shutter-top",
      {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut",
      },
      "open"
    )

    .to(
      ".loader-shutter-bottom",
      {
        yPercent: 100,
        duration: 1.1,
        ease: "power4.inOut",
      },
      "open"
    )

    // Logo disappears with shutter
    .to(
      ".loader-logo",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.35,
        ease: "power2.in",
      },
      "open"
    )

    // Remove loader
    .set(".loading-screen", {
      display: "none",
    });
});
</script>

<template>
  <div class="loading-screen">

    <!-- TOP SHUTTER -->
    <div class="loader-shutter loader-shutter-top"></div>

    <!-- BOTTOM SHUTTER -->
    <div class="loader-shutter loader-shutter-bottom"></div>

    <!-- CENTER LOGO -->
    <div class="loader-logo">
      <img
        src="/images/karm-logo.png"
        alt="Karm Design Studio"
      />
    </div>

  </div>
</template>

<style scoped>

.loading-screen {
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100vh;

  z-index: 99999;

  overflow: hidden;

  pointer-events: none;
}


/* =========================================
   SHUTTER
========================================= */

.loader-shutter {
  position: absolute;

  left: 0;

  width: 100%;
  height: 50%;

  background: #fafaf8;

  z-index: 1;
}


.loader-shutter-top {
  top: 0;

  transform-origin: top center;
}


.loader-shutter-bottom {
  bottom: 0;

  transform-origin: bottom center;
}


/* =========================================
   LOGO
========================================= */

.loader-logo {
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 5;

  display: flex;

  align-items: center;
  justify-content: center;
}


.loader-logo img {
  width: 190px;
  height: auto;

  display: block;

  object-fit: contain;
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

  .loader-logo img {
    width: 145px;
  }

}

</style>