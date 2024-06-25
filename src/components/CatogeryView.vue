<template lang>
    <div class=" pt-20 items-center justify-center">
        <div class="grid grid-cols-1 gap-28 md:grid-cols-2 lg:grid-cols-3   mx-5">
            <!-- Card1 -->
            <div
                class="group relative cursor-pointer items-center bg-customColor justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 bg-card-area">
                <div class="h-96 w-72">
                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src="../assets/dog.png" alt="" />
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div
                    class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">Dogs Shop</h1>
                    <p
                        class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        You can buy any kind of dog items in this shop easily</p>
                    <button
                        class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"  @click="navigateTo('/dogShop')">
                        Go To Shop</button>
                </div>
            </div>
            <!-- card 2 -->
            <div
                class="group relative cursor-pointer items-center bg-customColor justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src="../assets/cat.png" alt="" />
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div
                    class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">Cat Shop</h1>
                    <p
                        class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        you can buy any kind of Cat products in this shop easily</p>
                    <button
                        class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" @click="navigateTo('/catShop')">
                        Go To Shop</button>
                </div>

            </div>
          
            <!-- catd 3 -->
            <div
                class="group relative cursor-pointer items-center bg-customColor justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src="../assets/parrot.png" alt="" />
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div
                    class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif text-3xl font-bold text-white">Other pets</h1>
                    <p
                        class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        in this shop you can buy any kind of pets products such as Parrots, rabbits Love Birds and etc</p>
                    <button
                        class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" @click="navigateTo('/OthersProduct')">
                        Go to Shop </button>
                </div>
            </div>

        </div>


    </div>
</template>
<script>

export default {
    methods: {
    
    navigateTo(route) {
      this.$router.push(route);
    }
}
}
</script>
<style lang="">

</style>