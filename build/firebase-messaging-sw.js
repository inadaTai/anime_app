// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': "1072033683746" // 4の messagingSenderId をコピペ
});

// [END initialize_firebase_in_sw]
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BLJ0H71ZeA6B8GxwCu6CSCtWu17OS3tn9Iq-6ZDbkPL7X4Oei-gpLtmPnsZD1YXTfh7CAmaX3kAhzMIf51SXk8A");

messaging.requestPermission().then(() => {
console.log('Notification permission granted.');

messaging.getToken().then((token) => {
  console.log(token)
})
}).catch((err) => {
console.log('Unable to get permission to notify.', err);
});