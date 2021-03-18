import './style.css'
import firebase from 'firebase/app'
import 'firebase/firestore'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHZzceE5a3BNln074hmGL4duDubP-k89g",
    authDomain: "webchat-e0d4a.firebaseapp.com",
    projectId: "webchat-e0d4a",
    storageBucket: "webchat-e0d4a.appspot.com",
    messagingSenderId: "360989859230",
    appId: "1:360989859230:web:cbb1604db9c224fb648a8f",
    measurementId: "G-PGSK552RB0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const servers = {
    iceServers: [{
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    }, ],
    iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;