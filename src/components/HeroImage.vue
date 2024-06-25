<template>
    <picture>
      <source media="(min-width: 601px min-hight: 200px)" :srcset="`images//${headerImage}.webp`" type="image/webp" />
     
      <source media="(min-width: 601px)" :srcset="`images//${headerImage}.jpg`" />
      <img
        id="mainImg"
        :src="`images//${headerImage}.jpg`"
        :srcset="`images//${headerImage}_small.jpg 1x, images//${headerImage}.jpg 2x`"
        :alt="altText"
      />
    </picture>
  </template>
   
  <script>
  export default {
    name: "HeroImage",
    props: {
      headerImage: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        required: true,
      },
    },
  };
  </script>
   
  <style scoped>
  #mainImg {
    width: 100%;
    height: auto;
  }
  </style>
  