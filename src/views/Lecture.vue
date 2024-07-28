<template>
  <div class="bg-white">
    <div v-if="books.length !== 0" class="relative">
      <h1
        class="lg:text-4xl text-xl mx-9 lg:mx-24 font-bold lg:text-left text-gray-700"
      >
        Liste de lecture
      </h1>
      <div class="lg:mx-24 mx-6">
        <div class="grid grid-cols-2 lg:grid-cols-6 p-4 gap-4">
          <!-- Votre boucle ici -->
          <div v-for="(book, index) in books" :key="index" class="w-full">
            <router-link
              :to="`/romandetail/${book.book.id}`"
              class="block overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
            >
              <img
                :src="book.book.banner_desktop"
                :alt="book.book.banner_desktop"
                class="object-cover h-64 rounded"
              />
              <div class="py-5">
                <p class="text-sm lg:font-bold leading-5">
                  {{ capitalizeFirstLetter(book.book.name) }}
                </p>
              </div>
            </router-link>
          </div>
          <!-- Fin de la boucle -->
        </div>
      </div>
    </div>
  </div>
  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    ModalComponent,
  },
  data() {
    return {
      currentImage: 0,
      isDropdownOpen: false,
      books: [],
      user_id: "",
      terminers: [],
    };
  },
  created() {
    this.profile();
    //this.book();
  },
  methods: {
    capitalizeFirstLetter(text) {
      if (!text) return "";
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.user_id = response.data.data.id;
          this.book(this.user_id);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async book(id) {
      try {
        const response = await axios.get(`/api/readings?user_id=${id}`);
        if (response.data) {
          this.books = response.data.data;
        }
      } catch (error) {
        console.log(error.data);
      }
    },
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
