<template>
  <div class="admin-page">

    <!-- ============================= -->
    <!-- HEADER -->
    <!-- ============================= -->

    <header class="admin-header">

      <div class="admin-brand">
        <div class="admin-logo">F</div>

        <div>
          <span class="brand-small">PORTFOLIO</span>
          <h2>Admin</h2>
        </div>
      </div>

      <button
        class="logout-button"
        @click="logout"
      >
        LOGOUT
        <span>↗</span>
      </button>

    </header>


    <!-- ============================= -->
    <!-- MAIN -->
    <!-- ============================= -->

    <main class="admin-container">

      <!-- SECTION LABEL -->

      <div class="section-label">

        <span class="section-number">05</span>

        <span class="section-line"></span>

        <span>ADMIN DASHBOARD</span>

      </div>


      <!-- TITLE -->

      <div class="dashboard-heading">

        <div>

          <p class="eyebrow">
            PORTFOLIO MANAGEMENT
          </p>

          <h1>
            Project
            <span>Enquiries.</span>
          </h1>

          <p class="heading-description">
            Manage enquiries received through your portfolio.
          </p>

        </div>

        <button
          class="refresh-button"
          @click="fetchContacts"
          :disabled="loading"
        >
          {{ loading ? "LOADING..." : "REFRESH ↻" }}
        </button>

      </div>


      <!-- ============================= -->
      <!-- STATS -->
      <!-- ============================= -->

      <section class="stats-grid">

        <div class="stat-card">

          <div class="stat-top">
            <span>TOTAL ENQUIRIES</span>
            <span>01</span>
          </div>

          <strong>
            {{ contacts.length }}
          </strong>

        </div>


        <div class="stat-card">

          <div class="stat-top">
            <span>NEW</span>
            <span>02</span>
          </div>

          <strong>
            {{ newCount }}
          </strong>

        </div>


        <div class="stat-card">

          <div class="stat-top">
            <span>READ</span>
            <span>03</span>
          </div>

          <strong>
            {{ readCount }}
          </strong>

        </div>


        <div class="stat-card">

          <div class="stat-top">
            <span>REPLIED</span>
            <span>04</span>
          </div>

          <strong>
            {{ repliedCount }}
          </strong>

        </div>

      </section>


      <!-- ============================= -->
      <!-- ENQUIRIES -->
      <!-- ============================= -->

      <section class="enquiries-section">

        <div class="enquiries-header">

          <div>

            <p class="eyebrow">
              INBOX
            </p>

            <h2>
              Recent enquiries
            </h2>

          </div>

          <span class="record-count">
            {{ contacts.length }} RECORDS
          </span>

        </div>


        <!-- LOADING -->

        <div
          v-if="loading"
          class="empty-state"
        >
          Loading enquiries...
        </div>


        <!-- ERROR -->

        <div
          v-else-if="error"
          class="error-state"
        >
          {{ error }}

          <button @click="fetchContacts">
            Try again
          </button>
        </div>


        <!-- EMPTY -->

        <div
          v-else-if="contacts.length === 0"
          class="empty-state"
        >
          <span>NO ENQUIRIES YET</span>

          <p>
            New project enquiries will appear here.
          </p>
        </div>


        <!-- CONTACT LIST -->

        <div
          v-else
          class="contact-list"
        >

          <article
            v-for="contact in contacts"
            :key="contact._id"
            class="contact-card"
          >

            <!-- CARD TOP -->

            <div class="contact-card-top">

              <div class="contact-number">
                {{ String(contactIndex(contact)).padStart(2, "0") }}
              </div>

              <div class="contact-main">

                <h3>
                  {{ contact.name }}
                </h3>

                <a
                  :href="`mailto:${contact.email}`"
                >
                  {{ contact.email }}
                </a>

              </div>

              <div class="contact-service">
                {{ contact.service }}
              </div>

              <div
                class="status-badge"
                :class="`status-${contact.status}`"
              >
                <span></span>
                {{ contact.status }}
              </div>

            </div>


            <!-- MESSAGE -->

            <div class="contact-message">

              <span class="message-label">
                PROJECT DETAILS
              </span>

              <p>
                {{ contact.message }}
              </p>

            </div>


            <!-- CARD BOTTOM -->

            <div class="contact-card-bottom">

              <span class="contact-date">
                {{ formatDate(contact.createdAt) }}
              </span>


              <div class="contact-actions">

                <!-- STATUS -->

                <select
                  :value="contact.status"
                  @change="
                    updateStatus(
                      contact._id,
                      ($event.target as HTMLSelectElement).value
                    )
                  "
                >

                  <option value="new">
                    New
                  </option>

                  <option value="read">
                    Read
                  </option>

                  <option value="replied">
                    Replied
                  </option>

                </select>


                <!-- EMAIL -->

                <a
                  class="action-button"
                  :href="`mailto:${contact.email}`"
                >
                  REPLY ↗
                </a>


                <!-- DELETE -->

                <button
                  class="delete-button"
                  @click="deleteContact(contact._id)"
                >
                  DELETE
                </button>

              </div>

            </div>

          </article>

        </div>

      </section>

    </main>

  </div>
