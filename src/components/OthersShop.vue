<template>
  <div class="py-20">
    <img src="../assets/others.jpg">

  </div>



  <div class="">

    <div v-if="page === 'products'">
      <div class="grid grid-cols-4 gap-5">
        <div v-for="(product, index) in products" :key="index" class="flex flex-col items-center">
          <img :src="product.image" class="w-60 h-64" />
          <div class="text-center">
            <div>{{ product.name }}</div>
            <div>{{ product.cost }}</div>
            <div>{{ product.code }}</div>
            <div>{{ product.Size }}</div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>
    
<script>


export default {
  name: 'dogShop',
  data() {
    return {
      page: 'products',
      products: [

        {
          name: 'Parrots stand',
          cost: 'Rs 3,150.00',
          code: 'OTS0084',
          image: require('../assets/pts.jpg'),

        },
        {
          name: 'fish tank',
          Size: '30 Inch X 30 Inch ',
          cost: 'Rs 12,900',
          image: require('../assets/tank.jpg'),
          code: 'OT0548'
        },
        {
          name: 'Parrot Swing',
          Size: '40 CM',
          cost: 'Rs 2,900',
          image: require('../assets/swing.jpg'),
          code: 'OT0788'
        },
        {
          name: 'Parrot normal Cage',

          cost: 'Rs 3,900',
          image: require('../assets/house.jpg'),
          code: 'OT07128'
        },
        {
          name: 'Duble Parrot Cage',

          cost: 'Rs 25,900',
          image: require('../assets/bbb.jpg'),
          code: 'OT03457128'
        },
        {
          name: 'threeble flor Parrot wooren cage ',
          Size: '70 inch',
          cost: 'Rs 10,500',
          image: require('../assets/ppp.jpg'),
          code: 'OT07678'
        },
        {
          name: 'Steel outdoor Rabbit cage ',
          Size: '70 inch',

          image: require('../assets/rbtf.jpg'),
          code: 'OT09999'
        },
        {
          name: 'Indoor rabbit cage   ',
          Size: '70 inch',
          cost: 'Rs 4,500',
          image: require('../assets/ind.jpg'),
          code: 'OT07678'
        },
        {
          name: ' Rabbits, cats, and dog groomig kit ',

          cost: 'Rs 1,500',
          image: require('../assets/g.webp'),
          code: 'OT88995'
        },
        {
          name: 'Hay feeder for rabbit  ',

          cost: 'Rs 1,700',
          image: require('../assets/feeder.jpg'),
          code: 'OT088882'
        },
        {
          name: 'Rabbit food feeder ',

          cost: 'Rs 1,900',
          image: require('../assets/oi.jpg'),
          code: 'OT666777'
        },
        {
          name: 'Rabbit probiotic supplement for rabbit ',

          cost: 'Rs 2,900',
          image: require('../assets/sap.webp'),
          code: 'OT66444'
        },
        {
          name: 'JiMMy Pet Products Budgie Food Exclusive Daily Mix Bird Food for Budgies',
          size: '450 gm ',
          cost: 'Rs 5,900',
          image: require('../assets/st.jpg'),
          code: 'OT111444'
        },
        {
          name: 'Fish Tank Oxygen Mortor ',
          cost: 'Rs 2,400',
          image: require('../assets/oxg.webp'),
          code: 'OT244523'
        },
        {
          name: 'Supper Steel indoor cage gor parrots ',
          cost: 'Rs 9,400.00',
          image: require('../assets/itb.jpg'),
          code: 'OT098900'
        },
        {
          name: 'Colorfull fish tank stons ',
          Size: '2 kg',
          cost: 'Rs 2,400.00',
          image: require('../assets/stn.webp'),
          code: 'OT0008887'
        },


      ],
      cart: []
    };
  },
  methods: {

    navigateTo(page) {
      this.page = page;
    },
  },
  components: {


  },
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
    
    
    
    
    
    
    
    