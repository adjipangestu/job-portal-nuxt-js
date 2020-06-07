<template>
  <div>
    <div class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5">
            <h1 class="mb-3 bread">{{ nama }}</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="ftco-section ftco-candidates ftco-candidates-2 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 pr-lg-4">
            <div class="row">
              <div class="col-md-12">
                <div class="team d-md-flex p-4 bg-white">
                  <div class="img" style="background-image: url(images/person_1.jpg);"></div>
                  <div class="text pl-md-4">
                    <span class="location mb-0">Western City, UK</span>
                    <h2>Danica Lewis</h2>
                    <span class="position">Graduate</span>
                    <p class="mb-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <span class="seen">Last Activity 4 months ago</span>
                    <p><a href="#" class="btn btn-primary">Shortlist</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import axios from "axios";
    import env from "@/env.json";

    export default {
      name: "profile",
      middleware: "auth",
      data: () => ({
        message: '',
        icon: true,
        loading: true,
        nama: '',
        about: 'Aku adalah adjipangestu'
      }),
      head () {
        return {
          title: this.nama,
          meta: [
            { hid: 'og-title', property: 'og:title', content: 'Verfikasi Akun' },
            { hid: 'og-description', property: 'og:description', content: this.about },
            { hid: 'description', name: 'description', content: this.about },
          ]
        }
      },

      mounted() {
        this.verifikasi()
      },
      methods: {
        async verifikasi(){
          let token = localStorage.getItem('token')
          await axios.get( env.base_url_api + '/token/me', {
            headers:{
              'Authorization': 'Bearer ' + token
            }
          })
            .then(response => {
              let statusCode = response.status
              if (statusCode == 200) {
                this.nama = response.data.email
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
    }
</script>

<style scoped>

</style>