</template>


<script setup lang="ts">

import {
  ref,
  computed,
  onMounted
} from "vue";

import { useRouter } from "vue-router";


const router = useRouter();


// ============================================
// API
// ============================================

const API_URL =
  import.meta.env.VITE_API_URL;


// ============================================
// TYPES
// ============================================

interface Contact {

  _id: string;

  name: string;

  email: string;

  service: string;

  message: string;

  status: "new" | "read" | "replied";

  createdAt: string;

  updatedAt?: string;

}


// ============================================
// STATE
// ============================================

const contacts =
  ref<Contact[]>([]);

const loading =
  ref(false);

const error =
  ref("");


// ============================================
// TOKEN
// ============================================

const getToken = () => {

  return localStorage.getItem(
    "adminToken"
  );

};


// ============================================
// FETCH CONTACTS
// ============================================

const fetchContacts = async () => {

  loading.value = true;

  error.value = "";

  const token = getToken();


  if (!token) {

    router.push("/admin/login");

    return;

  }


  try {

    const response =
      await fetch(
        `${API_URL}/api/admin/contacts`,
        {
          method: "GET",

          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );


    if (response.status === 401) {

      localStorage.removeItem(
        "adminToken"
      );

      router.push("/admin/login");

      return;

    }


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Unable to load enquiries."
      );

    }


    contacts.value = data.contacts;

  } catch (err: any) {

    console.error(err);

    error.value =
      err.message ||
      "Something went wrong.";

  } finally {

    loading.value = false;

  }

};


// ============================================
// COUNTS
// ============================================

const newCount = computed(() => {

  return contacts.value.filter(
    contact =>
      contact.status === "new"
  ).length;

});


const readCount = computed(() => {

  return contacts.value.filter(
    contact =>
      contact.status === "read"
  ).length;

});


const repliedCount = computed(() => {

  return contacts.value.filter(
    contact =>
      contact.status === "replied"
  ).length;

});


// ============================================
// CONTACT NUMBER
// ============================================

const contactIndex = (
  contact: Contact
) => {

  return (
    contacts.value.findIndex(
      item =>
        item._id === contact._id
    ) + 1
  );

};


// ============================================
// UPDATE STATUS
// ============================================

const updateStatus = async (
  id: string,
  status: string
) => {

  const token = getToken();


  if (!token) {

    router.push("/admin/login");

    return;

  }


  try {

    const response =
      await fetch(
        `${API_URL}/api/admin/contacts/${id}/status`,
        {
          method: "PATCH",

          headers: {

            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,

          },

          body: JSON.stringify({
            status,
          }),

        }
      );


    if (response.status === 401) {

      localStorage.removeItem(
        "adminToken"
      );

      router.push("/admin/login");

      return;

    }


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Unable to update status."
      );

    }


    const contact =
      contacts.value.find(
        item =>
          item._id === id
      );


    if (contact) {

      contact.status =
        status as Contact["status"];

    }

  } catch (err) {

    console.error(err);

    alert(
      "Unable to update enquiry status."
    );

  }

};


// ============================================
// DELETE CONTACT
// ============================================

const deleteContact = async (
  id: string
) => {

  const confirmed =
    window.confirm(
      "Are you sure you want to delete this enquiry?"
    );


  if (!confirmed) return;


  const token = getToken();


  if (!token) {

    router.push("/admin/login");

    return;

  }


  try {

    const response =
      await fetch(
        `${API_URL}/api/admin/contacts/${id}`,
        {
          method: "DELETE",

          headers: {

            Authorization:
              `Bearer ${token}`,

          },

        }
      );


    if (response.status === 401) {

      localStorage.removeItem(
        "adminToken"
      );

      router.push("/admin/login");

      return;

    }


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Unable to delete enquiry."
      );

    }


    contacts.value =
      contacts.value.filter(
        contact =>
          contact._id !== id
      );

  } catch (err) {

    console.error(err);

    alert(
      "Unable to delete enquiry."
    );

  }

};


// ============================================
// DATE
// ============================================

const formatDate = (
  date: string
) => {

  if (!date) return "";

  return new Date(
    date
  ).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

};


// ============================================
// LOGOUT
// ============================================

const logout = () => {

  localStorage.removeItem(
    "adminToken"
  );

  router.push(
    "/admin/login"
  );

};


// ============================================
// INITIAL LOAD
// ============================================

onMounted(() => {

  fetchContacts();

});

</script>


<style scoped>

@import "./admin.css";

</style>