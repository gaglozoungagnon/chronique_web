<template>
    <div class="relative overflow-hidden">
      <div class="w-full h-64 ">
        <transition name="fade" mode="out-in">
          <img :key="currentImage" :src="images[currentImage]" :alt="'Image ' + (currentImage + 1)" class="w-full h-full object-cover">
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
        'https://source.unsplash.com/1600x900/?beach',
          '@/assets/dinner5.png',
          require('@/assets/dinner6.png'),
          '../assets/WADOUNOU.png',
        ],
        currentImage: 0,
      };
    },
    mounted() {
      this.startSlider();
    },
    methods: {
      startSlider() {
        setInterval(() => {
          this.currentImage = (this.currentImage + 1) % this.images.length;
        }, 5000); // Défilement toutes les 5 secondes
      },
    },
  };
  </script>
  
  <style>
  /* Ajoutez des styles personnalisés pour le slider ici */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  