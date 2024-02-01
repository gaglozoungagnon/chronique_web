<template>
  <div class="">
    <div class="custom-background">
      <div class="flex ml-44 p-4">
        <img class="w-44 mt-4" :src="books.banner_desktop" alt="" />

        <div class="my-3 space-y-2">
          <div class="flex mt-4">
            <button
              class="border border-black text-black px-4 py-1 rounded-xl ml-4"
            >
              <spam class="text-sm">{{ books.category.name }}</spam>
            </button>
            <button
              class="border border-black text-black px-4 py-2 ml-4 rounded-xl"
            >
              <spam class="text-sm">{{ books.category.name }}</spam>
            </button>
          </div>
          <p class="text-black text-2xl text-left ml-4 mt-2">
            {{ books.name }}
          </p>

          <div class="flex items-center mt-2">
            <div class="text-black flex ml-4 w-full">
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

              <p class="ml-2">
                {{
                  books.chapters && books.chapters.length !== 0
                    ? books.chapters.length
                    : "0 "
                }}
                chapitres
              </p>
            </div>
            <div class="text-black flex w-full mr-64">
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>

              <spam class="ml-2">4.7 (162 notes)</spam>
            </div>
          </div>
          <div class="flex items-center mt-2">
            <div class="text-black flex w-full ml-4">
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
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <spam class="ml-2">{{ books.nbr_read }} Chapitres lus</spam>
            </div>
            <div class="text-black flex w-full mr-64">
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
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <spam class="ml-2">184 Fans</spam>
            </div>
          </div>
          <div class="flex items-center mt-2">
            <router-link
              class="bg-green-600 ml-4 text-white px-12 py-2 flex focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
              :to="`/lire/${books.id}/${0}`"
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <spam class="ml-2">Lire</spam>
            </router-link>
            <button
              @click="AddBook()"
              class="border border-black text-black flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
            >
              <span v-if="isLoading">
                <spiner />
              </span>
              <spam v-else class="ml-2 flex">
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
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
                <span> Ajouter</span>
              </spam>
            </button>
            <button
              class="text-gray-700 flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
            ></button>
            <button
              class="text-black flex px-12 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
            >
              Partager:
            </button>
            <label class="items-center w-1/2">
              <a href="#"
                ><svg
                  class="blue-svg h-9 w-9"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  ></path></svg
              ></a>
            </label>
            <label class="items-center w-1/2">
              <a href="#" class="">
                <svg
                  style="color: rgb(82, 224, 31)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-whatsapp ml-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                    fill="#52e01f"
                  ></path>
                </svg>
              </a>
            </label>
            <label class="items-center w-1/2">
              <a href="#"
                ><svg
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                  class="h-9 w-9 ml-4"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </label>
            <label class="items-center w-1/2">
              <a href="#"
                ><svg
                  fill="#0077B5"
                  viewBox="0 0 24 24"
                  class="h-9 w-9 ml-4"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </label>
            <label class="items-center w-1/2">
              <a href="#"
                ><svg
                  fill="#8A3AB9"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-9 w-9 ml-4"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path></svg
              ></a>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="ml-44 mr-44 flex">
        <div class="mt-4 w-1/2 mr-32">
          <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
            Synopsis
          </h3>
          <p class="text-gray-700 mt-2 text-left text-sm font-sans">
            {{ books.description }}
          </p>
          <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">Tags</h3>
          <p class="mt-4 text-gray-700 text-left text-sm font-sans">
            #{{ books.tags[0].type_tag.name }}
          </p>
          <div class="font-bold text-gray-700 text-2xl mt-4 text-left">
            <div class="flex">
              <p class="">Chapitres</p>
              <div>
                <p class="ml-24">Avis(0)</p>
              </div>
            </div>
            <p class="text-sm font-sans mt-6 ml-4">
              {{
                books.chapters && books.chapters.length !== 0
                  ? books.chapters.length
                  : "0 "
              }}
              Chapitres
            </p>
            <div v-for="(chapitre, index) in chapitres" :key="index">
              <router-link :to="`/lire/${books.id}/${index}`">
                <p class="text-sm font-sans mt-6 ml-9">
                  Chapitre {{ chapitre.number }} - {{ chapitre.name }}
                </p>
              </router-link>
              <!-- <p class="text-sm font-sans mt-2 ml-9">6 janv. 2022</p>-->
            </div>
          </div>
        </div>
        <div class="mt-4 w-1/3">
          <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
            Auteur
          </h3>
          <div class="mt-4 bg-black h-22 rounded-lg">
            <div class="flex text-white mt-6 w-full">
              <label class="w-1/2 mt-0">
                <div v-if="books.user.profile_photo_path ===null" class="w-full flex">
                  <img
                    class="object-cover w-16 h-16 border-2 border-green-500 rounded-full ml-2"
                    src="../assets/download.png"
                  />
                  <span class="font-sans ml-2 mt-4 whitespace-nowrap">{{
                    books.authors
                  }}</span>
                </div>
                <div v-else class="w-full flex">
                  <img
                    class="object-cover w-16 h-16  border-2 border-green-500 rounded-full ml-2"
                     :src="books.user.profile_photo_path"
                  />
                  <span class="font-sans ml-2 mt-4 whitespace-nowrap">{{
                    books.authors
                  }}</span>
                </div>
              </label>
              <label class="mt-2 w-1/2">
                <button
                  class="border border-green-500 text-white flex px-9 py-2 ml-4 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
                >
                  <spam class="">Soutenir</spam>
                </button>
              </label>
            </div>
          </div>
          <h3 class="font-bold text-gray-700 text-2xl mt-6 text-left">
            À propos de histoire
          </h3>
          <div class="mt-2">
            <div class="flex text-gray-300 w-full bg-black h-12 rounded-lg">
              <label class="flex mt-2 w-1/2">
                <span class="ml-2">Chapitre</span>
                <span class="ml-52">
                  {{
                    books.chapters && books.chapters.length !== 0
                      ? books.chapters.length
                      : "0 "
                  }}</span
                >
              </label>
            </div>

            <div
              class="flex text-gray-300 mt-4 w-full bg-black h-12 rounded-lg"
            >
              <label class="w-1/2 mt-2">
                <div class="w-full flex">
                  <span class="font-sans ml-2">Statut</span>
                </div>
              </label>
              <label class="w-1/2 mt-2">
                <spam class="whitespace-nowrap"> {{ books.status }}</spam>
              </label>
            </div>
            <div
              class="flex text-gray-300 mt-2 w-full bg-black h-12 rounded-lg"
            >
              <label class="w-1/2 mt-2">
                <div class="w-full flex">
                  <span class="font-sans ml-2">Dernier chapitre</span>
                </div>
              </label>
              <label class="mt-2 w-1/2">
                <spam class="whitespace-nowrap">
                  {{ formattedUpdatedAt }}
                </spam>
              </label>
            </div>
            <div
              class="flex text-gray-300 mt-2 w-full bg-black h-12 rounded-lg"
            >
              <label class="mt-2 w-1/2">
                <div class="w-full flex">
                  <span class="font-sans ml-2">Publication</span>
                </div>
              </label>
              <label class="mt-2 w-1/2">
                <spam class="whitespace-nowrap">1 Chp / 7 Jours</spam>
              </label>
            </div>
            <div
              class="flex text-gray-300 mt-2 w-full bg-white h-12 rounded-lg"
            >
              <label class="inline-flex items-center w-1/2">
                <button
                  class="bg-red-500 text-white flex px-6 py-2 ml-32 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
                  @click="showModalRepas = true"
                >
                  <spam class="ml-2">Signaler</spam>
                </button>
              </label>
            </div>
            <h3 class="font-bold text-gray-700 text-2xl mt-2 text-left">
              Tu aimeras sûrement
            </h3>
            <div class="flex">
              <img class="w-24" src="../assets/image.webp" alt="" />

              <div class="my-3 space-y-2">
                <div class="text-gray-800">
                  <p class="text-gray-800 text-xl text-left ml-4 font-bold">
                    Dra-Knight
                  </p>
                  <p class="text-sm text-left ml-4">Action</p>
                  <p class="text-sm text-left ml-4">
                    Les humains sont en voie d'extinction. Dans le désert de
                    Nahari, Syriel mène une vie simple, soumis aux mesures de
                    préservati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-9"></div>
    </div>
  </div>
  <TheModal
    width="w-full md:w-2/3 lg:w-6/12"
    :is-open="showModalRepas"
    @close-modal="showModalRepas = false"
  >
    <template #header>Signaler</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Spam
                      </BaseLabel>
                    </div>
                    <div class="flex items-center ml-80">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 ml-14 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Violation des droits d’auteurs
                      </BaseLabel>
                    </div>
                  </div>
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="hidden sm:flex sm:items-start">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Discours ou symbole haineux
                      </BaseLabel>
                    </div>
                    <div class="flex items-center ml-56">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300"
                        >Contenu illégal ou préjudiciable
                      </BaseLabel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <button
        class="bg-green-500 text-white mr-6 px-8 mb-2 py-2 focus:outline-none poppins rounded-lg mt-2 transform transition duration-300 hover:scale-105"
        @click="showModaSignaler = true"
      >
        Signaler
      </button>
    </template>
  </TheModal>
  <TheModal
    width="w-full md:w-1/3 lg:w-1/3"
    :is-open="showModaSignaler"
    @close-modal="showModaSignaler = false"
  >
    <template #header>Signaler l'histoire</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Nom de l'histoire" />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Description" />
                  <textarea
                    class="block w-full p-2 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                    autocomplete="current-password"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <button
        class="bg-green-500 text-white mr-6 px-8 py-2 focus:outline-none poppins rounded-lg mt-2 mb-2 transform transition duration-300 hover:scale-105"
      >
        Envoyer
      </button>
    </template>
  </TheModal>
