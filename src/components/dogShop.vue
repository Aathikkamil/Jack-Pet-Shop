<template>

<div class="py-20">
      <img src="../assets/banner.jpg">

    </div>



  <div class="">
    
    <div v-if="page === 'products'">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(product, index) in products" :key="index" class="flex flex-col items-center">
          <img :src="product.image" class="w-60 h-64" />
          <div class="text-center">
            <div>{{ product.name }}</div>
            <div>{{ product.cost }}</div>
            <div>{{ product.code }}</div>
            

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
            name: 'Plain Pet Bowl-M',
            cost: '500.00LKR',
            code:'D0001',
            image: require('../assets/foodbowl.jpg'),
           
          },
          {
            name: 'Dog Bath Brush Body Scrubber',
            cost: '850.00LKR',
            image: require('../assets/bresh.jpg'),
            code: 'D0002',
          },
          {
            name: "Dog Brushes for Grooming Large Dogs",
            cost: "750.00 LKR",
            image: require('../assets/b1.jpg'),
            code: 'D0003',
          },
          {
            name: "Pacific Pups Products for Dogs - Rope Dog Toy Pack",
            cost: "1500.00 LKR",
            image: require('../assets/rp.jpg'),
            code: 'D0004',
          },
          {
            name: "Brushes & Combs ",
            cost: "600.00 LKR",
            image: require('../assets/ba.jpg'),
            code:'D0005'
          },
          {
            name: "Majestic Pet Suede Bagel Dog Bed ",
            cost: "5,600.00 LKR",
            image: require('../assets/bed.jpg'),
            code:'D0006'
          },
          {
            name: "FurHaven dog Bed ",
            cost: "9,600.00 LKR",
            image: require('../assets/bdd.jpeg'),
            code:'D0007'
          },
          {
            name: "Best Friends by Sheri The Original Calming Donut Cat and Dog Bed in Shag Fur Taupe, ",
            cost: "9,600.00 LKR",
            image: require('../assets/ad.jpg'),
            code:'D0008'
          },
          {
            name: "Happy Dog Baby Original ",
            cost: "500.00 LKR",
            image: require('../assets/dogfood.jpg'),
            code:'D0009'

          },
          {
            name: "Bones-UP ",
            cost: "1,500.00 LKR",
            image: require('../assets/ff.jpeg'),
            code:'D0010'
          },
          {
            name: "dog arm Belt ",
            cost: "1,500.00 LKR",
            more: " click heare to get more details",
            image: require('../assets/be.jpg'),
            code:'D0011'
          },
          {
            name: "Beaphar Salmon Oil Paste for Dogs 100gt ",
            cost: "2,250.00 LKR",
            image: require('../assets/btt.jpg'),
            code:'D0012'
          },
          {
            name: "Trixie Joey Bed ",
            cost: "35,650.00 LKR",
            image: require('../assets/bg.jpg'),
            code:'D0013'
          },
          {
            name: "GREENVET HERBAL DOG SHAMPOO 200ML ",
            cost: "650.00 LKR",
            image: require('../assets/ser.png'),
            code:'D0014'
          },
          {
            name: "Furggard Dog Shampoo 250 Ml ",
            cost: "950.00 LKR",
            image: require('../assets/wd.jpeg'),
            code:'D0015'
          },
          {
            name: "Trixie Denta Fun ball, mint flavour",
            cost: "2,950.00 LKR",
            image: require('../assets/s.webp'),
            code:'D0016'
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







