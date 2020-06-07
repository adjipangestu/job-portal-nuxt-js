<template>
  <div v-if="loading">
    <div id="ftco-loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/>
      </svg>
    </div>
  </div>
</template>

<script>
    export default {
      name: "loading",
      data: () => ({
        loading: false
      }),
      methods: {
        start () {
          this.loading = true
        },
        finish () {
          this.loading = false
        }
      }
    }
</script>

