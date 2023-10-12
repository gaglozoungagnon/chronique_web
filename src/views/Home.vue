<template>
  <div class="bg-gray-900 ">
    <div class="custom-background  h-72 ">
      

    </div>

    <div class="relative overflow-hidden mb-6 mt-9">
      <h1 class="text-4xl font-bold text-white">Vos recommandation du jour</h1>
      <div class="flex transition-transform duration-500 ease-in-out -ml-32 mt-4">

        <!-- Première diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class=" transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item">
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Image 2" />
            </div>
            <div class="flex mt-6 space-x-3 ">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">Bon goût à Calavi IITA</h1>
                <p class="text-sm text-gray-500 poppins">L’igname pilée est </p>

              </div>
            </div>
          </div>
        </div>

        <!-- Deuxième diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class="transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item">
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Image 2" />
            </div>
            <div class="flex mt-6 space-x-3 ">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">Bon goût à Calavi IITA</h1>
                <p class="text-sm text-gray-500 poppins">L’igname pilée est </p>

              </div>
            </div>
          </div>
        </div>

        <!-- Troisième diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class=" transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item">
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Image 3" />
            </div>
            <div class="flex mt-6 space-x-3 ">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">Boca Del Rio, Grand Popo</h1>
                <p class="text-sm text-gray-500 poppins">Vous sortez à Bénin,</p>

              </div>
            </div>
          </div>
        </div>

        <!-- Quatrième diapositive -->
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class=" transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item">
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Image 4" />
            </div>
            <div class="flex mt-6 space-x-3 ">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">Wasabi Sushi Bar, Cotonou</h1>
                <p class="text-sm text-gray-500 poppins">Nous y avons été avec
                </p>

              </div>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-1/6 ml-32">
          <div
            class=" transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl slider-item">
            <div class="overflow-hidden rounded-2xl flex flex-grow">
              <img class="transform transition duration-700 hover:scale-125 h-72 w-full"
                src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Image 3" />
            </div>
            <div class="flex mt-6 space-x-3 ">
              <div class="flex flex-col space-y-3">
                <h1 class="text-2xl text-gray-800 poppins">Boca Del Rio, Grand Popo</h1>
                <p class="text-sm text-gray-500 poppins">Vous sortez à Bénin
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div class=" mx-24  ">
      <h1 class="text-4xl font-bold text-left text-white">Roman en cours</h1>
      <div class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4 ">
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <router-link to="/romandetail"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></router-link>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300  rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">
                Explore the beautiful
              </p>
            </a>
            <p class="mb-4 text-gray-700">
              Thiller
            </p>

          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class=" mx-24 ">
      <h1 class="text-4xl font-bold text-left text-white">Publications recentes</h1>
      <div class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4 ">
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300  rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">
                Explore the beautiful
              </p>
            </a>
            <p class="mb-4 text-gray-700">
              Thiller
            </p>

          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class=" mx-24 ">
      <h1 class="text-4xl font-bold text-left text-white">Nouveauté</h1>
      <div class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4 ">
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300  rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">
                Explore the beautiful
              </p>
            </a>
            <p class="mb-4 text-gray-700">
              Thiller
            </p>

          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-4xl font-bold text-left text-white ml-24">Les plus pas genre</h1>
    <div class="mx-24 flex mt-2">

      <div class="bg-gray-600">
        <app-ranking-popular-genre-preview class="mt-4">
          <div class="ranking-popular-genre-preview-container first-preview even mx-2">
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a href="/explorer/stories/fantaisie-novel?language=FR" class="text-blue-500 ml-36 hover:underline">Voir
                plus</a>
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
      <div class="bg-gray-900">
        <app-ranking-popular-genre-preview class="mt-4">
          <div class="ranking-popular-genre-preview-container first-preview even mx-2">
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a href="/explorer/stories/fantaisie-novel?language=FR" class="text-blue-500 ml-36 hover:underline">Voir
                plus</a>
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
      <div class="bg-gray-600">
        <app-ranking-popular-genre-preview class="mt-4">
          <div class="ranking-popular-genre-preview-container first-preview even mx-2">
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a href="/explorer/stories/fantaisie-novel?language=FR" class="text-blue-500 ml-36 hover:underline">Voir
                plus</a>
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <!-- Ajoutez d'autres éléments similaires ici -->
            </div>
          </div>
        </app-ranking-popular-genre-preview>
      </div>
      <div class=" bg-gray-900">
        <app-ranking-popular-genre-preview class="mt-4">
          <div class="ranking-popular-genre-preview-container first-preview even mx-2">
            <div class="flex">
              <h3 class="text-xl font-bold">Fantaisie</h3>
              <a href="/explorer/stories/fantaisie-novel?language=FR" class="text-blue-500 hover:underline ml-36">Voir
                plus</a>
            </div>
            <div class="colNeovelFlexStart ranking-books-container">
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
                    </div>
                  </div>
                </a>
              </app-book-ranking-item>
              <app-book-ranking-item class="fullWidth">
                <a href="/book/16042/FR/le-manoir-tome-1-le-prisonnier" class="flex items-center space-x-2">
                  <span class="text-xl font-bold">1</span>
                  <div class="img-hover-zoom w-16 h-16">
                    <img src="https://neovel.io/V2/book/image?bookId=16042&amp;oldApp=false&amp;imageExtension=1"
                      alt="Le Manoir - Tome 1 - Le prisonnier cover" class="w-full h-full object-cover">
                  </div>
                  <div class="colNeovelFlexStart book-info-container">
                    <h4 class="text-lg font-semibold">Le Manoir - Tome 1 - Le prisonnier</h4>
                    <div class="genres-container genres-contest-container flex items-center space-x-2">
                      <span class="text-blue-500">Vampires</span>
                      <span class="text-blue-500">Destinée</span>
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
    <div class=" mx-24 mt-6">
      <h1 class="text-4xl font-bold text-left text-white">Les histoires terminés</h1>
      <div class="grid gap-5 lg:grid-cols-6 sm:max-w-sm sm:mx-auto lg:max-w-full mt-4 ">
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Romance
            </p>
          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300  rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              28 Dec 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p class="text-2xl font-bold leading-5">
                Explore the beautiful
              </p>
            </a>
            <p class="mb-4 text-gray-700">
              Thiller
            </p>

          </div>
        </div>
        <div class="overflow-hidden transition-shadow duration-300 text-white rounded">
          <a href="/" aria-label="Article"><img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="object-cover w-full h-64 rounded" alt="" /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              13 Jul 2020
            </p>
            <a href="/" aria-label="Article"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
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
  name: 'App',
  components: {
    ModalComponent,
  },
  data() {
    return {
 
    };
  },
  
};

</script>

<style scoped>
.custom-background {
  background-image: url('~@/assets/OF18NR0.jpg');
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
