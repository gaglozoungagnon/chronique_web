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

    <div class="relative overflow-hidden mb-6 mt-9">
      <div class="flex">
        <h1 class="text-4xl font-bold text-gray-700 ml-32">
          Vos recommandation du jour
        </h1>
        <div class="relative inline-block ml-auto mr-12">
         <router-link class="flex items-center" to="/parametre">
          
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
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </router-link>
          <div
            v-if="isDropdownOpen"
            id="dropdown-menu"
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div
              class="py-2 p-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-button"
            >
              <div
                class="py-2 p-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
              >
                <a
                  class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                  role="menuitem"
                >
                  Romance
                </a>
                <a
                  class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                  role="menuitem"
                >
                  Actions
                </a>
                <a
                  class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                  role="menuitem"
                >
                  Aventure
                </a>
                <a
                  class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                  role="menuitem"
                >
                  Fantaisie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex transition-transform duration-500 ease-in-out -ml-32 mt-4"
      >
        <!-- Première diapositive -->
        <div class="flex-shrink-0 relative w-1/6 ml-32">
          <div
            class="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item"
          >
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img
                class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="../assets/1.jpeg"
                alt="Image 2"
              />
            </div>
            <div class="flex mt-6 space-x-3">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">
                  Bon goût à Calavi IITA
                </h1>
                <p class="text-sm text-gray-500 poppins">L’igname pilée est</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Deuxième diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item"
          >
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img
                class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="../assets/2.jpeg"
                alt="Image 2"
              />
            </div>
            <div class="flex mt-6 space-x-3">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">
                  Bon goût à Calavi IITA
                </h1>
                <p class="text-sm text-gray-500 poppins">L’igname pilée est</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Troisième diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item"
          >
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img
                class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="../assets/3.jpeg"
                alt="Image 3"
              />
            </div>
            <div class="flex mt-6 space-x-3">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">
                  Boca Del Rio, Grand Popo
                </h1>
                <p class="text-sm text-gray-500 poppins">
                  Vous sortez à Bénin,
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quatrième diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item"
          >
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img
                class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="../assets/4.jpeg"
                alt="Image 4"
              />
            </div>
            <div class="flex mt-6 space-x-3">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">
                  Wasabi Sushi Bar, Cotonou
                </h1>
                <p class="text-sm text-gray-500 poppins">
                  Nous y avons été avec
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item"
          >
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img
                class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="../assets/5.jpeg"
                alt="Image 3"
              />
            </div>
            <div class="flex mt-6 space-x-3">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">
                  Boca Del Rio, Grand Popo
                </h1>
                <p class="text-sm text-gray-500 poppins">Vous sortez à Bénin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-24">
      <h1 class="text-4xl font-bold text-left text-gray-700">
        Histoires en cours
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
    <h1 class="text-3xl font-bold text-left ml-96  ">
  <span class="bg-blue-100 text-blue-700 px-2 py-2 rounded-lg">Auteur de la semaine</span>
