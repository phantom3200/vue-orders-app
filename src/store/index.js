import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
    isModalOpened: false,
    isShowSortingParams: false,
    filterParam: '',
    sortingParam: '',
    viewType: '',
    addedOrder: {
      id: null,
      number: '',
      type: '',
      date: null,
      isShowHelpers: false,
      isEditMode: false,
    },
    orderTypes: [
      'TYPE1',
      'TYPE2',
      'TYPE3',
    ],
    sortingParams: [
      'ascending',
      'descending',
    ],
  },
  getters: {
    filteredOrders(state) {
      return state.orders.filter((order) => (
        order.number.includes(state.filterParam)
      ));
    },
    sortFieldName(state) {
      return state.sortingParam ? state.sortingParam : 'Sorting';
    },
  },
  actions: {
    pushNewOrder({ commit, state }) {
      state.addedOrder.id = state.orders.length;
      state.addedOrder.date = new Date().toLocaleString('fr-CH', { year: 'numeric', month: 'numeric', day: 'numeric' });
      commit('addOrder');
      commit('resetAddedObject');
      commit('changeModalState', false);
    },
  },
  mutations: {
    addOrder(state) {
      const newOrder = { ...state.addedOrder };
      state.orders.push(newOrder);
    },
    removeOrder(state, value) {
      state.orders = state.orders.filter((order) => (
        order.id !== value.id
      ));
      state.isShowHelpers = !state.isShowHelpers;
    },
    sortOrders(state, value) {
      if (value === 'ascending') {
        state.orders = state.orders.sort((a, b) => (a.number > b.number ? 1 : -1));
      } else if (value === 'descending') {
        state.orders = state.orders.sort((a, b) => (a.number < b.number ? 1 : -1));
      }
      state.sortingParam = value;
      state.isShowSortingParams = false;
    },
    resetAddedObject(state) {
      state.addedOrder.id = null;
      state.addedOrder.type = '';
      state.addedOrder.number = '';
      state.addedOrder.date = null;
      state.addedOrder.isShowHelpers = false;
      state.addedOrder.isEditMode = false;
    },
    changeModalState(state, value) {
      state.isModalOpened = value;
    },
    updateOrderNumber(state, value) {
      state.addedOrder.number = value;
    },
    updateOrderType(state, value) {
      state.addedOrder.type = value;
    },
    updateFilterParam(state, value) {
      state.filterParam = value;
    },
    updateShowSortingParamState(state) {
      state.isShowSortingParams = !state.isShowSortingParams;
    },
    switchEditMode(state, index) {
      state.orders[index].isEditMode = !state.orders[index].isEditMode;
      state.orders[index].isShowHelpers = false;
    },
    switchHelpersVision(state, index) {
      state.orders[index].isShowHelpers = !state.orders[index].isShowHelpers;
    },
    switchViewType(state, value) {
      state.viewType = value;
    },
  },
});
