<script setup lang="ts">

import Navbar from "../components/Navbar/Navbar.vue";

import Hero from "../sections/Hero/Hero.vue";
import About from "../sections/about/About.vue";
import Work from "../sections/work/work.vue";
import Services from "../sections/Services/Services.vue";
import Contact from "../sections/Contact/Contact.vue";
import Footer from '../sections/Footer/Footer.vue'

</script>

<template>

  <div class="app">

    <Navbar />

    <main>

      <Hero />

      <About />

      <Work />

      <Services />

      <Contact />

      <Footer />

    </main>

  </div>

</template>

<style scoped>

.app {
  width: 100%;
  min-height: 100vh;
}

</style>