<template>
  <div class="bg-white">
    <div class="mx-24 mt-9">
      <h1 class="text-4xl font-bold text-left text-gray-700 mr-24 ml-24">
        Histoire du jeux concours
      </h1>
      <div class=" mr-24 ml-24 mt-9">
        <div
          class="bg-blue-700 w-full flex transition transform duration-700 p-4 rounded-lg relative ml-4 w-1/3 h-80 mr-24"
        >
          <img
            class=" transform transition  duration-300 hover:scale-105"
            src="../assets/ethnic-employee-pressing-button.jpg"
            alt=""
          />
          <div class="items-center my-3 w-1/2 space-y-2 mt-12">
            <div class="flex">
              <h1 class="ml-9 text-white poppins text-3xl mt-1">
                La vie du developpeur
              </h1>
            </div>
            <div class="flex ml-9">
              <h1 class=" text-white poppins text-xl text-left mt-2">
                Découvrez nos concours lucratifs et éclairez votre chemin vers
                la célébrité littéraire, votre plume est votre guide
              </h1>
            </div>
            <div class="flex ml-9 mt-2">
               <router-link  to="/lire">
              <button
                class="text-gray-700 rounded-lg bg-yellow-500 px-8 py-2 text-xl mt-2"
              >
                Lire
              </button> </router-link>
            </div>
          </div>
        </div>

        <div class="h-6"></div>
      </div>

      <div class="mt-4 mr-24 ml-24 mt-9">
        <div
          class="bg-blue-700 w-full flex transition transform duration-700 p-4 rounded-lg relative ml-4 w-1/3 h-80 mr-24"
        >
          <img
            class=" transform transition  duration-300 hover:scale-105"
            src="../assets/aerial-view-woman-using-retro-typewriter.jpg"
            alt=""
          />
          <div class="items-center my-3 w-1/2 space-y-2 mt-12">
            <div class="flex">
              <h1 class="ml-9 text-white poppins text-3xl mt-1">
                Le monde de la
              </h1>
            </div>
            <div class="flex ml-9">
              <h1 class=" text-white poppins text-xl text-left mt-2">
                Découvrez nos concours lucratifs et éclairez votre chemin vers
                la célébrité littéraire, votre plume est votre guide
              </h1>
            </div>
            <div class="flex ml-9 mt-2">
               <router-link  to="/lire">
              <button
                class="text-gray-700 rounded-lg bg-yellow-500 px-8 py-2 text-xl mt-2"
              >
               Lire
              </button> </router-link>
            </div>
          </div>
        </div>

        <div class="h-6"></div>
      </div>
    </div>
    
 
    
  </div>
  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";

export default {
  name: "App",
  components: {
    ModalComponent,
  },
  data() {
    return {
      images: [
        { src: require("@/assets/write-neopload-banner.jpeg") },
        { src: require("@/assets/background2.jpeg") },
        { src: require("@/assets/background1.jpeg") },
        { src: require("@/assets/background3.jpeg") },
      ],
      currentImage: 0,
      isDropdownOpen: false,
    };
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      }, 5000); // Défilement toutes les 5 secondes
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
  mounted() {
    this.startSlider();
    this.toggleDropdown();

    document.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    });
  },
};
</script>

<style scoped>
.custom-background {
  background-image: url("~@/assets/OF18NR0.jpg");
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}

/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slider-item {
  animation: slide 15s linear infinite;
}

@keyframes slide {
  0%,
  100% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-200%);
  }

  75% {
    transform: translateX(-300%);
  }
}
</style>
