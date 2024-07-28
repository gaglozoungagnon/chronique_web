<template>
  <div class="bg-white sm:py-9 lg:px-8 lg:flex no-select">
    <div class="lg:w-1/4">
      <div class="h-36 mb-24 lg:mb-0">
    <div class="relative">
      <img
        class="w-full h-24 transform transition duration-300 hover:scale-105 relative"
        src="../assets/full-shot-woman-reading-tablet.jpg"
        alt=""
      />
      <div v-if="books.user.profile_photo_path === null" class="flex items-center justify-center absolute top-12 left-0 right-0">
        <router-link :to="`/auteurdetail/${this.author_id}`">
          <img
            class="w-24 h-24 rounded-full border-2 border-white"
            src="../assets/download.png"
            alt=""
          />
        </router-link>
      </div>
      <div v-else class="flex items-center justify-center absolute top-12 left-0 right-0">
        <router-link :to="`/auteurdetail/${this.author_id}`">
          <img
            class="w-24 h-24 rounded-full border-2 border-white"
            :src="books.user.profile_photo_path"
            alt=""
          />
        </router-link>
      </div>
      <router-link :to="`/auteurdetail/${this.author_id}`">
        <p class="text-black lg:mt-16 mr-6 mt-12 lg:text-2xl text-lg font-bold">
          {{ books.authors }}
        </p>
      </router-link>
      <div v-if="this.profileID === '' || this.profileID === undefined" @click="showModalRepas = true" class="h-12 rounded-lg mt-4">
        <label class="inline-flex items-center">
          <button class="bg-blue-600 text-white flex px-6 py-2 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105" @click="showModalRepas = true">
            <span v-if="isLoading">
              <spinner />
            </span>
            <span v-else> Suivre</span>
          </button>
        </label>
      </div>
      <div v-else class="flex">
        <div v-if="filteredUserAbone !== true" class="h-12 rounded-lg mt-4 mx-auto">
          <label class="inline-flex items-center">
            <button class="bg-blue-600 text-white flex px-6 py-2  focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105" @click="subcript()">
              <span v-if="isLoading">
                <spinner />
              </span>
              <span v-else> Suivre</span>
            </button>
          </label>
        </div>
        <div v-else class="h-12 rounded-lg mt-4 mx-auto">
          <label class="inline-flex items-center">
            <button class="bg-blue-600 text-white flex px-6 py-2  focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105 ">
              Abonné
            </button>
          </label>
        </div>
      </div>
    </div>
  </div>
      <button @click="prev()" class="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12 mt-80 ml-44"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
    <div
      class="lg:w-1/2 lg:ml-4 mx-6 lg:mx-0 overflow-y-auto h-screen no-scrollbar"
    >
      <div class="flex">
        <div class="flex mt-4  w-3/4">
          <img class="w-20 h-24" :src="books.banner_desktop" alt="" />

          <div class="">
            <div class="text-gray-800">
              <router-link
                :to="`/romandetail/${books.id}/${books.slug}`"
                class="block lg:text-xl text-sm text-left ml-4 font-bold"
              >
                {{ books.name }}
              </router-link>
              <div class="flex">
                <p class="text-sm text-left ml-4">
                  {{ books.categories[0].category.name }}
                </p>
                <p v-if="books.categories[1]" class="text-sm text-left ml-4">
                  {{ books.categories[1].category.name }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p
          class="mb-2 text-xs flex font-semibold text-gray-600 lg:ml-44 mt-4 w-1/4"
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
          <spam class="mt-1 ml-1">{{ nbvuechapitreunique.length }}</spam>
        </p>
      </div>
      <hr class="border-b border-gray-300 my-4" />
      <h1 class="text-lg font-bold tracking-tight text-gray-700">
        Chapitre {{ chapitre.number }}
      </h1>
      <h1 class="lg:text-3xl text-sm font-bold tracking-tight text-gray-700">
        {{ chapitre.name }}
      </h1>

      <div
        class="text-base text-gray-700 mt-9 text-left"
        v-html="chapitre.contain"
      ></div>
      <div class="inline-flex md:hidden mt-9">
        <button
          @click="prev()"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          @click="next()"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <h3
        class="font-bold text-gray-700 lg:text-2xl text-xl mt-12 lg:text-left"
      >
        Qu'as-tu pensé du chapitre ?
      </h3>
      <div class="mt-9 bg-black h-22 rounded-lg">
        <div class="flex text-white mt-6 w-full">
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedok },
            ]"
          >
            <p>2</p>
            <p>BOF</p>
          </button>
          <button
            v-else
            @click="boh()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedok },
            ]"
          >
            <p>2</p>
            <p>BOF</p>
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClicked },
            ]"
          >
            <p>4</p>
            <p>OK</p>
          </button>
          <button
            v-else
            @click="ok()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClicked },
            ]"
          >
            <p>4</p>
            <p>OK</p>
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedbien },
            ]"
          >
            <p>6</p>
            <p>BIEN</p>
          </button>
          <button
            v-else
            @click="bien()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedbien },
            ]"
          >
            <p>6</p>
            <p>BIEN</p>
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedsuper },
            ]"
          >
            <p>8</p>
            <p>SUPER</p>
          </button>
          <button
            v-else
            @click="tessuper()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedsuper },
            ]"
          >
            <p>8</p>
            <p>SUPER</p>
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedcool },
            ]"
          >
            <p>10</p>
            <p>Cool</p>
          </button>
          <button
            v-else
            @click="tessuper1()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedcool },
            ]"
          >
            <p>10</p>
            <p>Cool</p>
          </button>
        </div>
      </div>
      <h3
        class="font-bold text-gray-700 lg:text-2xl text-xl mt-12 lg:text-left"
      >
        Quel est ton ressenti ?
      </h3>
      <div class="mt-9 bg-black h-16 rounded-lg">
        <div class="flex text-white mt-6 w-full">
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedaime },
            ]"
          >
            <img
              class="w-12 lg:mt-0 mt-4 lg:ml-16"
              src="../assets/aimer.png"
              alt=""
            />
          </button>
          <button
            v-else
            @click="recentir1()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedaime },
            ]"
          >
            <img
              class="w-12 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/aimer.png"
              alt=""
            />
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedcoeur },
            ]"
          >
            <img
              class="w-12 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/coeur.png"
              alt=""
            />
          </button>
          <button
            v-else
            @click="recentir2()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedcoeur },
            ]"
          >
            <img
              class="w-12 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/coeur.png"
              alt=""
            />
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedcools },
            ]"
          >
            <img
              class="w-9 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/shocked.svg"
              alt=""
            />
          </button>
          <button
            v-else
            @click="recentir3()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedcools },
            ]"
          >
            <img
              class="w-9 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/shocked.svg"
              alt=""
            />
          </button>
          <button
            v-if="this.profileID === '' || this.profileID === undefined"
            @click="showModalRepas = true"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedimpacient },
            ]"
          >
            <img
              class="w-9 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/impatient.svg"
              alt=""
            />
          </button>
          <button
            v-else
            @click="recentir4()"
            :class="[
              'items-center',
              'w-1/2',
              'transition',
              'duration-300',
              'hover:scale-105',
              'transform',
              { 'bg-green-500': buttonClickedimpacient },
            ]"
          >
            <img
              class="w-9 lg:mt-2 mt-4 lg:ml-16"
              src="../assets/impatient.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <div
        class="rounded-full p-1 box-border border border-orange-500 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full mt-2 flex items-center py-1"
      >
        <input
          type="text"
          class="rounded-full px-4 focus:outline-none w-full"
          v-model="addform.comment"
          placeholder="Votre commentaire ......."
        />
        <button
          v-if="this.profileID === '' || this.profileID === undefined"
          @click="showModalRepas = true"
          class="text-sm bg-green-600 py-2 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
        >
          <span v-if="isLoading">
            <spiner />
          </span>
          <span v-else> Envoyer</span>
        </button>
        <button
          v-else
          @click="comment()"
          class="text-sm bg-green-600 py-2 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
        >
          <span v-if="isLoading">
            <spiner />
          </span>
          <span v-else> Envoyer</span>
        </button>
      </div>
      <h2 class="font-semibold mt-6 lg:text-2xl text-xl lg:text-left">
        Commentaires
      </h2>

      <!-- Comment 1 -->
      <div
        v-for="(commentaire, index) in commentaires"
        :key="index"
        class="flex items-start mt-6"
      >
        <div v-if="commentaire.user_by.profile_photo_path === null">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            class="w-10 h-10 rounded-full mr-4"
          />
        </div>
        <div v-else>
          <img
            :src="commentaire.user_by.profile_photo_path"
            alt="User Avatar"
            class="w-10 h-10 rounded-full mr-4"
          />
        </div>
        <div class="flex">
          <div>
            <p class="text-gray-800 text-left">
              {{ commentaire.user_by.name }}
            </p>
            <p class="text-gray-600 text-sm text-left">
              {{ commentaire.comment }}
            </p>
          </div>
          <button
            v-if="commentaire.user_by.id === this.profileID"
            class="text-red-500 font-medium ml-9"
            @click="
              deleteCommentaireModal(commentaire.id, commentaire.user_by.id)
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 pr-2"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="lg:w-1/4 mt-4">
      <p class="text-gray-700 lg:text-2xl text-lg">Partager</p>
      <div class="lg:ml-36 flex lg:flex-col flex-row ml-20 mt-2 lg:mt-0">
        <a @click="shareOnTwitter"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="lg:h-12 lg:w-12 h-9 w-9"
            aria-hidden="true"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            ></path></svg
        ></a>
        <a @click="shareOnFacebook"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="lg:h-12 lg:w-12 h-9 w-9 lg:mt-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path></svg
        ></a>
        <a @click="shareOnWhatsApp" class="lg:mt-2">
          <svg
            style="color: rgb(82, 224, 31)"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="currentColor"
            
            class="bi bi-whatsapp lg:mt-2 mt-1 ml-2 h-9 w-9"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              fill="#52e01f"
            ></path>
          </svg>
        </a>
        <a @click="shareOnLinkedIn"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="lg:h-12 lg:w-12 h-7 w-7 mt-1 lg:mt-2 ml-2 lg:ml-0"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clip-rule="evenodd"
            ></path></svg
        ></a>
       

        <a
          href="https://www.tiktok.com/@afriplume?_t=8l1Agpe0ga5&_r=1"
          target="_blank"
          class="text-white hover:text-gray-400"
        >
          <img
            class="w-10 ml-1 text-white lg:mt-2"
            src="../assets/tiktok_3938055.png"
            alt=""
          />
        </a>

        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="lg:h-12 lg:w-12 h-7 w-7 lg:mt-2 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </a>
        <button class="hidden md:block" @click="next()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 mt-24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalRepas"
    @close-modal="showModalRepas = false"
  >
    <template #header>Se connecter</template>

    <template #body>
      <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>
      <form action="#" method="POST" @submit.prevent="login()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <!-- <div class="col-span-8 sm:col-span-8">
                  <div
                    class="flex items-center justify-center  dark:bg-gray-800"
                  >
                    <button
                      class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                    >
                      <img
                        class="w-6 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span class="text-gray-700">Se connecter avec Google</span>
                    </button>
                  </div>
                </div>-->
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mail" />
                  <div class="relative mt-1">
                    <BaseInput v-model="forms.email" class="mt-2 text-black" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mot de passe" />
                  <BaseInput
                    type="password"
                    id="language"
                    v-model="forms.password"
                    class="mt-2 text-black"
                  />
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="flex sm:items-start">
                    <div class="">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div class="ml-1 text-sm lg:flex">
                      <BaseLabel
                        for="remember"
                        class="text-sm whitespace-nowrap font-medium text-primary-normal dark:text-gray-300"
                        >Se souvenir de moi</BaseLabel
                      >

                      <div
                        @click="showModalMotdePasse = true"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 lg:ml-24"
                      >
                        Mot de passe oublie
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="sm:flex sm:items-start">
                    <div class="ml-1 text-sm">
                      <BaseLabel
                        for="remember"
                        class="text-sm font-medium text-primary-normal dark:text-gray-300 lg:ml-32"
                      >
                        Pas encore de compte</BaseLabel
                      >
                      <router-link
                        to="/auth/register"
                        class="font-sans text-blue-700 hover:underline dark:text-primary-500 lg:ml-36 mt-2"
                      >
                        Inscrivez vous ici</router-link
                      >
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
      <Button
        type="submit"
        class="bg-green-600 text-gray-700 px-4 mt-2 mb-2 py-2 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105 mx-auto block md:inline-block"
        @click="login()"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> Connexion</span>
      </Button>
    </template>
  </TheModal>
   <DeleteModalFooter
    width="w-full md:w-2/3 lg:w-1/2"
    :is-open="showDeleteRepasModal"
    @cancel="showDeleteRepasModal = !showDeleteRepasModal"
    @delete="commentaireDelete()"
  >
    <template #header>Supprimer</template>
    <template #body> Vous voulez suppprimer ce commentaire </template>
  </DeleteModalFooter>
