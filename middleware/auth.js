import Vue from 'vue'
import VueResource from "vue-resource"

import env from "@/env.json";
import axios from 'axios'

Vue.use(VueResource);

export default function ({ next, redirect }) {
  if(process.browser) {
    var jwt = localStorage.getItem('token')
    if (jwt) {
      let token = localStorage.getItem('token')
      axios.get(env.base_url_api + '/token/me', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
        .then(response => {
          let statusCode = response.status
          if (statusCode == 200) {
            return next();
          }
        }).catch(error => {
        let statusCode = error.response.status
        if (statusCode == 401) {
          localStorage.removeItem('token')
          return redirect('/auth/login');

        }
      })
    } else {
      return redirect('/auth/login');
    }
  }
}
