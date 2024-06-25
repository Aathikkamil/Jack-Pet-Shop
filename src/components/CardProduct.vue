<template>
  <div class="py-14">
  <div class="text-center font-mvboli text-4xl py-5 px-20 pl-20 -ml-30 font-bold">    <h1> Pet food & Medicins  </h1>
  </div>
    <div v-if="page === 'products'">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(product, index) in products" :key="index" class="flex flex-col items-center">
          <img :src="product.image" class="w-60 h-auto" />
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
          name: 'Happy Dog Baby Original',
          cost: '500.00LKR',
          image: require('../assets/dogfood.jpg'),
          code: 'PS0010',
        },
        {
          name: 'Pedigree Chicken & Vegetables 3Kg - Adult Dog',
          cost: 'Rs 5390.00',
          image: require('../assets/padigree.jpg'),
          code:'PS0026'
        },
        {
          name: 'Beaphar Schapenvet. Mutton Fat - 425ml',
          cost: '3,750.00LKR',
          image: require('../assets/medicin.jpg'),
          code:'PS0058'
        },
        {
          name: 'Whiskas Adult Dry Cat Food (1+ Years)',
          cost: '3,150.00LKR',
          weight: '500g',
          image: require('../assets/catfood.jpg'),
          code:'PS0069'
        },
        {
          name: 'Creamy Cat Treats 15G X 3 Tuna & Shrimp Flavour',
          cost: '3,150.00LKR',
          weight: '3 Items',
          image: require('../assets/tuna.png'),
          code:'PS0049'
        },
        {
          name: 'Drools Adult Cat Food Ocean Fish',
          cost: '14,300.00LKR',
          weight: ' 7Kg',
          image: require('../assets/doom.jpg'),
          code:'PS0046'
        },
        {
          name: 'Rabbit Food Pellets',
          cost: '1,500.00 LKR',
          weight: ' 1 KG',
          image: require('../assets/rbt.jpg'),
          code:'PS0052'
        },
        {
          name: 'Mixed grains for Parrots, and Love Birds',
          cost: '1,800.00LKR',
          weight: ' 1Kg',
          image: require('../assets/mxd.jpg'),
          code:'PS0060'
        },
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
