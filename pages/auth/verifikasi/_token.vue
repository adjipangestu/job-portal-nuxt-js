<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <div v-if="icon" class="icon mr-2 text-center">
                <span class="icon icon-check" style="font-size: 80px;"></span>
              </div>
              <div v-else-if="icon == false" class="icon mr-2 text-center">
                <span class="icon icon-sms_failed" style="font-size: 80px;"></span>
              </div>
              <p class="text-center">{{ message }}</p>
              <div class="text-center">
                <nuxt-link to="/auth/login"><button class="btn btn-primary">Login</button></nuxt-link>
                <nuxt-link to="/"><button class="btn btn-outline-success">Home</button></nuxt-link>
              </div>
              <hr>
              <div class="text-center">
                Copyright &copy; 2020 All rights reserved <i class="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://www.kumis.id" target="_blank">Kumis.id</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading">
      <div id="ftco-loader" class="show fullscreen">
        <svg class="circular" width="48px" height="48px">
          <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
          <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import env from "@/env.json";
  export default {
    name: "auth-verfiasi-token",
    head () {
      return {
        title: 'Verfikasi Akun',
        meta: [
          { hid: 'og-title', property: 'og:title', content: 'Verfikasi Akun' },
          { hid: 'og-description', property: 'og:description', content: 'Verfikasi akun berhasil, silakan login' },
          // other meta
        ]
      }
    },
    data: () => ({
      message: '',
      icon: true,
      loading: true,
    }),

    mounted() {
      this.verifikasi()
    },
    methods: {
      async verifikasi(){
        let token = this.$route.params.token
        await axios.post( env.base_url_api + '/verifikasi/' + token)
          .then(response => {
            let statusCode = response.status
            let email = response.data.email
            if (statusCode == 200) {
              this.message = "Verfikasi akun "+ email +" berhasil, silakan login"
            }
            this.loading = false
          }).catch( error => {
          let statusCode = error.response.status
          if (statusCode == 500) {
            this.icon = false
            this.message = error.response.data.error
            this.loading = false
          }
        })
      }
    }
  };
</script>

<style scoped>
  :root {
    --input-padding-x: 1.5rem;
    --input-padding-y: .75rem;
  }

  body {
    background: #007bff;
    background: linear-gradient(to right, #0062E6, #33AEFF);
  }

  .card-signin {
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  }

  .card-signin .card-title {
    margin-bottom: 2rem;
    font-weight: 300;
    font-size: 1.5rem;
  }

  .card-signin .card-body {
    padding: 2rem;
  }

  .form-signin {
    width: 100%;
  }

  .form-signin .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: .1rem;
    font-weight: bold;
    padding: 1rem;
    transition: all 0.2s;
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }

  .form-label-group input {
    height: auto;
    border-radius: 2rem;
  }

  .form-label-group>input,
  .form-label-group>label {
    padding: var(--input-padding-y) var(--input-padding-x);
  }

  .form-label-group>label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
  }

  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }

  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-moz-placeholder {
    color: transparent;
  }

  .form-label-group input::placeholder {
    color: transparent;
  }

  .form-label-group input:not(:placeholder-shown) {
    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
    padding-bottom: calc(var(--input-padding-y) / 3);
  }

  .form-label-group input:not(:placeholder-shown)~label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 12px;
    color: #777;
  }

  .btn-google {
    color: white;
    background-color: #ea4335;
  }

  .btn-facebook {
    color: white;
    background-color: #3b5998;
  }

  /* Fallback for Edge
  -------------------------------------------------- */

  @supports (-ms-ime-align: auto) {
    .form-label-group>label {
      display: none;
    }
    .form-label-group input::-ms-input-placeholder {
      color: #777;
    }
  }

  /* Fallback for IE
  -------------------------------------------------- */

  @media all and (-ms-high-contrast: none),
  (-ms-high-contrast: active) {
    .form-label-group>label {
      display: none;
    }
    .form-label-group input:-ms-input-placeholder {
      color: #777;
    }
  }
</style>
