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
      <h1 class="text-4xl font-bold text-left text-gray-700">
        Romances
      </h1>
      <div
        class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <router-link to="/romandetail"
            ><img
              src="../assets/cover.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></router-link>
          <div class="py-5">
            <p
              class="mb-2 text-xs flex font-semibold text-gray-600 ml-16 uppercase"
            >
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
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <spam class="mt-1 ml-4">50k</spam>
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/6.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/7.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/8.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 rounded">
          <a href="/" aria-label="Article"
            ><img
              src="../assets/9.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p class="mb-4 text-gray-700">Thiller</p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/10.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-24">
      <h1 class="text-4xl font-bold text-left text-gray-700">
        Actions
      </h1>
      <div
        class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/11.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/12.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/13.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/14.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 rounded">
          <a href="/" aria-label="Article"
            ><img
              src="../assets/15.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p class="mb-4 text-gray-700">Thiller</p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/16.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-24">
      <h1 class="text-4xl font-bold text-left text-gray-700">Aventures</h1>
      <div
        class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/1.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/9.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/4.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/2.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 rounded">
          <a href="/" aria-label="Article"
            ><img
              src="../assets/6.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p class="mb-4 text-gray-700">Thiller</p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/7.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-24 mt-6">
      <h1 class="text-4xl font-bold text-left text-gray-700">
       Horreurs
      </h1>
      <div
        class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/7.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/13.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
             src="../assets/15.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/16.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 rounded">
          <a href="/" aria-label="Article"
            ><img
              src="../assets/4.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p class="mb-4 text-gray-700">Thiller</p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/8.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-24">
      <h1 class="text-4xl font-bold text-left text-gray-700">Fantaisies</h1>
      <div
        class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4"
      >
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/1.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/17.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
             src="../assets/11.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
             src="../assets/14.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 rounded">
          <a href="/" aria-label="Article"
            ><img
              src="../assets/15.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p class="mb-4 text-gray-700">Thiller</p>
          </div>
        </div>
        <div
          class="overflow-hidden transition-shadow duration-300 text-gray-700 rounded"
        >
          <a href="/" aria-label="Article"
            ><img
              src="../assets/9.jpeg"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
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
