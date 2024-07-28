import { ProfileService } from "../../services/profiles.service";

import {
  FETCH_PROFILE,
  FETCH_PROFILES,
} from "./action-types";
import { SET_PROFILE, SET_PROFILES } from "./mutation-types";

const initialState = {
  profiles: [],
  profity: null,
};

const state = { ...initialState };

const actions = {
  async [FETCH_PROFILES]({ commit }, params) {
    const response = await ProfileService.get(params);
    commit( SET_PROFILES, response.data);
  },
  async [FETCH_PROFILE](context, profityId) {

    const { data } = await ProfileService.get(profityId);
    context.commit(SET_PROFILE, data.profity);
    return data;
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_PROFILE](state, profiles) {
    state.profiles = profiles;
  },
  [SET_PROFILES](state, profiles) {
    state.profiles = profiles.data;
  },
};

const getters = {
    profile(state) {
    return state.profiles;
  },
  profiles(state) {
    return state.profiles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
