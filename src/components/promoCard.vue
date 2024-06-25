<template lang="">
    
  <div>
    <div class="w-full mx-auto bg-customColor shadow-lg rounded-lg overflow-hidden">
      <img class="w-full" src="../assets/off.jpg" alt="Card Image" />
      <div class="p-4">
       
        <p class="text-gray-700 text-base">Get 10% Offers By subscribing to Our Website. Do not Miss Your chance</p>
      </div>
      <div class="p-4 bg-gray-100">
        <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded" @click="navigateTo('/SignIn')">
          Subscribe
        </button>
      </div>
    </div>
  </div>

</template>


<script>
export default {

   
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },

    }
  }
</script>
<style lang="">
    
</style>