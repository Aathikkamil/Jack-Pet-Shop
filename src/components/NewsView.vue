<template>
  <div class="news">
    <HeroImage altText="Puddy cat2" headerImage="catheader2" />
    <h2>BBC Cat News</h2>
    <GetArticles
      myData="https://newsapi.org/v2/everything?q=Pet health tips&sortBy=publishedAt&apiKey=cf2ddcb00de24ea0a25bd6ac1f18230d"
    />
  </div>
</template>
<script>
import HeroImage from "@/components/HeroImage.vue";
import GetArticles from "@/components/GetArticles.vue";
export default {
  name: "NewsView",
  components: {
    HeroImage,
    GetArticles,
  },
};
</script>
