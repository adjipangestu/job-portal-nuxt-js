<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container-fluid px-md-5	">
      <nuxt-link to="/"><p class="navbar-brand">Caker</p></nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-md-1"><a href="#" class="nav-link">Pasang Kerjaan</a></li>
          <li class="nav-item mr-md-1"><a href="#" class="nav-link">Info Beasiswa</a></li>
          <li class="nav-item cta cta-colored" v-show="!isAuthenticated()"> <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link></li>
          <li class="nav-item cta  mr-md-2" v-show="isAuthenticated()"><router-link class="nav-link" to="/profile">Profil</router-link></li>
          <li class="nav-item cta cta-colored" v-show="isAuthenticated()"><router-link class="nav-link" to="logout" @click.native="logout()">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import auth from '@/auth/index.js'

  export default {
    data() {
      return {};
    },

    methods: {
      logout() {
        auth.logout(this);
      },
      isAuthenticated() {
        return auth.isAuthenticated();
      }
    }
  };
</script>
