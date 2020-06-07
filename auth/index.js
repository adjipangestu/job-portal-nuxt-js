import Vue from 'vue'
import VueResource from "vue-resource"

import env from "@/env.json";
import axios from 'axios'

Vue.use(VueResource);

const loader = false

export default {
  login(context, creds, redirect, loader) {
    context.$http.post(env.base_url_api +'/login', creds).then(response => {
      localStorage.setItem('token', response.body.token)
      console.log(response)
      if (redirect) {
        context.$router.replace(redirect)
      }
    }, response => {
      this.loader = false
      context.error = response.body.error
      console.log(response)
    })
  },

  logout(context) {
      localStorage.removeItem('token')
      context.$router.replace('/auth/login')
  },

  isAuthenticated() {
    if(process.browser) {
      var jwt = localStorage.getItem('token')
      if (jwt) {
        return true
      }
      return false
    } else {
      return false
    }
  },



  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

}
