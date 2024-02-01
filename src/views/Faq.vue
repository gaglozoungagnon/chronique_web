<template class="">
  <div class="bg-white h-full">
    <div class="h-44 bg-gray-800 flex items-center justify-center">
      <h1 class="font-bold text-4xl text-white">FAQs</h1>
    </div>
    <div class="text-center h-full ml-44 mr-44 bg-gray-100 p-4">
      <div class="flex mt-4">
        <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
          Q1 : Avec quel navigateur et sur quel outil peut-on utiliser
          Afriplume?
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-9 h-9 ml-4 mt-1 cursor-pointer"
          @click="toggleParagraph"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      <p v-if="showParagraph" class="text-base text-gray-700 mt-4 text-left text-lg">
        Afriplume est accessible depuis n’importe quel navigateur (edge, chrome,
        safari…) et développé pour être responsive (c’est à dire que ça rend
        bien) sur tous les supports : ordinateur, smartphone, tablette… On est
        partout
      </p>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q2 : Comment puis-je publier ma propre œuvre sur Afriplume ?
      </h1>
      <div class="bg-gray-100 p-8">
        <h2 class="text-2xl font-bold mb-4 text-left text-lg">
          Pour publier votre œuvre sur Afriplume, suivez ces étapes simples :
        </h2>
        <ul class="list-disc pl-6 text-left text-lg">
          <li class="mb-2">Connectez-vous à votre compte.</li>
          <li class="mb-2">Cliquez sur "Ecrire" dans la barre de menu.</li>
          <li class="mb-2">
            Remplissez les détails de votre œuvre, téléchargez votre fichier si
            nécessaire, et
          </li>
          <li>Cliquez sur "Publier."</li>
        </ul>
      </div>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q3 : Y a-t-il des frais pour publier sur Afriplume ?
      </h1>
      <p class="text-base text-gray-700 mt-4 text-left text-lg">
        Non, la publication sur Afriplume est entièrement gratuite. Nous croyons
        en l'accessibilité et en la promotion de la créativité littéraire
        africaine.
      </p>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q4 : Comment puis-je interagir avec d'autres membres de la communauté ?
      </h1>
      <div class="bg-gray-100 p-8">
        <h2 class="text-2xl font-bold mb-4 text-left text-lg">
          Vous pouvez interagir avec d'autres membres de Afriplume de plusieurs
          manières :
        </h2>
        <ul class="list-disc pl-6 text-left text-lg">
          <li class="mb-2">Rejoignez des discussions sur les forums.</li>
          <li class="mb-2">Participez à nos clubs de lecture.</li>
          <li class="mb-2">
            Commentez et partagez des œuvres que vous appréciez.
          </li>
          <li>
            Suivez d'autres auteurs et lecteurs pour rester informé de leurs
            activités.
          </li>
        </ul>
      </div>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q5 : Comment puis-je participer à des concours littéraires sur Top
        Chronique ?
      </h1>
      <p class="text-base text-gray-700 mt-4 text-left text-lg">
        Nous organisons régulièrement des concours littéraires passionnants.
        Pour participer, consultez notre page "Concours" pour les détails, les
        dates limites et les règles spécifiques à chaque concours.
      </p>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q6 : Est-ce que Afriplume offre des opportunités d'édition ?
      </h1>
      <p class="text-base text-gray-700 mt-9 text-left text-lg">
        Oui, nous travaillons en étroite collaboration avec des éditeurs et des
        maisons d'édition pour offrir des opportunités d'édition aux auteurs
        talentueux de notre communauté. Restez à l'affût des annonces
        d'opportunités d'édition sur notre site.
      </p>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q7 : Comment puis-je signaler du contenu inapproprié ou offensant sur
        Top Chronique ?
      </h1>
      <p class="text-base text-gray-700 mt-9 text-left text-lg">
        Si vous trouvez un contenu inapproprié ou enfreignant nos directives
        communautaires, veuillez utiliser l'option de signalement sur la page du
        contenu en question et replissez le formulaire. Notre équipe examinera
        rapidement la situation et prendra les mesures appropriées.
      </p>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q8 : SOMMES NOUS PROTEGER DU PLAGIAT ?
      </h1>
      <p class="text-base text-gray-700 mt-9 text-left text-lg">
        En publiant sur Afriplume, vous avez la certitude que vos œuvres ne
        pourront pas êtres copiés par quiconque. Des dispositions ont été
        également prises pour prouver le moment exact à laquelle votre œuvre a
        été publiés sur notre site. Cela pourrait vous êtes utile si vous étiez
        emmené à prouver que vous êtes l’auteur de l’œuvre lors d’une quelconque
        procédure. Mais il est important que la protection totale contre le
        plagiat n’est pas garantie. Si vous croyez qu’une œuvre publiée sur
        Afriplume viole vos droits d’auteurs ou celui d’un collègue,
        veillez-nous en informer en utilisant l’option de signalement.
      </p>
      <h1 class="font-bold text-2xl text-gray-700 mt-2 text-left text-lg">
        Q9 : Peut-on être auteur sur Afriplume même en dehors du continent
        africain ?
      </h1>
      <p class="text-base text-gray-700 mt-9 text-left text-lg">
        Absolument ! Afriplume accueille des auteurs du monde entier, et vous
        n'avez pas besoin d'être situé en Afrique pour devenir un auteur sur
        notre plateforme. Nous célébrons la diversité et la créativité
        littéraire, et nous sommes ouverts à la participation d'auteurs de
        toutes nationalités. Si vous avez un intérêt pour la littérature
        africaine ou si vous souhaitez partager votre travail avec notre
        communauté, vous êtes le bienvenu sur Afriplume, où nous encourageons
        l'échange culturel et littéraire
      </p>
    </div>

    <div class="h-6"></div>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {

         showParagraph: false,
    };
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
};
</script>
  
<style scoped>
/* Ajoutez des styles personnalisés pour le slider ici */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

input:checked {
  background-color: #22c55e; /* bg-green-500 */
}

input:checked ~ span:last-child {
  --tw-translate-x: 1.75rem; /* translate-x-7 */
}
</style>
  