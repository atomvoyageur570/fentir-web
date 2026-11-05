// FENTIR — notifications de la version web quand l'appli est fermée (Firebase Cloud Messaging).
// Firebase affiche lui-même la notification (titre et texte envoyés par la fonction « notify ») ;
// un appui ouvre FENTIR (lien webpush.fcm_options.link).
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCRikbR_6OryPrdpw_5MisSbf7x3_24UQM',
  authDomain: 'fentir.firebaseapp.com',
  projectId: 'fentir',
  storageBucket: 'fentir.firebasestorage.app',
  messagingSenderId: '497704433393',
  appId: '1:497704433393:web:a64ca093fab97804ba9b50',
});

firebase.messaging();
