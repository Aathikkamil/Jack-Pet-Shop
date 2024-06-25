<template>
    <div class="py-20">
        <img src="../assets/others.jpg">

    </div>



    <div class="">

        <div v-if="page === 'products'">
            <div class="grid grid-cols-4 gap-4">
                <div v-for="(product, index) in products" :key="index" class="flex flex-col items-center">
                    <img :src="product.image" class="w-60 h-64" />
                    <div class="text-center">
                        <div>{{ product.name }}</div>
                        <div>
                            <p class="line-through">{{ product.cost }}</p>
                        </div>
                        <div>
                            <p>{{ product.newcost }} </p>
                        </div>

                        <div>
                            <p> {{ product.code }} </p>
                        </div>


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
                    cost: 'Rs 500.00',
                    newcost: 'Rs 450.00',
                    code: 'D0001',
                    image: require('../assets/foodbowl.jpg'),

                },
                {
                    name: 'Dog Bath Brush Body Scrubber',
                    cost: 'Rs 850.00',
                    newcost: 'Rs 765.00',
                    image: require('../assets/bresh.jpg'),
                    code: 'D0002',
                },
                {
                    name: "Dog Brushes for Grooming Large Dogs",
                    cost: "Rs 750.00",
                    newcost: ' Rs 675.00',
                    image: require('../assets/b1.jpg'),
                    code: 'D0003',
                },
                {
                    name: "Pacific Pups Products for Dogs - Rope Dog Toy Pack",
                    cost: "Rs 1500.00 ",
                    newcost: 'Rs 1,350 ',
                    image: require('../assets/rp.jpg'),
                    code: 'D0004',
                },
                {
                    name: "Brushes & Combs ",
                    cost: "Rs 600.00 ",
                    newcost: 'Rs 540.00',
                    image: require('../assets/ba.jpg'),
                    code: 'D0005'
                },
                {
                    name: "Majestic Pet Suede Bagel Dog Bed ",
                    cost: "Rs 5,600.00 ",
                    newcost: 'Rs 5,040.00',
                    image: require('../assets/bed.jpg'),
                    code: 'D0006'
                },
                {
                    name: "FurHaven dog Bed ",
                    cost: "Rs 9,600.00 ",
                    newcost: 'Rs 8,640.00',
                    image: require('../assets/bdd.jpeg'),
                    code: 'D0007'
                },
                {
                    name: "Best Friends by Sheri The Original Calming Donut Cat and Dog Bed in Shag Fur Taupe, ",
                    cost: "Rs 9,600.00",
                    newcost: 'Rs 8,640.00',
                    image: require('../assets/ad.jpg'),
                    code: 'D0008'
                },
                {
                    name: "Happy Dog Baby Original ",
                    cost: "Rs 500.00 ",
                    newcost: 'Rs 450',
                    image: require('../assets/dogfood.jpg'),
                    code: 'D0009'

                },
                {
                    name: "Bones-UP ",
                    cost: "Rs 1,500.00 ",
                    newcost: 'Rs 1,350.00',
                    image: require('../assets/ff.jpeg'),
                    code: 'D0010'
                },
                {
                    name: "dog arm Belt ",
                    cost: "Rs1,500.00 ",
                    newcost: 'Rs 1,350.00',
                    more: " click heare to get more details",
                    image: require('../assets/be.jpg'),
                    code: 'D0011'
                },
                {
                    name: "Beaphar Salmon Oil Paste for Dogs 100gt ",
                    cost: "Rs 2,250.00 ",
                    newcost: 'Rs 2,025.00',
                    image: require('../assets/btt.jpg'),
                    code: 'D0012'
                },
                {
                    name: "Trixie Joey Bed ",
                    cost: "Rs 35,650.00 ",
                    newcost: 'Rs 36,565.00',
                    image: require('../assets/bg.jpg'),
                    code: 'D0013'
                },
                {
                    name: "GREENVET HERBAL DOG SHAMPOO 200ML ",
                    cost: "Rs 650.00 ",
                    newcost: 'Rs 585.00',
                    image: require('../assets/ser.png'),
                    code: 'D0014'
                },
                {
                    name: "Furggard Dog Shampoo 250 Ml ",
                    cost: "Rs 950.00 ",
                    newcost: 'Rs Rs 855.00',
                    image: require('../assets/wd.jpeg'),
                    code: 'D0015'
                },
                {
                    name: "Trixie Denta Fun ball, mint flavour",
                    cost: "2,950.00 LKR",
                    newcost: 'Rs 2,655.00',
                    image: require('../assets/s.webp'),
                    code: 'D0016'
                },

                {
                    name: 'Parrots stand',
                    cost: 'Rs 3,150.00',
                    newcost: 'Rs 2,835.00',
                    code: 'OTS0084',
                    image: require('../assets/pts.jpg'),

                },
                {
                    name: 'fish tank',
                    Size: '30 Inch X 30 Inch ',
                    cost: 'Rs 12,900',
                    newcost: 'Rs 11,610.00',
                    image: require('../assets/tank.jpg'),
                    code: 'OT0548'
                },
                {
                    name: 'Parrot Swing',
                    Size: '40 CM',
                    cost: 'Rs 2,900',
                    newcost: 'Rs 2,600.00',
                    image: require('../assets/swing.jpg'),
                    code: 'OT0788'
                },
                {
                    name: 'Parrot normal Cage',
                    newcost: 'Rs 3,510.00',

                    cost: 'Rs 3,900',
                    image: require('../assets/house.jpg'),
                    code: 'OT07128'
                },
                {
                    name: 'Duble Parrot Cage',
                    newcost: 'Rs 23,310.00',
                    cost: 'Rs 25,900',
                    image: require('../assets/bbb.jpg'),
                    code: 'OT03457128'
                },
                {
                    name: 'threeble flor Parrot wooren cage ',
                    Size: '70 inch',
                    newcost: 'Rs 9,000.00',
                    cost: 'Rs 10,500',
                    image: require('../assets/ppp.jpg'),
                    code: 'OT07678'
                },
                {
                    name: 'Steel outdoor Rabbit cage ',
                    Size: '70 inch',
                    cost: 'Rs 8,000.00',
                    newcost: 'Rs 7,200.00',
                    image: require('../assets/rbtf.jpg'),
                    code: 'OT09999'
                },
                {
                    name: 'Indoor rabbit cage   ',
                    Size: '70 inch',
                    cost: 'Rs 4,500',
                    newcost: 'Rs 3,000.00',
                    image: require('../assets/ind.jpg'),
                    code: 'OT07678'
                },
                {
                    name: ' Rabbits, cats, and dog groomig kit ',
                    newcost: 'Rs 1,350.00',
                    cost: 'Rs 1,500',
                    image: require('../assets/g.webp'),
                    code: 'OT88995'
                },
                {
                    name: 'Hay feeder for rabbit  ',
                    newcost: 'Rs 1,510.00',
                    cost: 'Rs 1,700',
                    image: require('../assets/feeder.jpg'),
                    code: 'OT088882'
                },
                {
                    name: 'Rabbit food feeder ',
                    newcost: 'Rs 1,100.00',
                    cost: 'Rs 1,900',
                    image: require('../assets/oi.jpg'),
                    code: 'OT666777'
                },
                {
                    name: 'Rabbit probiotic supplement for rabbit ',
                    newcost: 'Rs 2,610.00',
                    cost: 'Rs 2,900',
                    image: require('../assets/sap.webp'),
                    code: 'OT66444'
                },
                {
                    name: 'JiMMy Pet Products Budgie Food Exclusive Daily Mix Bird Food for Budgies',
                    size: '450 gm ',
                    newcost: 'Rs 5,310.00',
                    cost: 'Rs 5,900',
                    image: require('../assets/st.jpg'),
                    code: 'OT111444'
                },
                {
                    name: 'Fish Tank Oxygen Mortor ',
                    newcost: 'Rs 2,160.00',
                    cost: 'Rs 2,400',
                    image: require('../assets/oxg.webp'),
                    code: 'OT244523'
                },
                {
                    name: 'Supper Steel indoor cage gor parrots ',
                    cost: 'Rs 9,400.00',
                    newcost: 'Rs 8,460.00',
                    image: require('../assets/itb.jpg'),
                    code: 'OT098900'
                },
                {
                    name: 'Colorfull fish tank stons ',
                    Size: '2 kg',
                    cost: 'Rs 2,400.00',
                    newcost: 'Rs 2,160.00',
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
    
    
    
    
    
    
    
    