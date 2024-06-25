<template>
  <!-- Carousel -->
  <div>
    <CarouselImg />
  </div>
<!-- 2.	Promotion Card -->
<div>
  <PromoCard/>  

</div>

<!-- Catogery -->
  <div >
    <CatogeryView/>
  </div>
 

    <!-- cart for products   -->
    <div >
      <CardProduct />
    </div>
    <div>
      <CatProducts/>
    </div>
  
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';

// @ is an alias to /src
import CarouselImg from '@/components/CarouselImg.vue';
import CatogeryView from '@/components/CatogeryView.vue';
import CatProducts from '@/components/cat/catProducts.vue';
import PromoCard from '@/components/promoCard.vue';

export default {
  name: 'HomeView',
  components: {
    CardProduct,
    CarouselImg,
    CatogeryView,
    CatProducts,
    PromoCard
}
}
</script>
