<template>
    <div class=" py-20 grid grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="product-card">

            <div class=" grid-co">
                <div class="">

                    <div class=" max-w-sm mx-auto  bg-customColor shadow-lg rounded-lg overflow-hidden  ">
                        <div class="">

                            <h3 class="text-2xl bg-darkbb font-semibold mb-2"> {{ product.bread }}</h3>
                            <img :src="product.image" alt="Product Image" class=" w-96 h-56 object-center object-cover " />
                            <div class="p-4 ">

                                <h1 class="text-xl font-semibold mb-2"> {{ product.name }}</h1>
                                <p class="text-gray-700 text-base"> {{ product.about }}</p>
                                <p class="text-gray-700 text-base"> {{ product.cost }}</p>
                           
                                <p class="text-gray-700 text-base"> {{ product.location }}</p>
                                <p class="text-gray-700 text-base"> {{ product.contact }}</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


  
<script>
import productsData from '@/assets/donateView.json';

export default {
    name: 'getProduct',
    props: ["mydata"],
    data() {
        return {
            myJson: []
        };
    },
    created() {
        this.fetchProductsData();
    },
    methods: {
        fetchProductsData() {
            this.products = productsData;
        },
    },
};
</script>
  
<style lang="">

</style>
  