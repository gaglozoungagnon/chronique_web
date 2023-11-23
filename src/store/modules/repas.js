import { RepasService } from "../../services/repas.service";

import {
  REPAS_ADD,
  REPAS_DELETE,
  REPAS_EDIT,
  FETCH_REPAS,
  FETCH_REPASS,
} from "./action-types";
import { SET_REPAS, SET_REPASS } from "./mutation-types";

const initialState = {
  repas: [],
};

const state = { ...initialState };

const actions = {
  async [FETCH_REPASS]({ commit }, count) {
    const response = await RepasService.get(count);
    commit(SET_REPASS, response.data);
  },
  async [FETCH_REPAS](context, repasId, prevrepas) {
    // avoid extronuous network call if contact exists
    if (prevrepas !== undefined) {
      return context.commit(SET_REPAS, prevrepas);
    }
    const { data } = await RepasService.get(repasId);
    context.commit(SET_REPAS, data.repas);
    return data;
  },
  [REPAS_ADD]({ state }) {
    return RepasService.create(state.repas);
  },
  [REPAS_DELETE](context, repasId) {
    return RepasService.destroy(repasId);
  },
  [REPAS_EDIT]({ state }) {
    return RepasService.update(state.repas.id, state.repas);
  },

  // [CONTACT_RESET_STATE]({ commit }) {
  //   commit(RESET_STATE);
  // },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_REPAS](state, repas) {
    state.repas = repas;
  },
  [SET_REPASS](state, repass) {
    state.repass = repass.data;
    state.current_page = repass.meta.current_page;
    state.last_page = repass.meta.last_page;
  },
  // [RESET_STATE]() {
  //   for (let f in state) {
  //     set(state, f, initialState[f]);
  //   }
  // },
};

const getters = {
    repas(state) {
    return state.repas;
  },
  repass(state) {
    return state.repass;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
