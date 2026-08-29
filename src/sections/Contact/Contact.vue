<template>
  <section id="contact" class="contact-section">

    <div class="contact-dots"></div>

    <div class="contact-container">

      <!-- LEFT SIDE -->
      <div class="contact-info">

        <div class="section-label">
          <span class="section-number">05</span>
          <span class="section-line"></span>
          <span>CONTACT</span>
        </div>

        <h2 class="contact-title">
          Let's create
          <span>something</span>
          meaningful.
        </h2>

        <p class="contact-description">
          Have an idea, project or business that needs
          a creative digital direction? Let's talk about it.
        </p>

        <div class="availability">
          <span class="availability-dot"></span>
          AVAILABLE FOR PROJECTS
        </div>

        <div class="contact-details">

          <div class="detail-item">
            <span class="detail-label">EMAIL</span>

            <a href="mailto:hello@yourdomain.com">
              hello@yourdomain.com
            </a>
          </div>

          <div class="detail-item">
            <span class="detail-label">LOCATION</span>

            <span>Ahmedabad, India</span>
          </div>

        </div>

      </div>


      <!-- RIGHT SIDE -->
      <div class="contact-form-wrapper">

        <div class="form-header">
          <span>START A PROJECT</span>
          <span>↗</span>
        </div>


        <form @submit.prevent="submitForm">

          <!-- NAME -->
          <div class="input-group">

            <label>01 / YOUR NAME</label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your name"
              required
            />

          </div>


          <!-- EMAIL -->
          <div class="input-group">

            <label>02 / EMAIL ADDRESS</label>

            <input
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              required
            />

          </div>


          <!-- SERVICE -->
          <div class="input-group">

            <label>03 / WHAT DO YOU NEED?</label>

            <select
              v-model="form.service"
              required
            >

              <option
                value=""
                disabled
              >
                Select a service
              </option>

              <option>
                Website Development
              </option>

              <option>
                UI/UX Design
              </option>

              <option>
                Brand Identity
              </option>

              <option>
                Packaging Design
              </option>

              <option>
                Digital Marketing
              </option>

              <option>
                Other
              </option>

            </select>

          </div>


          <!-- MESSAGE -->
          <div class="input-group">

            <label>04 / PROJECT DETAILS</label>

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Tell us about your project..."
              required
            ></textarea>

          </div>


          <!-- BUTTON -->
          <button
            type="submit"
            class="submit-button"
            :disabled="loading"
          >

            <span>
              {{ loading ? "SENDING..." : "SEND ENQUIRY" }}
            </span>

            <span class="button-arrow">
              ↗
            </span>

          </button>


          <!-- SUCCESS -->
          <div
            v-if="success"
            class="form-message success"
          >
            ✓ Thanks! We'll get back to you soon.
          </div>


          <!-- ERROR -->
          <div
            v-if="error"
            class="form-message error"
          >
            Something went wrong. Please try again.
          </div>

        </form>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">

import { ref } from "vue";

import "./Contact.css";


/* =========================================
   FORM DATA
========================================= */

const form = ref({

  name: "",

  email: "",

  service: "",

  message: ""

});


/* =========================================
   STATES
========================================= */

const loading = ref(false);

const success = ref(false);

const error = ref(false);


/* =========================================
   SUBMIT FORM
========================================= */

const submitForm = async () => {

  loading.value = true;

  success.value = false;

  error.value = false;


  try {

    const response = await fetch(

      `${import.meta.env.VITE_API_URL}/api/contact`,

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(form.value)

      }

    );


    const data = await response.json();


    if (!response.ok) {

      throw new Error(data.message);

    }


    success.value = true;


    form.value = {

      name: "",

      email: "",

      service: "",

      message: ""

    };


  } catch (err) {

    console.error(err);

    error.value = true;

  } finally {

    loading.value = false;

  }

};

</script>