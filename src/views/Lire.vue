<template>
  <div class="bg-white sm:py-9 lg:px-8 flex">
    <div class="w-1/4">
      <div class="h-36 mt-60">
        <div class="relative">
          <img
            class="w-full h-24 transform transition duration-300 hover:scale-105 relative"
            src="../assets/OF18NR0.jpg"
            alt=""
          />
          <a href="#" v-if="books.user.profile_photo_path ===null" class="flex items-center justify-center">
            <img
              class="absolute top-12 w-24 h-24 rounded-full border-2 border-white"
              src="../assets/download.png"
              alt=""
            />
          </a>
           <a href="#" v-else class="flex items-center justify-center">
            <img
              class="absolute top-12 w-24 h-24 rounded-full border-2 border-white"
              :src="books.user.profile_photo_path"
              alt=""
            />
          </a>
          <p class="text-black mt-16 mr-6 text-2xl font-bold">{{
                    books.authors
                  }}</p>
          <div class="flex">
            <div class="h-12 rounded-lg mt-4 ml-24">
              <label class="inline-flex items-center">
                <button
                  class="bg-green-500 text-white flex px-6 py-2 ml-6 focus:outline-none poppins rounded-lg transform transition duration-300 hover:scale-105"
                >
                  Suivre
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
      <button @click="prev()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-12 mt-64 ml-44"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg></button>
    </div>
    <div class="text-center w-1/2 ml-4">
      <div class="flex">
        <div class="flex mt-4">
          <img class="w-12" :src="books.banner_desktop" alt="" />

          <div class="my-3 space-y-2">
            <div class="text-gray-800">
              <p class="text-gray-800 text-xl text-left ml-4 font-bold">
                {{ books.name }}
              </p>
              <p class="text-sm text-left ml-4">{{ books.category.name }}</p>
            </div>
          </div>
        </div>
        <p class="mb-2 text-xs flex font-semibold text-gray-600 ml-auto mt-9">
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
          <spam class="mt-1 ml-4">4.7 (162 notes)</spam>
        </p>
        <p class="mb-2 text-xs flex font-semibold text-gray-600 ml-4 mt-9">
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
          <spam class="mt-1 ml-4">{{ books.nbr_read }}k</spam>
        </p>
      </div>
      <hr class="border-b border-gray-300 my-4" />
      <h1 class="text-lg font-bold tracking-tight text-gray-700">
         Chapitre {{ index }}
      </h1>
      <h1 class="text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl">
        {{ chapitre.name }}
      </h1>

      <div
        class="text-base text-gray-700 mt-9 text-left"
        v-html="chapitre.contain"
      ></div>

      <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
        Qu'as-tu pensé du chapitre ?
      </h3>
      <div class="mt-9 bg-black h-22 rounded-lg">
        <div class="flex text-white mt-6 w-full">
          <button @click="boh()" class="items-center w-1/2 mt-2    transition duration-300 hover:scale-105 transform">
         
              <p>1</p>
              <p>BOF</p>
           
          </button>
          <button @click="ok()" class="items-center w-1/2 mt-2    transition duration-300 hover:scale-105 transform">
           
              <p>2</p>
              <p>OK</p>
           
          </button>
          <button @click="bien()" class="items-center w-1/2 mt-2    transition duration-300 hover:scale-105 transform">
            
              <p>3</p>
              <p>BIEN</p>
            
          </button>
          <button @click="tessuper()" class="items-center w-1/2 mt-2   transition duration-300 hover:scale-105 transform">
          
              <p>4</p>
              <p>SUPER</p>
           
          </button>
        </div>
      </div>
      <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
        Quel est ton ressenti ?
      </h3>
      <div class="mt-9 bg-black h-16 rounded-lg">
        <div class="flex text-white mt-6 w-full">
          <button @click="recentir1()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
          
          
            <img class="w-9 mt-4 ml-16" src="../assets/happy.svg" alt="" />
           
          </button>
          <button @click="recentir2()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img class="w-9 mt-2 ml-16" src="../assets/lost.svg" alt="" />
          </button>
          <button @click="recentir3()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img class="w-9 mt-2 ml-16" src="../assets/sad.svg" alt="" />
          </button>
          <button  @click="recentir4()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img class="w-9 mt-2 ml-16" src="../assets/scared.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="mt-9 bg-black h-16 rounded-lg">
        <div class="flex text-white mt-6 w-full">
          <button @click="recentir2()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img
              class="w-9 mt-4 ml-16"
              src="../assets/disappointed.svg"
              alt=""
            />
          </button>
          <button  @click="recentir2()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img class="w-9 mt-2 ml-16" src="../assets/shocked.svg" alt="" />
          </button>
          <button @click="recentir1()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img class="w-9 mt-2 ml-16" src="../assets/impatient.svg" alt="" />
          </button>
          <button @click="recentir4()" class="items-center w-1/2 mt-0 transition duration-300 hover:scale-105 transform">
            <img class="w-9 mt-2 ml-16" src="../assets/bored.svg" alt="" />
          </button>
        </div>
      </div>
      <h3 class="font-bold text-gray-700 text-2xl mt-12 text-left">
        Quel est ton ressenti ?
      </h3>
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
          @click="comment()"
          class="text-sm bg-green-600 py-2 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
        >
          Envoyer
        </button>
        
      </div>
      <h2 class="text-2xl font-semibold mt-6 text-left">Commentaires</h2>

        <!-- Comment 1 -->
        <div  v-for="(commentaire, index) in commentaires" :key="index" class="flex items-start mt-6">
            <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-10 h-10 rounded-full mr-4">
            <div>
                <p class="text-gray-800 text-left">{{commentaire.user_by.name}}</p>
                <p class="text-gray-600 text-sm">{{commentaire.comment}}</p>
            </div>
        </div>
    </div>
    <div class="w-1/4 mt-44">
      <p class="text-gray-700 text-2xl">Partager</p>
      <div class="ml-36">
        <a href="#"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="h-12 w-12"
            aria-hidden="true"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            ></path></svg
        ></a>
        <a href="#"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="h-12 w-12 mt-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path></svg
        ></a>
        <a href="#" class="mt-2">
          <svg
            style="color: rgb(82, 224, 31)"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="currentColor"
            class="bi bi-whatsapp mt-2 ml-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              fill="#52e01f"
            ></path>
          </svg>
        </a>
        <a href="#"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            class="h-12 w-12 mt-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clip-rule="evenodd"
            ></path></svg
        ></a>
        <a href="#"
          ><svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-12 w-12 mt-2"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            ></path></svg
        ></a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 mt-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </a>
        <button @click="next()">
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
</template>
      
