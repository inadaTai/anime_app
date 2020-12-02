importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js");

firebase.initializeApp ({
  'messagingSenderId': "1072033683746"
});

self.addEventListener("push", function (event) {
    if (event.data) {
      console.log('This push event has data: ', event.data.text());
    } else {
      console.log('This push event has no data.');
    }
  
    const title = "アニメ版(Yama_soft)";
    const options = {
      body: "アニメに関する話題の記事を更新したよ",
      icon: '/img/icons/fcmlogo.jpeg',
      badge: '/img/icons/fcmlogo.jpeg',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });

