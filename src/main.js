import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ2HoaKNQBnSk3iLf4Niy_ouSTmmoMHwc",
  authDomain: "jackshop-a96c6.firebaseapp.com",
  projectId: "jackshop-a96c6",
  storageBucket: "jackshop-a96c6.appspot.com",
  messagingSenderId: "1084796620346",
  appId: "1:1084796620346:web:6b0fcbef6cfc5e4e46ef03"
};


const app = createApp(App);
app.user = initializeApp(firebaseConfig);
app.use(router);
app.mount('#app');