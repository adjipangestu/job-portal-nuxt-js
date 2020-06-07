<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
                <div class="alert alert-danger" v-if="error">
                  <p>{{ error }}</p>
                </div>
                <div class="form-group">
                  <div class="form-field">
                    <input type="text" class="form-control" placeholder="Email" v-model="credentials.email" v-on:keyup.enter="submit">
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-field">
                    <input type="password" class="form-control" placeholder="Password" v-model="credentials.password" v-on:keyup.enter="submit">
                  </div>
                </div>

              <button class="form-control btn btn-xs btn-primary" @click="submit">Login</button>
              <hr>
              <nuxt-link to="/auth/register"><button class="form-control btn btn-outline-success" type="submit">Register</button></nuxt-link>
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
    name: 'auth-login',
    head () {
      return {
        title: 'Login',
        meta: [
          { hid: 'og-title', property: 'og:title', content: 'Login ' },
          { hid: 'og-description', property: 'og:description', content: 'Login Page' },
          // other meta
        ]
      }
    },
    data: () => ({
      credentials: {
        email: "",
        password: ""
      },
      error: "",
      loading: false
    }),
    methods: {
      async submit() {
        this.loading = true
        let credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        };
        await axios.post(env.base_url_api + '/login', credentials)
          .then(response => {
            let statusCode = response.status
            if(statusCode == 200){
              localStorage.setItem('token', response.data.token)
              this.$router.push("/");
            }
          }).catch(error => {
            this.loading = false
            this.error = error.response.data.error
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
