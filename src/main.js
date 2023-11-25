import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "./index.css";
import store from "./store";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import ApiService from "./services/api.service";
import TokenService from "./services/storage.service";

//dotenv.config()
Pusher;

ApiService.init("http://127.0.0.1:4000/api");
if (TokenService.getToken()) {
  ApiService.setHeader();
}

window.Echo = new Echo({
  auth: {
    headers: {
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  },
});

createApp(App)
.use(store)
.use(router)
.mount('#app')
