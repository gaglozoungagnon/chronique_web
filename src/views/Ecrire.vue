<template>
  <div class="bg-white h-full">
    <div class="custom-background h-96">
      <div class="">
        <p
          class="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100"
        >
          Afriplume, plongez dans l’âme de l’Afrique à travers des mots vibrants
          et des récits authentiques.
        </p>
      </div>
      <div class="mt-9">
        <router-link class="text-gray-700 rounded-lg bg-green-500 px-8 py-2 text-xl" to="/histoiredash">
       
          J'écris une histoire
       
        </router-link>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">
      POURQUOI PUBLIER SUR AFRIPLUME ?
    </h3>
    <div>
      <div class="flex mt-4 mr-24 ml-24 mt-6">
        <div
          class="bg-blue-500 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative ml-4 w-1/3"
        >
          <img
            class="w-full h-72 transform transition duration-300 hover:scale-105"
            src="../assets/bussiness.jpg"
            alt=""
          />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-black poppins text-2xl">Visibilité</h1>
            <p class="text-white poppins text-sm text-center">
              Afriplume offre une plateforme de publication qui atteint un
              public diversifié à travers tout le continent africain, offrant
              une visibilité inégalée pour les auteurs.
            </p>
          </div>
        </div>
        <div
          class="bg-blue-500 ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/3"
        >
          <img
            class="w-full h-72 transform transition duration-300 hover:scale-105"
            src="../assets/customer.jpg"
            alt=""
          />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-black poppins text-2xl">Interaction</h1>
            <p class="text-white poppins text-sm text-center">
              Sur Afriplume, vous pouvez recevoir des commentaires, des
              réactions et des notes sur vos chapitres. Cela vous permet de
              bénéficier de retours constructifs et de vous connecter aisément
              avec votre communauté.
            </p>
          </div>
        </div>
        <div
          class="bg-blue-500 ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/3"
        >
          <img
            class="w-full h-72 transform transition duration-300 hover:scale-105"
            src="../assets/copyright.jpg"
            alt=""
          />
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-black poppins text-2xl">Droit d’auteur</h1>
            <p class="text-white poppins text-sm text-center">
              Nous accordons une grande importance à la protection des droits
              d’auteur. En publiant sur Afriplume, vous pouvez être sûr que
              votre livre est sécurisé et que vous bénéficiez de la
              reconnaissance que vous méritez
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-white">
      <div class="mt-4 mr-24 ml-24 mt-9">
        <div
          class="bg-blue-700 w-full flex transition transform duration-700 p-4 rounded-lg relative ml-4 w-1/3 h-80 mr-24"
        >
          <img
            class=" transform transition  duration-300 hover:scale-105"
            src="../assets/ethnic-employee-pressing-button.jpg"
            alt=""
          />
          <div class="items-center my-3 w-1/2 space-y-2 mt-12">
            <div class="flex">
              <h1 class="ml-9 text-white poppins text-3xl mt-1">
                Concours d'ecriture
              </h1>
            </div>
            <div class="flex ml-9">
              <h1 class=" text-white poppins text-xl text-left mt-2">
                Découvrez nos concours lucratifs et éclairez votre chemin vers
                la célébrité littéraire, votre plume est votre guide
              </h1>
            </div>
            <div class="flex ml-9 mt-2">
               <router-link  to="/concours">
              <button
                class="text-gray-700 rounded-lg bg-yellow-500 px-8 py-2 text-xl mt-2"
              >
                En savoir plus
              </button> </router-link>
            </div>
          </div>
        </div>

        <div class="h-6"></div>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">
      Quelques chiffres clefs
    </h3>
    <div>
      <div class="flex mt-4 mr-24 ml-24 mt-6">
        <div
          class="bg-black ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">80K</h1>
            <p class="text-white text-xl text-center">Utilisateurs</p>
          </div>
        </div>
        <div
          class="bg-black ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">2M</h1>
            <p class="text-white text-xl text-center">Chapitre lu</p>
          </div>
        </div>
        <div
          class="bg-black ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">30M</h1>
            <p class="text-white text-xl text-center">Membres actifs</p>
          </div>
        </div>

        <div
          class="bg-black ml-4 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-full relative w-1/4"
        >
          <div class="flex flex-col items-center my-3 space-y-2">
            <h1 class="text-green-700 font-bold text-4xl">3K</h1>
            <p class="text-white text-xl text-center">Auteurs</p>
          </div>
        </div>
      </div>
    </div>
     <div class="bg-white">
      <div class="mt-4 mr-24 ml-24 mt-9">
        <div
          class="bg-blue-700 w-full flex transition transform duration-700 p-4 rounded-lg relative ml-4 w-1/3 h-80 mr-24"
        >
          <img
            class=" transform transition  duration-300 hover:scale-105"
            src="../assets/aerial-view-woman-using-retro-typewriter.jpg"
            alt=""
          />
          <div class="items-center my-3 w-1/2 space-y-2 mt-12">
            <div class="flex">
              <h1 class="ml-9 text-white poppins text-3xl mt-1">
                Decouvrir notre blog
              </h1>
            </div>
            <div class="flex ml-9">
              <h1 class=" text-white poppins text-xl text-left mt-2">
                Découvrez nos concours lucratifs et éclairez votre chemin vers
                la célébrité littéraire, votre plume est votre guide
              </h1>
            </div>
            <div class="flex ml-9 mt-2">
               <router-link  to="/concours">
              <button
                class="text-gray-700 rounded-lg bg-yellow-500 px-8 py-2 text-xl mt-2"
              >
                Aller aux blog
              </button> </router-link>
            </div>
          </div>
        </div>

        <div class="h-6"></div>
      </div>
    </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">Paroles d’Auteurs</h3>
    <div class="grid gap-2 lg:grid-cols-3 mx-9 mt-6 ">
        <div class="max-w-md p-4 border border-white rounded-3xl shadow-lg">
          <div>
            <p class="mt-2 text-gray-700 text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div class="flex mt-4">
            <div class="justify-start">
              <img
                class="object-cover w-16 h-16 border-2 border-green-500 rounded-full"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            
              <a href="#" class="text-xl font-medium text-gray-700 mt-4 text-left ml-6"
                >John Doe <br> <spam class="text-sm ">Eleve Tle Scientifique</spam></a
              >
            
          </div>
        </div>
        <div class="max-w-md p-4 border border-white rounded-lg shadow-lg">
          
          <div>
            <p class="mt-2 text-gray-700 text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
         <div class="flex mt-4">
            <div class="justify-start">
              <img
              class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg"
            />
            </div>
            
              <a href="#" class="text-xl font-medium text-gray-700 mt-4 text-left ml-6"
                >John Doe <br> <spam class="text-sm ">Eleve Tle Scientifique</spam></a
              >
            
          </div>
        </div>
        <div class="max-w-md p-4 border border-white rounded-lg shadow-lg">
          
          <div>
            <p class="mt-2 text-gray-700 text-sm text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div class="flex mt-4">
            <div class="justify-start">
               <img
              class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
            />
            </div>
            
              <a href="#" class="text-xl font-medium text-gray-700 mt-4 text-left ml-6"
                >John Doe <br> <spam class="text-sm ">Eleve Tle Scientifique</spam></a
              >
            
          </div>
        </div>
      </div>
    <h3 class="font-bold text-gray-700 text-2xl mt-12">
      Sur Afriplume chaque page à une histoire unique.
    </h3>

    <div class="mt-9">
      <router-link class="text-gray-700 rounded-lg bg-green-500 px-8 py-2 text-xl" to="/histoiredash">
        J'écris une histoire
      </router-link>
    </div>
    <div class="h-6"></div>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
  
<style scoped>
.custom-background {
  background-image: url("~@/assets/write-neopload-banner.jpeg");
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
  