import { createLogger, createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/user";
import repas from "./modules/repas";
const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    users,
    repas,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
