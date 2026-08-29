<template>
  <div class="policy-page">

    <Navbar />

    <main class="policy-container">

      <!-- HEADER -->

      <div class="section-label">
        <span class="section-number">08</span>
        <span class="section-line"></span>
        <span>LEGAL</span>
      </div>


      <div class="policy-header">

        <p class="eyebrow">
          TERMS & CONDITIONS
        </p>

        <h1>
          Clear terms.
          <span>Better work.</span>
        </h1>

        <p class="policy-intro">
          These Terms & Conditions outline the terms under
          which our design, development, and digital services
          are provided.
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
            <h2>Services</h2>

            <p>
              We provide creative design, web development,
              branding, digital marketing, and related digital
              services as agreed with the client.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">02</span>

          <div>
            <h2>Project Scope</h2>

            <p>
              The scope, deliverables, timelines, and
              requirements of each project will be discussed
              and agreed upon before work begins.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">03</span>

          <div>
            <h2>Payments</h2>

            <p>
              Project fees, payment schedules, and applicable
              charges will be communicated and agreed upon
              before the project begins.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">04</span>

          <div>
            <h2>Revisions</h2>

            <p>
              Revisions will be handled according to the
              agreed project scope. Additional revisions or
              changes outside the agreed scope may result in
              additional charges.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">05</span>

          <div>
            <h2>Intellectual Property</h2>

            <p>
              Ownership and usage rights for final project
              deliverables will be determined according to
              the agreement between the client and the
              service provider.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">06</span>

          <div>
            <h2>Communication</h2>

            <p>
              Clients are expected to provide accurate
              information, feedback, and approvals required
              to complete the project within the agreed
              timeline.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">07</span>

          <div>
            <h2>Changes to These Terms</h2>

            <p>
              These terms may be updated from time to time.
              Updated terms will be published on this page.
            </p>
          </div>
        </section>


        <section>
          <span class="policy-number">08</span>

          <div>
            <h2>Contact</h2>

            <p>
              If you have questions about these Terms &
              Conditions, please contact us through the
              contact section of this website.
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