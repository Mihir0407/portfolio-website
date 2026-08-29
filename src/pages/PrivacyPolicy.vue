<template>
  <div class="policy-page">

    <Navbar />

    <main class="policy-container">

      <!-- HEADER -->

      <div class="section-label">
        <span class="section-number">07</span>
        <span class="section-line"></span>
        <span>LEGAL</span>
      </div>

      <div class="policy-header">

        <p class="eyebrow">
          PRIVACY POLICY
        </p>

        <h1>
          Your privacy
          <span>matters.</span>
        </h1>

        <p class="policy-intro">
          This Privacy Policy explains how we collect, use,
          and protect information when you use this website
          or contact us about our services.
        </p>

        <span class="updated">
          LAST UPDATED · AUGUST 2026
        </span>

      </div>


      <!-- CONTENT -->

      <div class="policy-content">

        <section>
          <span class="policy-number">01</span>

          <div>
            <h2>Information We Collect</h2>

            <p>
              When you submit an enquiry through our contact
              form, we may collect information such as your
              name, email address, selected service, and
              project details.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">02</span>

          <div>
            <h2>How We Use Your Information</h2>

            <p>
              Information submitted through the website is
              used to respond to enquiries, understand your
              project requirements, and communicate with you
              regarding our services.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">03</span>

          <div>
            <h2>Data Protection</h2>

            <p>
              We take reasonable steps to protect the
              information submitted through this website
              against unauthorized access, misuse, or
              disclosure.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">04</span>

          <div>
            <h2>Third-Party Services</h2>

            <p>
              This website may use third-party services for
              hosting, analytics, communication, or other
              technical functionality. These services may
              process information according to their own
              privacy policies.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">05</span>

          <div>
            <h2>Contact</h2>

            <p>
              If you have questions about this Privacy Policy,
              please contact us through the contact section
              of this website.
            </p>
          </div>
        </section>

      </div>

    </main>

    <Footer />

  </div>
</template>


<script setup lang="ts">

import Navbar from "../components/Navbar/Navbar.vue";
import Footer from "../sections/Footer/Footer.vue";

import "./Policy.css";

</script>