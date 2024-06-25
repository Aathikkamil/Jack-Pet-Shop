<template>
    <div class="py-5">
    <div class="text-center font-mvboli text-4xl py-5 px-20 pl-20 -ml-30 font-bold">    <h1> Pets Accessories  </h1>
    </div>
      <div v-if="page === 'products'">
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(product, index) in products" :key="index" class="flex flex-col items-center">
            <img :src="product.image" class="w-60 h-72" />
            <div class="text-center">
              <div>{{ product.name }}</div>
              <div>{{ product.cost }}</div>
              <div>{{ product.code }}</div>
              <div> {{  product.weight }}</div>
             
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'cardView',
    data() {
      return {
        page: 'products',
        products: [
          {
            name: 'Pet Carrier Transparent Backpack Dogs & Cats Outdoor Carry Bag Breathable',
            cost: 'Rs 17,500.00 ',
            image: require ('@/assets/bag.jpg'),
            code: 'PS0085',
          },
          {
            name: 'Puppies Neck Belt with a tag',
            cost: 'Rs 6,390.00',
            image: require('@/assets/blt.jpg'),
            code:'PS0077'
          },
          {
            name: 'Trixie Kitten Harness with Leash',
            cost: 'Rs 1,900.00',
             image: require('@/assets/bts.webp'),
            code:'PS0052'
          },
          {
            name: 'Cat toy',
            cost: 'Rs 3,150.00',
            
            image: require('@/assets/ty.jpg'),
            code:'PS0090'
          },
          {
            name: 'Cat toy ret',
            cost: 'Rs 1,150.00',
            
            image: require('@/assets/ret.webp'),
            code:'PS0111'
          },
          {
            name: 'Drools Adult Cat Food Ocean Fish',
            cost: 'Rs 18,300.00',
            image: require('@/assets/ct.jpg'),
            code:'PS0113'
          },
          {
            name: 'Parrot Flying Rope',
            cost: 'Rs 4,500.00 ',
        
            image: require('@/assets/ro.jpg'),
            code:'PS0112'
          },
          {
            name: 'Mixed grains for Parrots, and Love Birds',
            cost: 'Rs 800.00',
            weight: '2 pieces',
            image: require('@/assets/cut.jpg'),
            code:'PS0060'
          }
        ],
        cart: []
      };
    },
    methods: {
          removeItemFromCart(product) {
        this.cart.splice(this.cart.indexOf(product), 1);
      },
      navigateTo(page) {
        this.page = page;
      },
    },
    components: {},
  };
  </script>
  
  <style>
  .button-container {
    display: flex;
    justify-content: space-between;
  }
  
  @media (max-width: 768px) {
    .button-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  