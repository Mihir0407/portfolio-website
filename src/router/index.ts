import {
  createRouter,
  createWebHistory,
} from "vue-router";

import Home from "../pages/Home.vue";
import AdminLogin from "../admin/AdminLogin.vue";
import Admin from "../admin/Admin.vue";
import Terms from "../pages/Terms.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import Portfolio from "../pages/Portfolio.vue";


const router = createRouter({

  history: createWebHistory(),

  routes: [

    // ==========================================
    // HOME
    // ==========================================

    {
      path: "/",
      name: "home",
      component: Home,
    },


    // ==========================================
    // ADMIN LOGIN
    // ==========================================

    {
      path: "/admin/login",
      name: "admin-login",
      component: AdminLogin,
    },


    // ==========================================
    // ADMIN
    // ==========================================

    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },


    // ==========================================
    // TERMS
    // ==========================================

    {
      path: "/terms",
      name: "Terms",
      component: Terms,
    },


    // ==========================================
    // PRIVACY
    // ==========================================

    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },


    // ==========================================
    // PORTFOLIO
    // ==========================================

    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
    },

  ],


  // ==========================================
  // SCROLL BEHAVIOR
  // ==========================================

  scrollBehavior(to, from) {

    // ------------------------------------------
    // HASH NAVIGATION
    // ------------------------------------------
    //
    // Navbar handles scrolling to sections
    // manually.
    //

    if (to.hash) {

      return false;

    }


    // ------------------------------------------
    // HOME PAGE
    // ------------------------------------------
    //
    // Whenever we enter the homepage,
    // start from the hero at the very top.
    //

    if (to.path === "/") {

      return {
        top: 0,
        left: 0,
        behavior: "auto",
      };

    }


    // ------------------------------------------
    // OTHER PAGES
    // ------------------------------------------

    if (to.path !== from.path) {

      return {
        top: 0,
        left: 0,
        behavior: "auto",
      };

    }


    return false;

  },

});


export default router;