</h1>

    <div class="w-2/3 ml-96 h-96 shadow-lg mt-6">
      <div
        class="overflow-hidden transition-shadow duration-300 flex text-gray-700 rounded"
      >
        <router-link to="/romandetail"
          ><img
            src="../assets/01.jpeg"
            class="object-cover w-2/3 h-80 rounded mt-4 ml-6"
            alt=""
        /></router-link>
        <div class="mt-9 text-left">
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
          <div class="flex">
          <p class="mb-2 text-xs flex font-semibold text-gray-600 uppercase">
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
          <div class="text-gray-700 flex ml-4 w-full">
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

          <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
            Season 2 of is bittersweet. Kidnapped by someone she thought was a
            friend, and wit
          </p>
          <button class="text-gray-700 rounded-lg bg-blue-500 px-8 py-2 text-xl mt-9">En savoir plus</button>
        </div>
      </div>
    </div>
    <div class="mx-24 mt-4">
      <h1 class="text-4xl font-bold text-left text-gray-700">
        Publications recentes
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
      <h1 class="text-4xl font-bold text-left text-gray-700">Nouveauté</h1>
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
    <h1 class="text-4xl font-bold text-left text-gray-700 ml-24">
      Les plus lus par genre
    </h1>
    <div class="mx-24 flex mt-2 ">
      <div class=" bg-gray-100 shadow-xl">
        <app-ranking-popular-genre-preview class="mt-4">
          <div
            class="ranking-popular-genre-preview-container first-preview even mx-2"
          >
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a
                href="/explorer/stories/fantaisie-novel?language=FR"
                class="text-gray-500 ml-36 hover:underline"
                >Voir plus</a
              >
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth ">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
      <div class="bg-white">
        <app-ranking-popular-genre-preview class="mt-4">
          <div
            class="ranking-popular-genre-preview-container first-preview even mx-2"
          >
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a
                href="/explorer/stories/fantaisie-novel?language=FR"
                class="text-gray-500 ml-36 hover:underline"
                >Voir plus</a
              >
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
      <div class="bg-gray-100 shadow-xl">
        <app-ranking-popular-genre-preview class="mt-4">
          <div
            class="ranking-popular-genre-preview-container first-preview even mx-2"
          >
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a
                href="/explorer/stories/fantaisie-novel?language=FR"
                class="text-gray-500 ml-36 hover:underline"
                >Voir plus</a
              >
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
      <div class="bg-white">
        <app-ranking-popular-genre-preview class="mt-4">
          <div
            class="ranking-popular-genre-preview-container first-preview even mx-2"
          >
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a
                href="/explorer/stories/fantaisie-novel?language=FR"
                class="text-gray-500 hover:underline ml-36"
                >Voir plus</a
              >
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left ">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a
                  href="/book/16042/FR/le-manoir-tome-1-le-prisonnier"
                  class="flex items-center space-x-2 mt-2"
                >
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-24 h-24">
                    <img
                      src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold text-left">
                      Le Manoir - Tome 1 - Le prisonnier
                    </h4>
                    <div
                      class="genres-container genres-contest-container flex items-center space-x-2"
                    >
                      <span class="text-gray-500">Vampires</span>
                      <span class="text-gray-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
    </div>
   
     <h1 class="text-3xl font-bold text-left ml-96  mt-12">
  <span class="bg-blue-100 text-blue-700 px-2 py-2 rounded-lg">Roman de la semaine</span>
</h1>
    <div class="w-2/3 ml-96 h-96 mt-4 shadow-lg">
      <div
        class="overflow-hidden transition-shadow duration-300 flex text-gray-700 rounded"
      >
        <router-link to="/romandetail"
          ><img
            src="../assets/7.jpeg"
            class="object-cover w-2/3 h-80 rounded mt-4 ml-4"
            alt=""
        /></router-link>
        <div class="mt-9 text-left">
          <a
            href="/"
            aria-label="Article"
            class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p class="text-2xl font-bold leading-5">Diving to the deep</p>
          </a>
          <p class="mb-2 text-xs font-semibold text-gray-600 uppercase flex">
            <spam>Romance</spam> <spam class="ml-2">Action</spam>
          </p>
          <div class="flex">
            <p class="mb-2 text-xs flex font-semibold text-gray-600 uppercase">
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
            <div class="text-gray-600 flex ml-4 w-full">
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
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <p class="ml-2">71 Chapitre</p>
            </div>
          </div>
          <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
            Découvrez les dernières et meilleures histoires triées sur le volet
            par notre équipe
          </p>
          <button class="text-gray-700 rounded-lg bg-blue-500 px-8 py-2 text-xl mt-9">Lire</button>
        </div>
      </div>
    </div>
    <div class="mx-24 mt-6">
      <h1 class="text-4xl font-bold text-left text-gray-700">
        Les histoires terminés
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
      <h1 class="text-4xl font-bold text-left text-gray-700">Lecture recentes</h1>
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
    
  },
  mounted() {
    this.startSlider();

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