<script>
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css";
export default {
  name: "App",

  data() {
    return {
      addform: {
        comment: "",
        book_id: "",
        chapter_id: "",
        user_id: "",
        type_think_id:"",
        nbr_rate: 0,
      },
      books: [],
      commentaires:[],
      number: "",
      index:0,
      chapitre: null,
    };
  },
  mounted() {
    this.number = this.$route.params.index;
  },
  created() {
    this.book();
    this.profile();
    this.commentaire();
  },
  methods: {
    async book() {
     
      try {
        const response = await axios.get(`/api/books/${this.$route.params.id}`);
        if (response.data) {
          this.books = response.data.data;
          this.chapitres = this.books.chapters;
          this.index = this.$route.params.index;
          this.chapitre = this.chapitres[this.index]
          console.log(this.number);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
     async commentaire() {
     
      try {
        //const book_id = this.$route.params.id;
        const response = await axios.get(`/api/comments?book_id=${this.$route.params.id}`);
        if (response.data) {
          this.commentaires = response.data.data;
          //this.commentaires = this.books.chapters;
          this.index = this.$route.params.index;
          this.chapitre = this.chapitres[this.index]
          console.log(this.number);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async prev(){
      this.index = parseInt(this.index, 10) - 1;
      console.log(this.index);
      this.chapitre = this.chapitres[this.index]
    },
     async next(){
      this.index = parseInt(this.index, 10) + 1;
      console.log(this.index);
      this.chapitre = this.chapitres[this.index]
    },
    async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.addform.user_id = response.data.id;
          console.log(this.addform.user_id);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async comment() {
      try {
        this.addform.book_id = this.$route.params.id;
        this.addform.chapter_id =
          this.books.chapters[this.$route.params.index].id;
        const response = await axios.post(`/api/comments`, this.addform);
        if (response.status == 201) {
          this.addform = {};
          this.commentaire();
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
    async boh() {
      try {
        this.addform.book_id = this.$route.params.id;
        //this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.nbr_rate = 1;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
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
        //this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.nbr_rate = 2;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
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
    async bien() {
      try {
        this.addform.book_id = this.$route.params.id;
        //this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.nbr_rate = 3;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
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
        //this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.nbr_rate = 4;
        const response = await axios.post(`/api/notes`, this.addform);
        if (response.status == 201) {
          this.addform = {};
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
        this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.type_think_id = 5;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
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
        this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.type_think_id = 3;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
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
        this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.type_think_id = 2;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
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
        this.addform.chapter_id = this.books.chapters[this.$route.params.index].id ;
        this.addform.type_think_id = 1;
        const response = await axios.post(`/api/thinks`, this.addform);
        if (response.status == 201) {
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
</style>
      