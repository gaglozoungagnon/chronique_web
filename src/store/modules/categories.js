import { CategoryService } from "../../services/categories.service";

import {
  FETCH_CATEGORY,
  FETCH_CATEGORIES,
} from "./action-types";
import { SET_CATEGORY, SET_CATEGORIES } from "./mutation-types";

const initialState = {
  categories: [],
  category: null,
};

const state = { ...initialState };

const actions = {
  async [FETCH_CATEGORIES]({ commit }, params) {
    const response = await CategoryService.get(params);
    commit(SET_CATEGORIES, response.data);
  },
  async [FETCH_CATEGORY](context, categoryId) {

    const { data } = await CategoryService.get(categoryId);
    context.commit(SET_CATEGORY, data.category);
    return data;
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_CATEGORY](state, categories) {
    state.categories = categories;
  },
  [SET_CATEGORIES](state, categories) {
    state.categories = categories.data;
  },
};

const getters = {
    categorie(state) {
    return state.categorie;
  },
  categories(state) {
    return state.categories;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
