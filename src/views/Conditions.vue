<template class="bg-white h-full">
  <div class="bg-white h-full">
    <div class="h-24 bg-gray-800 flex items-center justify-center">
      <h1 class="font-bold text-4xl text-white">Conditions d'utilisations</h1>
    </div>
    <div class="text-center h-screen ml-44 mr-44">
      <h1 class="font-bold text-lg text-gray-700 mt-4">
        Conditions d’utilisation pour l’application dAfriplume Accès et
        utilisation de l’application:
      </h1>
      <p class="text-base text-gray-700 mt-4 text-left">
        1. Accès et utilisation de l’application: Vous pouvez accéder à
        l’application en vous inscrivant en ligne. Vous pouvez utiliser
        l’application uniquement à des fins légales et conformément aux
        présentes conditions d’utilisation.
      </p>
      <p class="text-base text-gray-700 mt-4 text-left">
        2. Modification des conditions d’utilisation: Nous nous réservons le
        droit de modifier les présentes conditions d’utilisation à tout moment
        et sans préavis. Votre utilisation continue de l’application après la
        publication de toute modification constitue votre acceptation de ces
        modifications.
      </p>
      <p class="text-base text-gray-700 mt-4 text-left">
        3. Confidentialité et protection des données: Nous nous engageons à
        protéger la confidentialité de vos données et à les utiliser
        conformément à notre politique de confidentialité.
      </p>
      <p class="text-base text-gray-700 mt-4 text-left">
        4. Propriété intellectuelle: Tous les droits d’auteur, marques de
        commerce, brevets et autres droits de propriété intellectuelle sur les
        logiciels, images, textes et autres contenus de l’application
        appartiennent à nous ou à nos concédants de licence et sont protégés par
        les lois de la propriété intellectuelle. Vous ne pouvez pas copier,
        modifier, distribuer, vendre ou louer tout ou partie de l’application
        sans notre autorisation écrite préalable.
      </p>
      <p class="text-base text-gray-700 mt-4 text-left">
        5. Garanties et responsabilités: L’application est fournie “en l’état”
        sans garanties expressées ou implicites de quelque nature que ce soit.
        Nous ne garantissons pas que l’application sera ininterrompue ou exempte
        d’erreurs, et nous ne sommes pas responsables des dommages causés par
        l’utilisation de l’application, y compris sans limitation les dommages
        indirects, consécutifs, spéciaux ou punitifs.
      </p>
      <p class="text-base text-gray-700 mt-9 text-left">
        6. Résiliation: Nous nous réservons le droit de résilier votre accès à
        l’application à tout moment sans préavis et sans responsabilité envers
        vous.
      </p>
      <p class="text-base text-gray-700 mt-9 text-left">
        7.
        <span class="ml-4"
          >1.Loi applicable: Les présentes conditions d’utilisation sont régies
          et interprétées conformément aux lois de la juridiction dans laquelle
          l’application est hébergée.</span
        ><br />

        <span class="ml-4 mt-4"
          >2.Divisibilité: Si une disposition des présentes conditions
          d’utilisation est jugée illégale, nulle ou inapplicable, cette
          disposition sera considérée comme séparable des autres dispositions et
          n’affectera pas la validité et l’applicabilité des dispositions
          restantes.</span
        >
      </p>
      <p class="text-base text-gray-700 mt-9 text-left">
        En utilisant cette application, vous acceptez les présentes conditions
        d’utilisation. Si vous n’acceptez pas ces conditions, vous ne devez pas
        utiliser cette application.
      </p>
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
  