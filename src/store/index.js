import { createLogger, createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/user";
import repas from "./modules/repas";
import categories from "./modules/categories";
const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    users,
    repas,
    categories,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
