// importScriptsはservice worker内から他のserviceworkerを読み込むときに使えます
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "1072033683746"
});

const messaging = firebase.messaging();

/**
 * background時の通知の扱い。ここではconsoleにメッセージを出力した上で、通知を出している。通知の中身はtitleやoptionから設定できる。
 */
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  var notificationTitle = "ONIAI";
  var notificationOptions = {
    body: "あなたのプロフィールがイイねされました",
    // 通知の右にでる画像
    icon:
      "/static/img/icons/android-chrome-192x192.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

/**
 * foreground時にメッセージを受け取ると、通知をする。通知の中身はtitleやoptionから設定できる。
 */
self.addEventListener("push", function(event) {
  const title = "ONIAI";
  const options = {
    body: "あなたのプロフィールがイイねされました",
    // 通知の右にでる画像
    icon:
      "/static/img/icons/android-chrome-192x192.png",
      // 通知の左にでる画像
    badge: "https://www.fnordware.com/superpng/pnggrad8rgb.png"
  };

  event.waitUntil(self.registration.showNotification(title, options));
});