// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/messaging';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

  var firebaseConfig = {
    apiKey: "AIzaSyDtGdoAMYfTqU8FNrTKhnfXdi3u10-oELQ",
    authDomain: "anime-app-38b71.firebaseapp.com",
    databaseURL: "https://anime-app-38b71.firebaseio.com",
    projectId: "anime-app-38b71",
    storageBucket: "anime-app-38b71.appspot.com",
    messagingSenderId: "1072033683746",
    appId: "1:1072033683746:web:d3763ccc858596618c6d7b",
    measurementId: "G-WPDV51EF2D"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey("");
  