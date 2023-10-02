<template>
    <div class="w-1/3 mt-4">
      <transition name="fade" mode="out-in">
        <div :key="currentImage">
          <img :src="images[currentImage].src" :alt="'Image ' + (currentImage + 1)"
            class="w-full h-full object-cover">
          <p class="text-center text-lg mt-2">{{ images[currentImage].name }}</p>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        images: [
        { src: require('@/assets/breakfast2.png'), name: 'Petit-déjeuner 1' },
        { src: require('@/assets/breakfast4.png'), name: 'Petit-déjeuner 2' },
        { src: require('@/assets/breakfast6.png'), name: 'Petit-déjeuner 3' },
        { src: require('@/assets/lunch3.png'), name: 'Déjeuner' },
      ],
        image: [
          require('@/assets/lunch4.png'),
          require('@/assets/lunch5.png'),
          require('@/assets/lunch6.png'),
          require('@/assets/dinner2.png'),
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
  
  <style scoped>
  
  /* Ajoutez des styles personnalisés pour le slider ici */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
 
  