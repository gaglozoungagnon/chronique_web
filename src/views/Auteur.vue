<template>
  <div class="bg-white">
    <div class="h-96">
      <div class=" ">
        <transition name="fade" mode="out-in">
          <div :key="currentImage">
            <img
              :src="images[currentImage].src"
              :alt="'Image ' + (currentImage + 1)"
              class="h-96 object-cover w-full"
            />
          </div>
        </transition>
      </div>
    </div>

    <div class="mx-24 mt-9">
      <h1 class="text-4xl font-bold text-left text-gray-700">Nos auteurs</h1>
      <div
        class="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div class="author card border border-gray-300 rounded-lg shadow-lg">
          <router-link to="/auteurdetail"
          >
            <div class="relative">
              <img
                class="author-banner w-full rounded-lg"
                src="../assets/02.jpeg"
                alt="une photo"
              />
              <a href="/authors/yvan">
                <img
                  class="absolute top-60 left-52 w-24 h-24 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </a>
            </div>
          </router-link>
          <div class="p-2 mt-4 text-left">
            <div>
              <h1 class="text-xl font-semibold">
                <a href="/authors/yvan">yvan</a>
              </h1>
              <p>Benin</p>
             <div class="text-gray-700 flex  w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <p class="ml-2">10 Livres</p>
              </div>
            </div>
          </div>
        </div>

        <div class="author card border border-gray-300 rounded-lg shadow-lg">
          <a href="/authors/yvan">
            <div class="relative">
              <img
                class="author-banner w-full rounded-lg"
                src="../assets/03.jpeg"
                alt="une photo"
              />
              <a href="/authors/yvan">
                <img
                  class="absolute top-72 left-60 w-16 h-16 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </a>
            </div>
          </a>
          <div class="p-2 mt-4 text-left">
            <div>
              <h1 class="text-xl font-semibold">
                <a href="/authors/yvan">yvan</a>
              </h1>
              <p>Benin</p>
              <p>Benin</p>
            </div>
          </div>
        </div>
        <div class="author card border border-gray-300 rounded-lg shadow-lg">
          <a href="/authors/yvan">
            <div class="relative">
              <img
                class="author-banner w-full rounded-lg"
                src="../assets/05.jpeg"
                alt="une photo"
              />
              <a href="/authors/yvan">
                <img
                  class="absolute top-72 left-60 w-16 h-16 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </a>
            </div>
          </a>
          <div class="p-2 mt-4 text-left">
            <div>
              <h1 class="text-xl font-semibold">
                <a href="/authors/yvan">yvan</a>
              </h1>
              <div class="text-gray-700 flex  w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <p class="ml-2">10 Livres</p>
              </div>
              <p>Benin</p>
            </div>
          </div>
        </div>
        <div class="author card border border-gray-300 rounded-lg shadow-lg">
          <a href="/authors/yvan">
            <div class="relative">
              <img
                class="author-banner w-full rounded-lg"
                src="../assets/06.jpeg"
                alt="une photo"
              />
              <a href="/authors/yvan">
                <img
                  class="absolute top-72 left-60 w-16 h-16 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
              </a>
            </div>
          </a>
          <div class="p-2 mt-4 text-left">
            <div>
              <h1 class="text-xl font-semibold">
                <a href="/authors/yvan">yvan</a>
              </h1>
              <p>Benin</p>
              <p>Benin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-9"></div>
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
