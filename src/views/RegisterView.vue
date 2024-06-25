<template>
  <div class="min-h-screen flex items-center  justify-center bg-gray-500 ">
    <div class="max-w-md w-full mx-auto">
      <div class="bg-customColor shadow p-8">
        <h2 class="text-2xl font-semibold mb-4">Sign up to an Account</h2>

        <label for="name" class="block text-gray-700 font-bold mb-2">Enter your Email </label>
        <p><input type="text" placeholder="Email" v-model="email"  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800" /></p>
        <label for="name" class="block text-gray-700 font-bold mb-2">Enter your Password </label>
        <p><input type="password" placeholder="Password" v-model="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800" /></p>
        <br>
        <p><button @click="register" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none">Submit </button></p>
      
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully registered");
      router.push('/FeedView');
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};


</script>
  
<style scoped>
/* Add your CSS styles here */
</style>
  