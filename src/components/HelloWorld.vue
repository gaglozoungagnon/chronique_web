<template>
  <div class="">
    <div class="custom-background   flex flex-col items-center justify-start font-sans min-h-96  lg:pt-10 lg:pb-20">
      <div>
        <p class="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
          Pourquoi rester affamé quand vous pouvez commander chez WADOUNOU
        </p>
      </div>
      <div>
        <p class="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200">

          Téléchargez dès maintenant l'application alimentaire de WADOUNOU
        </p>
      </div>
      <div
        class="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
        <button
          class="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium ">
          Playstore
        </button>
        <button
          class="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">
          App Store
        </button>
      </div>

    </div>
    <div class="flex">
      <div class="w-1/3 mt-4  ">
        <transition name="fade" mode="out-in">
          <img :key="currentImage" :src="images[currentImage]" :alt="'Image ' + (currentImage + 1)"
            class="w-full h-full object-cover">
        </transition>
      </div>
      <div
        class="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-1/3 lg:h-96 lg:pt-0">
        <img class="absolute left-0 lg:left-auto lg:-mt-64" src="../assets/Rectangle_1.png" alt="" />
        <img class="ml-64 lg:-mt-16" src="../assets/Rectangle_2.png" alt="" />
      </div>
      <div class="w-1/3 mt-4  ">
        <transition name="fade" mode="out-in">
          <img :key="currentImage" :src="image[currentImage]" :alt="'Image ' + (currentImage + 1)"
            class="w-full h-full object-cover">
        </transition>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto my-12 px-6">
      <h1 class=" text-left text-4xl font-bold">Restaurants</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        <div class="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">

          <div class="overflow-hidden rounded-2xl flex flex-grow">
            <img class="transform transition duration-700 hover:scale-125"
              src="../assets/architecture-building-city-2047397.png" alt={title} />
          </div>

          <div class="flex mt-6 space-x-3 ">

            <div class="flex flex-col space-y-3">
              <h1 class="text-2xl text-gray-800 poppins"> Boca Del Rio, Grand Popo</h1>
              <p class="text-sm text-gray-500 poppins">Vous sortez à Bénin, Afrique : lisez sur Tripadvisor 2 436 avis sur 212 restaurants à Bénin, recherchez par prix, quartier, etc.</p>
              <a href="#"
              class="bg-green-600 text-white px-4 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Plus Info
            </a>
            </div>
          </div>
        </div>
        <div class="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">

          <div class="overflow-hidden rounded-2xl flex flex-grow">
            <img class="transform transition duration-700 hover:scale-125 h-full w-full"
              src="../assets/la-cuisine.jpg" alt={title} />
          </div>

          <div class="flex mt-6 space-x-3 ">

            <div class="flex flex-col space-y-3">
              <h1 class="text-2xl text-gray-800 poppins"> Wasabi Sushi Bar, Cotonou</h1>
              <p class="text-sm text-gray-500 poppins">Nous y avons été avec mon mari et quelle belle surprise !! Les produits sont super frais et vraiment très bons </p>
              <a href="#"
              class="bg-green-600 text-white px-4 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Plus Info
            </a>
            </div>
          </div>
        </div>
        <div class="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">

          <div class="overflow-hidden rounded-2xl flex flex-grow">
            <img class="transform transition duration-700 hover:scale-125"
              src="../assets/adult-blur-blurred-background-687824.png" alt={title} />
          </div>

          <div class="flex mt-6 space-x-3 ">

            <div class="flex flex-col space-y-3">
              <h1 class="text-2xl text-gray-800 poppins"> Bon goût à Calavi IITA</h1>
              <p class="text-sm text-gray-500 poppins">L’igname pilée est une spécialité du nord du Bénin qui est devenue une référence de la gastronomie béninoise. Pas besoin d’attendre chaque année la fête de l’igname à Savalou pour en déguster. </p>
              <a href="#"
              class="bg-green-600 text-white px-4 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Plus Info
            </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div>
      <h1 class="text-4xl font-bold ">Repas</h1>
      <div class="flex mt-4">
        <div
          class="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative ml-4 w-1/4">
          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/dinner4.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">1500 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>
        <div
          class="bg-white border border-gray-100 ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/4">

          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/dinner5.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">1800 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>
        <div
          class="bg-white border border-gray-100 ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/4">

          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/dinner6.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">2500 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>
        <div
          class="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative ml-4 w-1/4 mr-4">
          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/dinner1.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">1500 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>


      </div>
      <div class="flex mt-4">
        <div
          class="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative ml-4 w-1/4">
          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/breakfast3.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">1700 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>
        <div
          class="bg-white border border-gray-100 ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/4">

          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/breakfast1.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">1200 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>
        <div
          class="bg-white border border-gray-100 ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/4 ">

          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/lunch1.png" alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">2200 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>
        <div
          class="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative ml-4 w-1/4 mr-4">
          <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" src="../assets/dinner3.png"
            alt="" />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-gray-900 poppins text-lg">{title}</h1>
            <p class="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
            <h2 class="text-gray-900 poppins text-2xl font-bold">1500 FCFA</h2>
            <button
              class="bg-green-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Commander
            </button>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      images: [
        require('@/assets/breakfast2.png'),
        require('@/assets/breakfast4.png'),
        require('@/assets/breakfast6.png'),
        require('@/assets/lunch3.png'),
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
.custom-background {
  background-image: url('~@/assets/hero.png');
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
</style>
