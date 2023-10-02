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
     <!-- component -->
     <div class="flex mt-6">
        <div class="flex-1 border-r-2 pr-4">
          <!-- Contenu à gauche -->
          <h1 class="text-4xl font-bold border border-red-200 mt-4"></h1>
        </div>
        <div class="flex-1 text-center">
          <!-- Contenu au milieu -->
          <h1 class="text-4xl font-bold">Reservation</h1>
        </div>
        <div class="flex-1 border-l-2 pl-4">
          <!-- Contenu à droite -->
          <h1 class="text-4xl font-bold border border-red-200 mt-4"></h1>
        </div>
      </div>
<div class="flex items-center justify-center p-36">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-2xl font-bold"
            >
            Prénom
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Prénom"
              class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-2xl font-bold"
            >
            Nom de famille
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Nom de famille"
              class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label
          for="guest"
          class="mb-3 block text-2xl font-bold"
        >
        Combien d’invités amenez-vous ?
        </label>
        <input
          type="number"
          name="guest"
          id="guest"
          placeholder="5"
          min="0"
          class="w-full appearance-none rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
  <label
    for="restaurant"
    class="mb-3 block text-2xl font-bold"
  >
  Choisissez un restaurant
  </label>
  <select
    name="restaurant"
    id="restaurant"
    class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  >
    <option value="restaurant1">Restaurant 1</option>
    <option value="restaurant2">Restaurant 2</option>
    <option value="restaurant3">Restaurant 3</option>
    <!-- Ajoutez plus d'options au besoin -->
  </select>
</div>

      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="date"
              class="mb-3 block text-2xl font-bold"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="time"
              class="mb-3 block text-2xl font-bold"
            >
            Temps
            </label>
            <input
              type="time"
              name="time"
              id="time"
              class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

    

      <div>
        <button
          class="hover:shadow-form rounded-md bg-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
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
  