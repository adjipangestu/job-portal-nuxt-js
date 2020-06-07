<template>
  <div>
    <div v-if="this.$route.name != 'auth-verifikasi-token' && this.$route.name != 'auth-login' && this.$route.name != 'auth-register' && this.$route.name != 'auth-sukses'">
      <app-navbar></app-navbar>
    </div>
    <nuxt />
    <app-footer></app-footer>
  </div>
</template>
<script>
  import Navbar from '@/components/layouts/Navbar.vue'
  import Footer from '@/components/layouts/Footer.vue'
  export default {
    components: {
      'app-navbar': Navbar,
      'app-footer': Footer,
    },

  }
</script>