</template>

<script>
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
import spiner from "../components/spiner.vue";
import DeleteModalFooter from "../components/DeleteModalFooter.vue";
import TheModal from "../components/TheModal.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseLabel from "../components/BaseLabel.vue";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
import AlertComponent from "../components/AlertComponent.vue";
export default {
  name: "App",
  components: {
    spiner,
    BaseLabel,
    BaseInput,
    TheModal,
    AlertComponent,
    DeleteModalFooter
  },
  data() {
    return {
      buttonClicked: false,
      buttonClickedok: false,
      buttonClickedbien: false,
      buttonClickedsuper: false,
      buttonClickedcool: false,
      buttonClickedimpacient: false,
      buttonClickedcools: false,
      buttonClickedcoeur: false,
      buttonClickedaime: false,
      showDeleteRepasModal: false,
      addform: {
        comment: "",
        book_id: "",
        chapter_id: "",
        user_id: "",
        type_think_id: "",
        nbr_rate: 0,
      },
      form: {
        book_id: "",
        user_id: "",
      },
      forms: {
        //name: "",
        email: "",
        password: "",
        // role_id: "3",
        // local: null,
      },
      formadd: {
        book_id: "",
        user_id: "",
        chapter_id: "",
      },
      formsub: {
        autor_id: "",
      },
      showAlert: false,
      alert: {
        message: "",
      },
      books: [],
      commentaires: [],
      number: "",
      index: 0,
      nbvue: [],
      chapitre: null,
      deleteCommentaireID: "",
      userID: "",
      profileID: "",
      isLoading: false,
      author_id: "",
      nbvuechapitre: [],
      filteredNombrChapitres: [],
      subscrption: [],
      userNote: [],
      userThink: [],
      filteredUserAbone: false,
      showModalRepas: false,
      nbvuechapitreunique: [],
    };
  },
  mounted() {
    this.number = this.$route.params.index;
  },
  created() {
    this.profile();
    this.book();
    this.commentaire();
    //this.vue();
    this.vuechapitre();
    //this.vuechapitres();
    //this.Getsubcript();
    //this.Getnote();
  },
  methods: {
    async login() {
      try {
        this.isLoading = true;
        const response = await axios.post("/api/auth/login", this.forms);
        if (response.status === 200) {
          TokenService.saveToken(response.data.access_token);
          ApiService.setHeader();
          this.showModalRepas = false;
          this.isLoading = false;
          this.profile();
          //this.profile();
          //this.role();
        }
      } catch (error) {
        this.isLoading = false;
        // Gestion des erreurs HTTP
        if (error.response && error.response.status === 422) {
          this.showAlert = true;
          this.alert.message = "Adresse e-mail ou mot de passe incorrect.";
        } else {
          this.showAlert = true;
          this.alert.message =
            "Quelque chose s'est mal passé. Merci d'essayer plus tard.";
        }

        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      }
    },
    deleteCommentaireModal(commentaireId, userId) {
      this.deleteCommentaireID = commentaireId;
      this.userID = userId;
      this.showDeleteRepasModal = !this.showDeleteRepasModal;
      
    },
    async commentaireDelete() {
      if (this.userID === this.profileID) {
        try {
          const response = await axios.delete(
            `/api/comments/${this.deleteCommentaireID}`
          );
          if (response.status === 204) {
            this.showDeleteRepasModal = false;
            this.commentaire();
          } else {
            // Gérer les cas d'erreur ou de réponse incorrecte
            console.error("Erreur lors de la suppression du commentaire");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression du commentaire:", error);
        }
      } else {
        alert("L'utilisateur n'est pas autorisé à supprimer ce commentaire.");
      }
    },
    async book() {
      try {
        const response = await axios.get(`/api/books/${this.$route.params.id}`);
        if (response.data) {
          this.books = response.data.data;
          this.chapitres = this.books.chapters;
          this.index = this.$route.params.index;
          this.author_id = response.data.data.user.id;
          this.chapitre = this.chapitres[this.index];
          //this.nbrlire();
          this.Chapitrenbrlire();
          this.commentaire();
          this.Getsubcript(this.author_id);
          this.vuechapitres(this.chapitre.id);
          console.log(this.chapitre.id);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async vue() {
      try {
        //const book_id = this.$route.params.id;

        const response = await axios.get(
          `/api/readings?book_id=${this.$route.params.id}`
        );
        if (response.data) {
          this.nbvue = response.data.data;
          console.log(this.nbvue);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async vuechapitre() {
      try {
        //const book_id = this.$route.params.id;

        const response = await axios.get(
          `/api/chapter-reads?book_id=${this.$route.params.id}`
        );
        if (response.data) {
          this.nbvuechapitre = response.data.data;

          console.log(this.nbvuechapitre);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async vuechapitres(id) {
      try {
        //const book_id = this.$route.params.id;

        const response = await axios.get(`/api/chapterreads?chapter_id=${id}`);
        if (response.data) {
          this.nbvuechapitreunique = response.data.data;

          console.log(this.nbvuechapitreunique);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async nbrlire() {
      try {
        //this.isLoading = true;
        this.form.book_id = this.$route.params.id;
        this.form.user_id = this.profileID;
        const response = await axios.post(`/api/readings`, this.form);
        if (response.status == 200) {
          this.form = {};
          this.vue();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async Chapitrenbrlire() {
      try {
        //this.isLoading = true;
        this.formadd.book_id = this.$route.params.id;
        this.formadd.user_id = this.profileID;
        this.formadd.chapter_id = this.chapitre.id;
        const response = await axios.post(`/api/chapter-reads`, this.formadd);
        if (response.status == 201 || response.status == 200) {
          this.formadd = {};
          this.vuechapitres(this.chapitre.id);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async commentaire() {
      try {
        //const book_id = this.$route.params.id;

        const response = await axios.get(
          `/api/comments?chapter_id=${this.chapitre.id}`
        );
        if (response.data) {
          this.commentaires = response.data.data;
          //this.commentaires = this.books.chapters;
          this.index = this.$route.params.index;
          this.chapitre = this.chapitres[this.index];
          console.log(this.number);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async Getcommentaire(id) {
      try {
        const response = await axios.get(`/api/comments?chapter_id=${id}`);
        if (response.data) {
          this.commentaires = response.data.data;
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async prev() {
      this.index = parseInt(this.index, 10) - 1;
      console.log(this.index);
      this.chapitre = this.chapitres[this.index];
      this.Chapitrenbrlire();
      this.Getcommentaire(this.chapitre.id);
      (this.buttonClicked = false),
        (this.buttonClickedok = false),
        (this.buttonClickedbien = false),
        (this.buttonClickedsuper = false),
        (this.buttonClickedcool = false),
        (this.buttonClickedimpacient = false),
        (this.buttonClickedcools = false),
        (this.buttonClickedcoeur = false),
        (this.buttonClickedaime = false),
        this.profile();
      const currentUrl = window.location.href;
      const urlParts = currentUrl.split("/");
      const currentIndex = parseInt(urlParts[urlParts.length - 1], 10);
      const newIndex = currentIndex - 1;
      urlParts[urlParts.length - 1] = newIndex.toString();
      const newUrl = urlParts.join("/");
      window.history.pushState({ path: newUrl }, "", newUrl);

      window.scrollTo(0, 0);

      const scrollableDiv = document.querySelector(".overflow-y-auto");
      if (scrollableDiv) {
        scrollableDiv.scrollTop = 0;
      }
    },
    async next() {
      this.index = parseInt(this.index, 10) + 1;
      console.log(this.index);
      this.chapitre = this.chapitres[this.index];
      this.Chapitrenbrlire();
      this.Getcommentaire(this.chapitre.id);
      (this.buttonClicked = false),
        (this.buttonClickedok = false),
        (this.buttonClickedbien = false),
        (this.buttonClickedsuper = false),
        (this.buttonClickedcool = false),
        (this.buttonClickedimpacient = false),
        (this.buttonClickedcools = false),
        (this.buttonClickedcoeur = false),
        (this.buttonClickedaime = false),
        this.profile();
      const currentUrl = window.location.href;
      const urlParts = currentUrl.split("/");
      const currentIndex = parseInt(urlParts[urlParts.length - 1], 10);
      const newIndex = currentIndex + 1;
      urlParts[urlParts.length - 1] = newIndex.toString();
      const newUrl = urlParts.join("/");
      window.history.pushState({ path: newUrl }, "", newUrl);

      window.scrollTo(0, 0);

      const scrollableDiv = document.querySelector(".overflow-y-auto");
      if (scrollableDiv) {
        scrollableDiv.scrollTop = 0;
      }
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.profileID = response.data.data.id;
          this.addform.user_id = response.data.data.id;
          this.Getnote(this.profileID);
          this.Getthink(this.profileID);
          console.log(this.addform.user_id);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async comment() {
      try {
        this.isLoading = true;
        this.addform.book_id = this.$route.params.id;
        //this.addform.chapter_id =
        //this.books.chapters[this.$route.params.index].id;
        this.addform.chapter_id = this.chapitre.id;
        const response = await axios.post(`/api/comments`, this.addform);
        if (response.status == 201) {
          this.addform = {};
          //this.commentaire();
          this.Getcommentaire(this.chapitre.id);
          this.isLoading = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre commentaire à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async subcript() {
      try {
        this.isLoading = true;
        this.formsub.autor_id = this.author_id;
        const response = await axios.post(`/api/subscribers`, this.formsub);
        if (response.status == 201) {
          this.formsub = {};
          //this.commentaire();
          this.Getsubcript(this.author_id);
          this.isLoading = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Vous êtes bien abonné à l'auteur.",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error.data);
      }
    },
    async Getsubcript(authorID) {
      try {
        //this.formsub.autor_id = this.author_id;
        const response = await axios.get(
          `/api/subscribers?autor_id=${authorID}`
        );
        if (response.status == 200) {
          this.subscrption = response.data.data;
          const profileInFilteredAbone = this.subscrption.some(
            (abonne) => abonne.user_id === this.profileID
          );
          console.log(this.profileID);
          if (profileInFilteredAbone) {
            this.filteredUserAbone = true;
            console.log(this.filteredUserAbone);
          } else {
            this.filteredUserAbone = false;
          }
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error.data);
      }
    },
    async Getnote(connetID) {
      try {
        //this.formsub.autor_id = this.author_id;
        const response = await axios.get(`/api/user-notes?user_id=${connetID}`);
        if (response.status == 200) {
          this.userNote = response.data.data;
          const filteredNotes = this.userNote.filter(
            (note) => note.chapter_id === this.chapitre.id
          );

          console.log(filteredNotes[0].nbr_rate);
          if (filteredNotes[0].nbr_rate === 2) {
            this.buttonClickedok = true;
          }
          if (filteredNotes[0].nbr_rate === 4) {
            this.buttonClicked = true;
          }
          if (filteredNotes[0].nbr_rate === 6) {
            this.buttonClickedbien = true;
          }
          if (filteredNotes[0].nbr_rate === 8) {
            this.buttonClickedsuper = true;
          }
          if (filteredNotes[0].nbr_rate === 10) {
            this.buttonClickedcool = true;
          }
          console.log(this.userNote);
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error.data);
      }
    },
    async Getthink(conneID) {
      try {
        //this.formsub.autor_id = this.author_id;
        const response = await axios.get(`/api/user-thinks?user_id=${conneID}`);
        if (response.status == 200) {
          this.userThink = response.data.data;
          const filteredThinks = this.userThink.filter(
            (think) => think.chapter.id === this.chapitre.id
          );

          console.log(filteredThinks[0].type_think.id);
          if (filteredThinks[0].type_think.id === 1) {
            this.buttonClickedimpacient = true;
          }
          if (filteredThinks[0].type_think.id === 2) {
            this.buttonClickedcools = true;
          }
          if (filteredThinks[0].type_think.id === 3) {
            this.buttonClickedcoeur = true;
          }
          if (filteredThinks[0].type_think.id === 5) {
            this.buttonClickedsuper = true;
          }
        }
      } catch (error) {
        this.isLoading = false;
        console.log(error.data);
      }
    },
    async boh() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.nbr_rate = 2;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.buttonClickedok = true;
          this.Getnote();
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre notes à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async ok() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.nbr_rate = 4;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
          this.Getnote();
          this.buttonClicked = true; // Définir la propriété buttonClicked à true après avoir cliqué sur le bouton
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre note a été envoyée avec succès",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async bien() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.nbr_rate = 6;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
          this.Getnote();
          this.buttonClickedbien = true;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre notes à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async tessuper() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.nbr_rate = 8;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
          this.Getnote();
          this.buttonClickedsuper = true;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre notes à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async tessuper1() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.nbr_rate = 10;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
          this.buttonClickedcool = true;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre notes à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async recentir1() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.type_think_id = 5;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
          this.buttonClickedaime = true;
          this.addform = {};
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre ressenti à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async recentir2() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.type_think_id = 3;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
          this.buttonClickedcoeur = true;
          this.addform = {};
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre ressenti à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async recentir3() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.type_think_id = 2;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
          this.buttonClickedcools = true;
          this.addform = {};
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre ressenti à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async recentir4() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id = this.chapitre.id;
        this.addform.type_think_id = 1;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
          this.buttonClickedimpacient = true;
          this.addform = {};
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre ressenti à été envoyer avec succés",
            timeout: 5000,
          }).show();
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    shareOnFacebook() {
      const urlToShare = window.location.href; // L'URL actuelle de la page
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        urlToShare
      )}`;
      window.open(facebookShareUrl, "_blank", "width=600,height=400");
    },
    shareOnWhatsApp() {
      const urlToShare = window.location.href; // L'URL actuelle de la page
      const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        urlToShare
      )}`;
      window.open(whatsappShareUrl, "_blank");
    },
    shareOnInstagram() {
      const urlToShare = window.location.href; // L'URL actuelle de la page
      const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(
        urlToShare
      )}`;
      window.open(instagramShareUrl, "_blank");
    },

    shareOnTwitter() {
      const urlToShare = window.location.href; // L'URL actuelle de la page
      const textToShare = "Découvrez ce contenu incroyable :"; // Le texte que vous souhaitez partager
      const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        urlToShare
      )}&text=${encodeURIComponent(textToShare)}`;
      window.open(twitterShareUrl, "_blank", "width=600,height=400");
    },
    shareOnLinkedIn() {
      const urlToShare = window.location.href; // L'URL actuelle de la page
      const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        urlToShare
      )}`;
      window.open(linkedInShareUrl, "_blank");
    },
  },
};
</script>
<style scoped>
.custom-background {
  background-image: url("~@/assets/background.jpg");
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
.no-select {
  user-select: none; /* Désactive la sélection de texte pour l'élément */
  -webkit-user-select: none; /* Pour la compatibilité avec les navigateurs WebKit */
  -moz-user-select: none; /* Pour la compatibilité avec les navigateurs Gecko */
  -ms-user-select: none; /* Pour la compatibilité avec les navigateurs Microsoft */
}
.no-scrollbar {
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.router-link-active img {
  display: block;
  margin: 0 auto; /* Centrer horizontalement */
}
/* Masquer la barre de défilement dans Internet Explorer et Edge */
.no-scrollbar {
  -ms-overflow-style: none;
}
</style>
