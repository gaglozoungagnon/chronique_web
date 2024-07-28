<template>
  <nav
    class="bg-black text-white shadow-xl mx-auto md:flex md:justify-between md:items-center"
  >
    <div class="flex justify-between py-4 shadow-xl">
      <router-link @click="toggle" class="flex items-center" to="/home">
        <img
          src="../assets/AP.png"
          alt=""
          class="lg:w-full h-12 lg:ml-9 ml-4 w-32"
        />
      </router-link>
      <div @click="isOpen = !isOpen" class="flex md:hidden mr-6">
        <button
          type="button"
          class="text-blue-500 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="isOpen ? 'flex' : 'hidden'"
      class="w-52 absolute z-20 bg-gray-700 top-20 ml-44"
    >
      <div class="">
        <button @click="toggleMobile" class="p-2 text-white text-xl font-bold">
          &#9747;
        </button>
      </div>

      <ul class="list-none text-white">
        <li class="my-4">
          <div class="relative inline-block text-left">
            <button
              @click="toggleDropdown"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              Parcourir

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-2 -mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              v-if="isDropdownOpen"
              id="dropdown-menu"
              class="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div
                class="py-2 p-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
              >
                <div
                  class="py-2 flex"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                >
                  <div
                    v-for="(groupe, index) in groupesCategories"
                    :key="index"
                  >
                    <router-link
                      @click="isOpen = !isOpen"
                      v-for="(category, categoryIndex) in groupe"
                      :key="categoryIndex"
                      class="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                      role="menuitem"
                      :to="`/bibliotheque/${category.id}`"
                    >
                      {{ category.name }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="my-4 mr-4">
          <router-link
            @click="toggleMobile"
            class="text-white hover:text-gray-700 transition duration-300 whitespace-nowrap"
            to="/lecture"
            >Liste de lecture</router-link
          >
        </li>
        <li class="my-4 mr-4">
          <router-link
            @click="toggleMobile"
            class="text-white hover:text-gray-700 transition duration-300"
            to="/ecrire"
            >Écrire</router-link
          >
        </li>
        <li class="my-4">
          <router-link
            @click="toggleMobile"
            class="text-white hover:text-gray-700 transition duration-300"
            to="/parametre"
          >
            <span class="material-icons-outlined"> Paramètre </span>
          </router-link>
        </li>
        <li class="my-4">
          <router-link
            @click="toggleMobile"
            class="text-white hover:text-gray-700 transition duration-300"
            to="/notification"
          >
            <span class="material-icons-outlined"> Notification </span>
          </router-link>
        </li>
        <li class="my-4">
          <div
            v-if="this.user === ''"
            class="text-white border border-gray-300 whitespace-nowrap rounded-full py-1 px-4 hover:bg-white hover:text-gray-900 transition duration-300 inline"
            @click="conect()"
          >
            Se connecter
          </div>
          <div v-else>
            <div class="relative" @click="toggleDropdowns">
              <h2>Profil</h2>

              <!-- Dropdown menu -->
              <div
                v-show="isDropdownOpenPrfile"
                class="absolute right-0 z-10 mt-4 origin-top-right rounded-md bg-gray-800 w-48 py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-white font-bold"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >{{ this.name }}</a
                >
                <h1 class="text-xl font-bold border border-white mt-4"></h1>
                <router-link
                  class="block px-4 py-2 flex text-sm text-white font-bold ml-9 mt-2"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  to="/profils"
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span class="ml-2">Profils</span></router-link
                >
                <button
                  @click="logout()"
                  class="block px-4 py-2 flex text-sm text-white font-bold ml-9 mt-2"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
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
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>

                  <span class="ml-2">Déconnexion</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="flex-col mt-8 px-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 hidden md:block"
    >
      <div class="flex items-center space-x-4">
        <!--  <router-link
        @click="toggleDropdown"
          class="text-white hover:text-gray-700 transition duration-300"
          to="/bibliotheque"
          >Bibliothéque
        </router-link> 
        <router-link
          @click="toggle"
          class="text-white hover:text-gray-700 transition duration-300 whitespace-nowrap"
          to="/auteurs"
          >Nos auteurs
        </router-link>-->

        <div class="relative inline-block text-left">
          <button
            @click="toggleDropdown"
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Parcourir

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            v-if="isDropdownOpen"
            id="dropdown-menu"
            class="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div
              class="py-2 p-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-button"
            >
              <div
                class="py-2 flex"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
              >
                <div v-for="(groupe, index) in groupesCategories" :key="index">
                  <router-link
                    @click="toggle"
                    v-for="(category, categoryIndex) in groupe"
                    :key="categoryIndex"
                    class="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                    role="menuitem"
                    :to="`/bibliotheque/${category.id}`"
                  >
                    {{ category.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="rounded-full text-gray-900 p-1 border border-gray-300 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center py-1"
        >
          <input
            type="text" 
      v-model="searchQuery" 
      @input="updateSearchQuery" 
            class="rounded-full px-4 focus:outline-none w-full bg-white text-gray-900"
            placeholder="Recherche ......."
          />
          <button
            class="text-sm bg-white border border-gray-300 text-gray-900 py-2 px-6 rounded-full poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
          >
            Recherche
          </button>
        </div>
      </div>

      <div class="flex items-center mr-4 space-x-4">
        <router-link
          @click="toggle"
          class="text-white hover:text-gray-700 transition duration-300 whitespace-nowrap"
          to="/lecture"
          >Liste de lecture</router-link
        >
        <router-link
          @click="toggle"
          class="text-white hover:text-gray-700 transition duration-300"
          to="/ecrire"
          >Écrire</router-link
        >
        <router-link
          class="text-white hover:text-gray-700 transition duration-300"
          @click="toggle"
          to="/parametre"
        >
          <span class="material-icons-outlined"
            ><svg
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
          </span>
        </router-link>
        <router-link
          @click="toggle"
          class="text-white hover:text-gray-700 transition duration-300"
          to="/notification"
        >
          <span class="material-icons-outlined">
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </span>
        </router-link>
        <div
          v-if="this.user === ''"
          class="text-white border border-gray-300 whitespace-nowrap rounded-full py-1 px-4 hover:bg-white hover:text-gray-900 transition duration-300 inline"
          @click="showModalRepas = true"
        >
          Se connecter
        </div>
        <div v-else>
          <div class="relative" @click="toggleDropdowns">
            <div v-if="path_url === null">
              <button
                type="button"
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-12 w-12 rounded-full"
                  src="../assets/download.png"
                  alt=""
                />
              </button>
            </div>
            <div v-else>
              <button
                type="button"
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="h-12 w-12 rounded-full" :src="path_url" alt="" />
              </button>
            </div>

            <!-- Dropdown menu -->
            <div
              v-show="isDropdownOpenPrfile"
              class="absolute right-0 z-10 mt-4 origin-top-right rounded-md bg-gray-800 w-48 py-1 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-white font-bold"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >{{ this.name }}</a
              >
              <h1 class="text-xl font-bold border border-white mt-4"></h1>
              <router-link
                class="block px-4 py-2 flex text-sm text-white font-bold ml-9 mt-2"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                to="/profils"
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
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span class="ml-2">Profils</span></router-link
              >
              <button
                @click="logout()"
                class="block px-4 py-2 flex text-sm text-white font-bold ml-9 mt-2"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
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
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>

                <span class="ml-2">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
                    <BaseInput v-model="form.email" class="mt-2 text-black" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mot de passe" />
                  <div class="relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="block w-full p-2 text-gray-500 border border-input-disable rounded-md focus:outline-none focus:ring-primary-normal focus:ring focus:ring-opacity-50 shadow-sm focus:border"
                      v-model="form.password"
                      required
                    />
                    <button
                      type="button"
                      @click="togglePasswordVisibility"
                      class="absolute inset-y-0 right-0 px-3 flex items-center"
                    >
                      <svg
                        v-if="showPassword"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10 3a7 7 0 015.464 2.536A7 7 0 0118 10a7 7 0 01-2.536 5.464A7 7 0 0110 18a7 7 0 01-5.464-2.536A7 7 0 012 10a7 7 0 012.536-5.464A7 7 0 0110 3zm0 2a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                        />
                      </svg>
                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex col-span-8 sm:col-span-8">
                  <div class="flex sm:items-start">
                    <div class="">
                      <input
                        name="remember"
                        id="remember"
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
        class="bg-blue-600 text-gray-700 px-4 mt-2 mb-2 py-2 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105 mx-auto block md:inline-block"
        @click="login()"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> Connexion</span>
      </Button>
    </template>
  </TheModal>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalMotdePasse"
    @close-modal="showModalMotdePasse = false"
  >
    <template #header>Mot de passe oublier</template>

    <template #body>
      <div v-show="showAlert">
        <AlertComponent :content="alert.message" type-alert="error" />
      </div>
      <form action="#" method="POST" @submit.prevent="motdepasse()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Mail" />
                  <div class="relative mt-1">
                    <BaseInput
                      v-model="addform.email"
                      class="mt-2 text-black"
                    />
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
        class="bg-green-600 text-gray-700 px-4 mt-2 mb-2 py-2 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
        @click="motdepasse()"
      >
        <span v-if="isLoading">
          <spiner />
        </span>
        <span v-else> Envoyer</span>
      </Button>
    </template>
  </TheModal>
</template>

<script>
import axios from "axios";
import TheModal from "./TheModal.vue";
import BaseInput from "./BaseInput.vue";
import BaseLabel from "./BaseLabel.vue";
//import AddModalFooter from "./AddModalFooter.vue";
import AlertComponent from "../components/AlertComponent.vue";
import TokenService from "../services/storage.service";
import ApiService from "../services/api.service";
import { mapState, mapActions, mapGetters } from "vuex";
import spiner from "../components/spiner.vue";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
export default {
  name: "Navbar",
  components: {
    BaseLabel,
    BaseInput,
    TheModal,
    spiner,
    AlertComponent,
    //AddModalFooter,
  },
  data() {
    return {
      form: {
        //name: "",
        email: "",
        password: "",
        // role_id: "3",
        // local: null,
      },
      addform: {
        email: "",
      },
      showAlert: false,
      alert: {
        message: "",
      },
      user: "",
      name: "",
      path_url: "",
      donne: [],
      isDropdownOpen: false,
      isOpen: false,
      isDropdownOpenPrfile: false,
      showModalRepas: false,
      showModalMotdePasse: false,
      categoriesParGroupe: 4,
      isLoading: false,
      showPassword: false,
    };
  },
  created() {
    this.fetchCategories();
    this.profile();
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
       ...mapGetters(['getSearchQuery']),
    searchQuery: {
      get() {
        return this.getSearchQuery;
      },
      set(value) {
        this.updateSearchQuery(value);
      }
    }
    }),
    groupesCategories() {
      const groupes = [];
      for (
        let i = 0;
        i < this.categories.length;
        i += this.categoriesParGroupe
      ) {
        groupes.push(this.categories.slice(i, i + this.categoriesParGroupe));
      }
      return groupes;
    },
  },
  methods: {
     ...mapActions(['updateSearchQuery']),
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async fetchCategories() {
      this.$store.dispatch("categories/fetchCategories");
    },
    toggleDropdowns() {
      this.isDropdownOpenPrfile = !this.isDropdownOpenPrfile;
      this.isDropdownOpen = false;
    },
    conect() {
      this.showModalRepas = true;
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isDropdownOpenPrfile = false;
    },
    toggle() {
      this.isDropdownOpen = false;
      this.isDropdownOpenPrfile = false;
    },
    toggleMobile() {
      this.isOpen = false;
      this.isDropdownOpenPrfile = false;
      this.isDropdownOpen = false;
    },
    async logout() {
      try {
        const response = await axios.get("/api/logout");
        if (response.status === 204) {
          TokenService.removeToken();
          this.user = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    async login() {
      try {
        this.isLoading = true;
        const response = await axios.post("/api/auth/login", this.form);
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
    async motdepasse() {
      try {
        this.isLoading = true;
        const response = await axios.post(
          "/api/auth/password/email",
          this.addform
        );
        if (response.status === 200) {
          this.isLoading = false;
          this.showModalMotdePasse = false;
          new Noty({
            type: "success",
            layout: "topRight",
            text: "Votre demande a été reçue, veuillez vérifier votre boîte mail.",
            timeout: 5000,
          }).show();
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
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.donne = response.data.data;
          this.name = response.data.data.name;
          this.user = response.data.data.id;
          this.path_url = response.data.data.profile_photo_path;
          console.log(response.data.data.name);
          console.log(this.path_url);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
  },
};
</script>
<style>
#dropdown-menu {
  z-index: 100;
}
</style>