</template>
    
<script>
import TheModal from "../components/TheModal.vue";
import spiner from "../components/spiner.vue";
//import AddModalFooter from "../components/AddModalFooter.vue";
//import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";

export default {
  name: "App",
  components: {
    BaseLabel,
    //BaseInput,
    TheModal,
    spiner,
    //AddModalFooter,
  },
  data() {
    return {
      addform: {
        //user_id: "",
        book_id: "",
      },
      showModalRepas: false,
      showModaSignaler: false,
      romanID: "",
      books: [],
      chapitres: [],
      filtreBooks: [],
      isLoading: false,
    };
  },
  mounted() {
    this.romanID = this.$route.params.id;
  },
  created() {
    this.book();
    //this.profile();
  },
  computed: {
    formattedUpdatedAt() {
      const updatedAt = new Date(this.books.updated_at);

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      // Utilisez la méthode toLocaleString pour formater la date
      return updatedAt.toLocaleString("fr-FR", options);
    },
  },
  methods: {
    async book() {
      console.log(this.romanID);
      try {
        const response = await axios.get(`/api/books/${this.$route.params.id}`);
        if (response.data) {
          this.books = response.data.data;
          this.chapitres = this.books.chapters;
          console.log(this.chapitres);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async AddBook() {
      try {
        this.isLoading = true;
        this.addform.book_id = this.$route.params.id;
        const response = await axios.post(`/api/readings`, this.addform);
        if (response.status == 201) {
          this.isLoading = false;
          this.addform = {};
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre romman à été ajouter à la liste de lecture avec succés",
            timeout: 5000,
          }).show();
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
  background-image: url("~@/assets/romandetail.jpeg");
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
/* Ajoutez un style CSS pour changer la couleur de la classe "blue-svg" en bleu */
.blue-svg {
  fill: blue;
}
</style>
