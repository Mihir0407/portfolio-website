<template>

  <div class="admin-login">

    <div class="login-card">

      <div class="login-top">

        <div class="logo">
          F
        </div>

        <div>
          <p class="eyebrow">PORTFOLIO</p>
          <h1>Admin</h1>
        </div>

      </div>


      <p class="login-description">
        Sign in to manage project enquiries.
      </p>


      <form @submit.prevent="login">

        <div class="field">

          <label>EMAIL</label>

          <input
            v-model="email"
            type="email"
            placeholder="admin@portfolio.com"
            required
          />

        </div>


        <div class="field">

          <label>PASSWORD</label>

          <input
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          />

        </div>


        <button
          type="submit"
          :disabled="loading"
        >

          {{ loading ? "SIGNING IN..." : "SIGN IN" }}

          <span>↗</span>

        </button>


        <p
          v-if="error"
          class="login-error"
        >
          {{ error }}
        </p>

      </form>

    </div>

  </div>

</template>


<script setup lang="ts">

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const loading = ref(false);
const error = ref("");


const login = async () => {

  loading.value = true;
  error.value = "";

  try {

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/admin/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Login failed."
      );
    }

    localStorage.setItem(
      "adminToken",
      data.token
    );

    router.push("/admin");

  } catch (err: any) {

    error.value =
      err.message ||
      "Unable to login.";

  } finally {

    loading.value = false;

  }

};

</script>


<style scoped>

.admin-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #f8f8f5;
  color: #171918;
}

.login-card {
  width: min(440px, 100%);
  padding: 42px;
  background: white;
  border: 1px solid #e1e3df;
  border-radius: 30px;
  box-shadow: 0 30px 80px rgba(0,0,0,.08);
}

.login-top {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #202220;
  color: white;
  font-size: 25px;
  font-weight: 600;
}

.eyebrow {
  margin: 0 0 4px;
  color: #43816d;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .15em;
}

h1 {
  margin: 0;
  font-size: 38px;
  letter-spacing: -.04em;
}

.login-description {
  margin: 30px 0;
  color: #777c78;
  line-height: 1.6;
}

.field {
  margin-bottom: 25px;
}

.field label {
  display: block;
  margin-bottom: 9px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .1em;
  color: #8b908c;
}

.field input {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid #d9dad7;
  outline: none;
  background: transparent;
  font-size: 16px;
}

.field input:focus {
  border-bottom-color: #43816d;
}

button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
  border: none;
  border-radius: 999px;
  background: #202220;
  color: white;
  font-weight: 700;
  letter-spacing: .08em;
  cursor: pointer;
}

button:hover {
  background: #43816d;
}

button span {
  font-size: 20px;
}

.login-error {
  margin-top: 18px;
  color: #a54848;
  font-size: 14px;
}

@media(max-width:600px) {

  .admin-login {
    padding: 20px;
  }

  .login-card {
    padding: 28px 22px;
    border-radius: 22px;
  }

}

</style>