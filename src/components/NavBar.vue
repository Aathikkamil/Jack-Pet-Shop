<template>
    <nav>
        <!-- desktop menu -->
        <div class="bg-customColor fixed stickey z-50" style="width:100%">
            <!-- menu -->
            <div class="flex items-center py-3 px-2">
                <!-- logo -->
                <div class="hidden md:block">
                    <img src="../assets/jack.png" alt="logo"
                        style="max-width: 130px; height: auto; padding-top: 1%; padding-bottom: 1%; padding-left: 1%;">
                </div>
                <!-- menu items -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="/" class="py-5 px-2 font-bold text-indigo-900 hover:text-indigo-100"> Home</a>
                    <a href="/About" class="py-5 px-2 font-bold text-indigo-900 hover:text-indigo-100"> AboutUs</a>
                    <a href="/Contact" class="py-5 px-2 font-bold text-indigo-900 hover:text-indigo-100"> Contact</a>
                    <a href="/Product" class="py-5 px-2 font-bold text-indigo-900 hover:text-indigo-100"> Shop</a>
                    <a href="/News" class="py-5 px-2 font-bold text-indigo-900 hover:text-indigo-100"> Tips</a>
                    <a href="/DonatePet" class="py-5 px-2 font-bold text-indigo-900 hover:text-indigo-100"> Donate </a>
                 
                </div>
                <!-- Button for donation -->
                <!-- <div class="hidden md:flex pl-4 pb-">
                    <button class="px-6 py-3 font-bold bg-gray-500 text-black rounded-xl" @click="navigateTo('/donView')">Donate your Pests here</button>
                </div> -->
                <!-- title -->
                <div class="hidden md:block fixed top-0 right-28 m-4 ">
                    <div class="flex text-center font-bold  font-mvboli text-3xl py-5 px-20 ">
                        <h2> Jack Pet Shop & Sherlock Rescue</h2>
                    </div>
                </div>
                <!-- Sign In button -->
                <div class="hidden md:flex fixed top-0 right-0 m-4  ">
                    <button class="px-10 py-5 bg-white font-bold text-black rounded-xl" @click="navigateTo('/SignIn')">Sign
                        In</button>
                </div>
            </div>
        </div>
        <!-- mobile menu -->
        <div class="md:hidden bg-customColor fixed stickey z-50" style="width:100%">
            <div class="flex items-center py-3 px-2">
                <!-- mobile menu button -->
                <button class="md:hidden px-4 py-2 rounded-lg" @click="toggleMobileMenu">
                    <div class="w-20"><img src="../assets/mnu.png"></div>
                </button>
                <!-- mobile menu items -->
                <div class="hidden mobile-menu" :class="{ 'mobile-menu-open': mobileMenuOpen }">
                    <a href="/" class="block py-2 px-4 font-bold text-indigo-900 hover:text-indigo-100">Home</a>
                    <a href="/About" class="block py-2 px-4 font-bold text-indigo-900 hover:text-indigo-100">AboutUs</a>
                    <a href="/Contact" class="block py-2 px-4 font-bold text-indigo-900 hover:text-indigo-100">Contact</a>
                    <a href="/Product" class="block py-2 px-4 font-bold text-indigo-900 hover:text-indigo-100">Shop</a>
                    <a href="/Tips" class="block py-2 px-4 font-bold text-indigo-900 hover:text-indigo-100">Tips</a>
                </div>
                <div class="flex text-center font-bold text- font-mvboli text-2xl ">
                    <h2> Jack Pet Shop & Sherlock Rescue</h2>
                </div> 
            </div>
        </div>
    </nav>
</template>

  
<script>
export default {
    data() {
        return {
            mobileMenuOpen: false
        };
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        }
    }
};
</script>
  
<style scoped>
@media (max-width: 767px) {
    .mobile-menu {
        display: none;
        
    }

    .mobile-menu-open {
        display: block;
    }
}
</style>
  