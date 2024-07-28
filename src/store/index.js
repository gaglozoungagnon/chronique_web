import { createLogger, createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/user";
import books from "./modules/books";
import categories from "./modules/categories";
import profiles from "./modules/profiles";
const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    users,
    books,
    categories,
    profiles,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
