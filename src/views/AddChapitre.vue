<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white p-4 mt-9"
  >
    <div class="ml-12 mr-12">
      <form>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold text-left text-gray-900">
              Information chapitre
            </h2>

            <div class="mt-10">
              <div class="flex w-full">
                <div class="w-2/4 mr-4">
                  <label
                    for="title"
                    class="block text-sm font-bold text-left text-gray-900"
                    >Titre</label
                  >
                  <div class="mt-2">
                    <input
                      type="number"
                      min="0"
                      id="title"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="w-1/4 mr-4">
                  <label
                    for="catchphrase"
                    class="block text-sm font-bold text-left text-gray-900"
                    >Numéro</label
                  >
                  <div class="mt-2">
                    <input
                      type="number"
                      min="0"
                      id="catchphrase"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="w-1/4">
                  <label
                    for="last-name"
                    class="block text-sm font-bold text-left text-gray-900"
                    >Volume</label
                  >
                  <div class="mt-2">
                    <input
                      type="number"
                      min="0"
                      name="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-base font-semibold text-left text-gray-900 mt-6">
              Contenu du chapitre
            </h2>
            <label
              for="title"
              class="block text-sm font-sans text-left mt-2 text-gray-900"
              >Min 1 500 caractères, Max 35 000 caractères</label
            >
            <div class="flex col-span-8 sm:col-span-8">
              <div class="hidden sm:flex sm:items-start">
                <div class="flex items-center mt-2">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="ml-1 text-sm flex mt-2">
                  <BaseLabel
                    for="remember"
                    class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-4"
                    >Adapte votre texte lorsque vous le collez
                    (recommandé)</BaseLabel
                  >
                </div>
              </div>
            </div>
            <div class="flex col-span-8 sm:col-span-8">
              <div class="hidden sm:flex sm:items-start">
                <div class="flex items-center mt-2">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="ml-1 text-sm flex mt-2">
                  <BaseLabel
                    for="remember"
                    class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-4"
                    >Supprime les espaces sous les paragraphes lorsque vous
                    collez votre texte
                  </BaseLabel>
                </div>
              </div>
            </div>
            <div class="sm:col-span-3 mt-4">
              <label
                for="about"
                class="block text-sm font-bold text-left text-gray-900"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  id="about"
                  name="about"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div class="flex col-span-8 sm:col-span-8 mt-4">
              <label class="inline-flex items-center mt-2">
                <label
                  class="flex items-center relative w-max cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
                  />
                  <span
                    class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200"
                  />
                </label>
              </label>
              <div class="ml-1 text-sm flex mt-4">
                <BaseLabel
                  for="remember"
                  class="text-sm font-medium text-primary-normal dark:text-gray-300 ml-4 mt-4 text-left mt-1"
                  >Programer votre envoyer
                </BaseLabel>
              </div>
               <div class="mb-5 flex ml-4 mt-4">
                <input
                  type="datetime-local"
                  name="date"
                  id="date"
                  v-model="addform.date"
                  class="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <DeleteModalFooter
    width="w-full md:w-2/3 lg:w-1/2"
    :is-open="showDeleteRepasModal"
    @cancel="showDeleteRepasModal = !showDeleteRepasModal"
    @delete="deleteRepas()"
  >
    <template #header>Supprimer</template>
    <template #body> Vous voulez suppprimer ce repas </template>
  </DeleteModalFooter>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/3"
    :is-open="showModalRepas"
    @close-modal="showModalRepas = false"
  >
    <template #header> Ajouter une histoire</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addRepas()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Nom de l'histoire" />
                  <BaseInput id="nom" v-model="addform.name" class="mt-2" />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Description" />
                  <BaseInput
                    id="language"
                    v-model="addform.description"
                    class="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AddModalFooter @cancel="showModalRepas = false" @send="addRepas()" />
    </template>
  </TheModal>
  <TheModal
    width="w-full md:w-2/3 lg:w-1/2"
    :is-open="showModalRepasUpdate"
    @close-modal="showModalRepasUpdate = false"
  >
    <template #header> Mettre à jour le Repas</template>

    <template #body>
      <form action="#" method="POST" @submit.prevent="addContact()">
        <div>
          <div class="mt-3 sm:mt-0 sm:col-span-2">
            <div class="px-4 py-5 bg-white p-6">
              <div class="grid grid-cols-8 gap-6">
                <div class="col-span-8 sm:col-span-4">
                  <BaseLabel value="Nom " />
                  <BaseInput
                    id="nom"
                    v-model="addform.first_name"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-4">
                  <BaseLabel value="Prix" />
                  <BaseInput
                    id="prenom"
                    v-model="addform.last_name"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Type" />
                  <div class="relative mt-1">
                    <BaseInput v-model="phone" class="mt-2" />
                  </div>
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Description" />
                  <BaseInput
                    id="language"
                    v-model="addform.language"
                    class="mt-2"
                  />
                </div>
                <div class="col-span-8 sm:col-span-8">
                  <BaseLabel value="Image" />
                  <BaseInput
                    id="language"
                    type="file"
                    v-model="addform.language"
                    class="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <AddModalFooter
        @cancel="showModalRepasUpdate = false"
        @send="addContact()"
      />
    </template>
  </TheModal>
</template>

<script>
import DeleteModalFooter from "../components/DeleteModalFooter.vue";
import TheModal from "../components/TheModal.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import AddModalFooter from "../components/AddModalFooter.vue";
export default {
  name: "RepasDash",
  components: {
    DeleteModalFooter,
    TheModal,
    BaseLabel,
    BaseInput,
    AddModalFooter,
  },
  data() {
    return {
      addform: {
        categoris_id: "",
        name: "",
        description: "",
        prix: "",
        image_url: "",
      },
      alert: {
        type: "",
        message: "",
      },
      processing: false,
      showDeleteRepasModal: false,
      showModalRepas: false,
      showModalRepasUpdate: false,
      repass: [],
      user: "",
      filteredRestaurants: [],
      categorys: [],
    };
  },
  computed: {},
  created() {},
  methods: {
    deleteRepasModal() {
      this.showDeleteRepasModal = !this.showDeleteRepasModal;
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
    },
  },
};
</script>