import { createStore } from "vuex";
import axios from "axios";
const url = "https://63072ea13a2114bac75b87db.mockapi.io/api/test/data/";

let store = createStore({
  state() {
    return {
      catalogItems: [],
    };
  },
  mutations: {
    SET_CATALOG_ITEMS: (state, data) => {
      state.catalogItems = data;
    },
  },
  actions: {
    GET_CATALOG_ITEMS({ commit }) {
      return axios(url, {
        method: "GET",
      })
        .then((response) => {
          commit("SET_CATALOG_ITEMS", response.data);

          return response.data;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    CATALOG_ITEMS(state) {
      return state.catalogItems;
    },
  },
});

export default store;
