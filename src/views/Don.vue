<script>
import axios from "axios";
import { loadScript } from "@paypal/paypal-js";

export default {
  name: "ContentComponentBuyPackage",
  components: {},
  data() {
    return {
      form: {
        amount: "",
        subscription: "",
      },
      prenom:"",
      planId: "subscription-direct",
      status: "none",
      method: "",
      processing: false,
      showModal: false,
      showButton: false,
      options: [
        {
          id: 2,
          label: "KkiaPay",
          image:
            "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg",
        },
        
      ],
    };
    
  },
  mounted() {
     this.profile();
  },
 
  methods: {

    initFeexPayButton() {

      if (!this.form.subscription) {
        alert('Veuillez saisir un montant.');
        return;
      }
      // eslint-disable-next-line no-undef
      FeexPayButton.init('render', {
        id: '648d7a2b72ea51df295a06d4',
        amount: this.form.subscription,
        token: 'fp_sZ5RVWy3U0aWhcBh9fteXs3iJUFoERpvXLj8zPcji4jpOcynpNPDvIbqK3hdKRvx',
        callback: this.callbackFunction,
        callback_url: 'https://your-callback-url.com',
        mode: 'SANDBOX',
        custom_button: "true",
        id_custom_button: this.customButton ? 'customButton' : null,
        custom_id: '45454',
        description: "Votre description",
        case: "MOBILE"
      });
    },
    callbackFunction() {
      // Votre fonction de rappel
      console.log('Paiement réussi');
    },
   async profile() {
      try {
        const response = await axios.get("/api/profile");
        if (response.data) {
          this.prenom = response.data.data.name;
          console.log(this.prenom);
         
         
        }
      } catch (error) {
        console.log(error.data);
      }
    },
   
    async processPayment() {
      if (this.method === "KkiaPay") {
        // Intégration KkiaPay
      } else if (this.method === "PayPal") {
        this.loadPayPalButton();
        document.getElementById("paypal-button-container").style.display = "block";
      }
    },
    loadPayPalButton() {
      loadScript({ "client-id": "AcKAr1CtxxXu-NVHamHey_Lcg8djUKyMnxhVgVAC0EegmwrVgBW3LAiDregHlHVMF8hrZMhijrjyeHQz", currency: "USD" }).then((paypal) => {
        paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.form.subscription,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              // Traitez la réponse après une transaction réussie
            });
          },
        }).render("#paypal-button-container");
      }).catch((err) => {
        console.error("Failed to load the PayPal JS SDK script", err);
      });
    },
  
   
  },
  watch: {
    'form.subscription': function (newAmount) {
      console.log('Montant changé:', newAmount);
      if (newAmount) {
        this.showButton = true;
        this.$nextTick(() => {
          this.initFeexPayButton();
        });
      } else {
        this.showButton = false;
      }
    }
  },
   
};
</script>

<template>
  <div class="bg-white sm:overflow-hidden relative z-10 bg-[#f0f5fb]">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-3/5 p-8 flex flex-col items-center">
        <ul class="w-full">
          <li class="my-4" @click="changePrice(form.subscription, 'subscription-direct')">
            <input id="subscription-direct" type="radio" name="subscription" value="subscription-direct"
              class="hidden peer" required />
            <label for="subscription-direct"
              class="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div class="w-full p-4 flex flex-col md:flex-row justify-between items-center">
                <p class="font-bold ">
                  Quel montant souhaitez-vous envoyer ?
                </p>
                <div class="flex flex-col">
                  <p class="mb-2">
                    Entrer le montant ci-dessous
                  </p>
                  <input id="minuteUserWantGet" v-model="form.subscription" type="number"
                    class="mb-6 form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-primary-base focus:outline-none"
                    min="100" placeholder="100" />
                </div>
                <svg aria-hidden="true" class="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-2/5 bg-white p-8 flex flex-col">
        <p class="text-xl mb-6 text-gray-900">Récapitulatif du don</p>
        <div class="pb-6 border-b text-gray-900">
          <div class="flex justify-between">
            <p>Montant du don:</p>
            <p>{{ form.subscription }} USD</p>
          </div>
          <div class="flex justify-between">
            <p>TVA:</p>
            <p>0 USD</p>
          </div>
        </div>
        <div class="flex justify-between my-6">
          <p>Total</p>
          <p class="text-xl font-bold">{{ form.subscription }} USD</p>
        </div>

        <h3 class="my-4 font-semibold text-gray-900">
          Choisissez votre solution de paiement*
        </h3>
        <div class="flex items-center">
          <div v-for="option in options" :key="option.id" class="flex items-center">
            <label class="flex items-center px-4">
              <input v-model="method" type="radio" :value="PayPal" />
              <img :src="option.image" class="w-28 ml-4" />
            </label>
          </div>
        </div>
        <button class="bg-blue-600 self-left mt-4 w-1/3 text-white font-bold p-2 px-4 rounded disabled:opacity-40"
          @click="loadPayPalButton">
          Envoyer
        </button>
        <div id="paypal-button-container"></div>
        <div v-if="showButton" id="render"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>




</style>
