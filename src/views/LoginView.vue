<template>
  <div class="min-h-screen flex items-center  justify-center bg-gray-500 ">
    <div class="max-w-md w-full mx-auto">
      <div class="bg-customColor shadow p-8">
        <h2 class="text-2xl font-semibold mb-4">Sign In to an Account</h2>
        
          <label for="name" class="block text-gray-700 font-bold mb-2">Enter your Email </label>
          <p><input type="text" placeholder="Email" v-model="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800" /></p>
          <label for="name" class="block text-gray-700 font-bold mb-2">Enter your Password</label>
          <p><input type="password" placeholder="Password" v-model="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800" /></p>
         <br>
          <p v-if="errMsg">{{ errMsg }}</p>
          <br>
          <p><button @click="signIn" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none">Submit</button></p>
          <br>
          <p><button @click="navigateToRegister" >Register to an Account</button></p>
          <br>
          
        
      </div>
    </div>
  </div>
</template>

<script setup>


import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully signed in!");
      router.push({ name: 'feed' });
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password.";
          break;
        default:
          errMsg.value = "Email or password was incorrect.";
          break;
      }
    });
};
const navigateToRegister = () => {
  router.push({ name: 'signup' });
};

</script>

<style scoped>
/* Add your CSS styles here */
</style>
