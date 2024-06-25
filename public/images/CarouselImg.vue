<template>
    <div class="carousel ">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="slide" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.image" :alt="slide.caption" />
                <div class="caption"></div>
            </div>
        </div>

    
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            slides: [
                { image: '../images/adobe.jpg', caption: 'Image 1' },
                { image: '../images/don.jpg', caption: 'Image 2' },
                { image: '../images/jack.jpg', caption: 'Image 3' },
            ],
            currentIndex: 0,
        };
    },
    mounted() {
        this.startTimer();
    },
    methods: {
        startTimer() {
            setInterval(() => {
                this.nextSlide();
            }, 9000); 
        },
        nextSlide() {
            if (this.currentIndex < this.slides.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.slides.length - 1;
            }
        },
    },
};
</script>
  
<style>
.carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slides {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.slide {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.caption {
    margin-top: 10px;
}
.carousel img {
    width: 1500px;
    height: 550px;
}

.navigation {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.symbol {
    font-size: 20px;
    cursor: pointer;
    margin: 0 5px;
}

.symbol.disabled {
    opacity: 0.5;
    cursor: default;
}
</style>
  