// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
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
  messaging.usePublicVapidKey("BLJ0H71ZeA6B8GxwCu6CSCtWu17OS3tn9Iq-6ZDbkPL7X4Oei-gpLtmPnsZD1YXTfh7CAmaX3kAhzMIf51SXk8A");
  
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.')
  messaging.getToken().then((token) => {
    console.log(token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err)
})

messaging.onMessage((payload) => {
  console.log('Message received. ', payload)
  // ...
})

/**
 * foreground時にメッセージを受け取ると、通知をする。通知の中身はtitleやoptionから設定できる。
 */
self.addEventListener('push', function (event) {
  const title = 'アニメ(山ソフト)'
  const options = {
    body: '新しい記事が公開されました。[push]',
    // 通知の右にでる画像
    icon:
      '/static/img/icons/android-chrome-maskable-192x192.png',
    // 通知の左にでる画像
    badge: '/static/img/icons/android-chrome-maskable-192x192.png'
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

/**
   * background時の通知の扱い。ここではconsoleにメッセージを出力した上で、通知を出している。通知の中身はtitleやoptionから設定できる。
   */
/** messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
      "push通知をしました、新しい更新があります。",
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon
    };

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
  */

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'アニメ版(Yama_soft)'
  const notificationOptions = {
    body: 'アニメに関する話題の記事を更新したよ',
    icon: '/static/img/icons/fcmlogo.jpeg'
  }

  self.registration.showNotification(notificationTitle,
    notificationOptions)
})
