import { BooksService } from "../../services/books.service";

import {

  FETCH_BOOKS,
} from "./action-types";
import {  SET_BOOKS } from "./mutation-types";

const initialState = {
  books: [],
  searchQuery: "",

};

const state = { ...initialState };

const actions = {
  async [FETCH_BOOKS]({ commit }, params) {
    const response = await BooksService.get(params);
    commit(SET_BOOKS, response.data);
  },
  updateSearchQuery({ commit }, query) {
    commit('setSearchQuery', query);
  }
 
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  
  [SET_BOOKS](state, books) {
    state.books = books.data;
  },
  setSearchQuery(state, query) {
    state.searchQuery = query;
  }
};

const getters = {
  
  books(state) {
    return state.books;
  },
  getSearchQuery: state => state.searchQuery
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
