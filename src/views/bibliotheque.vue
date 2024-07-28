<template>
  <div class="bg-white">
    <div v-if="book.length !== 0" class="lg:mx-24 mt-9 mx-4">
      <h1 class="lg:text-4xl text-xl font-bold text-left text-gray-700">
        {{ this.gensName }}
      </h1>

      <div
        class="grid grid-cols-2 lg:grid-cols-6 p-4 gap-4"
      >
        <div
          v-for="(book, index) in book"
          :key="index"
          class=" w-full"
        >
          <router-link
            :to="`/romandetail/${book.id}/${book.slug}`"
            class="block overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
          >
            <img
              :src="book.banner_desktop"
              :alt="book.banner_desktop"
              class="object-cover h-64 rounded"
            />
            <div class="py-5">
              
              <p class="lg:text-2xl text-sm font-bold leading-5">
                {{ capitalizeFirstLetter(book.name) }}
              </p>
              <p
                class="lg:mt-2 text-xs lg:font-semibold text-gray-600 uppercase"
              >
                {{ book.categories[0].category.name }}
                <span v-if="book.categories[1]">
                  {{ book.categories[1].category.name }}
                </span>
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
     <div v-else-if="book.length === 0 && isLoading">
      <div class="h-screen flex flex-col items-center justify-center">
        <LoadingSpiner />
      </div>
    </div>
  </div>
  <!-- Composant de modal -->
  <ModalComponent :isOpen="isModalOpen" @close="closeModal" />
</template>

<script>
import ModalComponent from "../components/ModalComponent .vue";
import LoadingSpiner from "../components/LoadingSpiner.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    ModalComponent,
    LoadingSpiner,
  },

  data() {
    return {
      book: [],
      gens: "",
      gensName:"",
    loading: false,
      isLoading: false,
      isDropdownOpen: false,
    };
  },
 
  created() {
    this.fetchBooks();
  },
watch: {
    "$route.params.id": {
      immediate: true,
      handler(newVal, oldVal) {
        // Recharger les données ou actualiser la page ici
        if (newVal !== oldVal) {
          this.fetchBooks();
        
        }
      },
    },
  },
  methods: {
    capitalizeFirstLetter(text) {
      if (!text) return '';
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
    async fetchBooks() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `api/books?filter[category_id]=${this.$route.params.id}`
        );
        if (response.data) {
          this.book = response.data.data;
          this.gensName = this.book[0].categories[0].category.name;
          if ( this.book.length > 0) {
        
        this.isLoading = false;
      }
        }
      } catch (error) {
        console.log(error.data);
      }
    },
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
