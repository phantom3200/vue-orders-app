<template>
  <div class='sorting shadow-block'>
    <div class='sort-field'>
      <div @click="updateShowSortingParamState()" class="sort-field-content">
        <span>{{ sortFieldName }}</span>
        <img
          :class="isShowSortingParams ? 'transformed' : null"
          :src="require('/src/assets/img/chevron.svg')"
          alt="chevron" />
      </div>
      <ul v-if="isShowSortingParams">
        <li
          v-for="(param, index) in sortingParams"
          value="param"
          :key="index"
          @click="sortOrders(param)"
        >Sort by Invoice number: {{ param }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Sorting',
  computed: {
    ...mapState(['sortingParams', 'isShowSortingParams']),
    ...mapGetters(['sortFieldName']),
    sortingParam: {
      get() {
        return this.$store.state.filterParam;
      },
      set(value) {
        this.$store.commit('updateSortingParam', value);
      },
    },
  },
  methods: {
    ...mapMutations(['updateSortingParam', 'updateShowSortingParamState', 'sortOrders']),
  },
};
</script>

<style lang="scss" scoped>
.sorting {
  padding: 20px;
  display: flex;
  align-items: center;
  .sort-field {
    font-weight: 700;
    font-size: 16px;
    width: 230px;
    height: 30px;
    padding: 5px;
    border: 1px solid #E0E5E6;
    text-align: left;
    position: relative;
    .sort-field-content {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      img {
        transition: ease-in-out 0.3s;
        width: 15px;
        &.transformed {
          transform: rotate(-90deg);
        }
      }
    }
    ul {
      position: absolute;
      list-style: none;
      padding: 0;
      text-align: left;
      background: #FFFFFF;
      border: 1px solid #E0E5E6;
      width: 230px;
      left: 0;
      top: 100%;
      margin: 0;
      li {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        border-bottom: 1px solid #E0E5E6;
        cursor: pointer;
        padding: 5px;
      }
    }
  }
}
</style>
