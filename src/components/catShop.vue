<template>

  <div class="py-20">
        <img src="../assets/tt.jpg">
  
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
              name: 'cat toy Ret',
              cost: 'Rs 1,150.00',
              code:'PS0111',
              image: require('../assets/ret.webp'),
             
            },
            {
              name: 'Cat Toy',
              cost: 'Rs 6,650',
              image: require('../assets/ffff.jpg'),
              code: 'CT0122',
            },
            {
              name: "Cat Grooming Bresh",
              cost: "950.00 LKR",
              image: require('../assets/bs.webp'),
              code: 'CT0222',
            },
            {
              name: "Cat & dog grooming tool",
              cost: "Rs 3,500.00 ",
              image: require('../assets/hh.jpg'),
              code: 'CT088',
            },
            {
              name: "Brushes & Combs ",
              cost: "600.00 LKR",
              image: require('../assets/ba.jpg'),
              code:'CT8765'
            },
            {
              name: "Majestic Pet Suede Bagel Dog Bed ",
              cost: "5,600.00 LKR",
              image: require('../assets/bed.jpg'),
              code:'D0006'
            },
            {
              name: "Pet Summer Floral Dresses Sunflower Princess Cat Dress ",
              cost: "6,000.00 ",
              image: require('../assets/drs.jpg'),
              code:'CT7654'
            },
            {
              name: "Pet Hanging Bottle ",
              cost: "Rs 600.00 ",
              image: require('../assets/dww.jpg'),
              code:'CT8675'
            },
            {
              name: "Catnip Suger X 10 ",
              cost: "Rs 5,000.00 ",
              image: require('../assets/nip.jpeg'),
              code:'CT0873'
  
            },
            {
              name: "JosiCat Beef in Jelly 400g ",
              cost: "Rs 750.00 ",
              image: require('../assets/as.webp'),
              code:'CT3830'
            },
            {
              name: "Josera Catelux ",
              cost: "2,500.00 LKR",
              more: " click heare to get more details",
              image: require('../assets/asd.webp'),
              code:'CT34958'
            },
            {
              name: "Josera Catelux ",
              cost: "Rs 450.00 ",
              image: require('../assets/yt.jpg'),
              code:'CT23109'
            },
            {
              name: "Cat Toy ",
              cost: "Rs 650.00",
              image: require('../assets/ty.jpg'),
              code:'CT09999'
            },
            {
              name: "Happy Cat Ceramic Feeding Bowl ",
              cost: "Rs 3.650.00 ",
              image: require('../assets/wdef.webp'),
              code:'CT7770'
            },
            {
              name: "Cat Shampoo",
              cost: "950.00 LKR",
              image: require('../assets/fu.jpg'),
              code:'CT5456'
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
  
  
  
  
  
  
  
  