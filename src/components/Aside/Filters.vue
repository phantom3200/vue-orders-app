<template>
  <div class='filters shadow-block'>
    <div class='block-title'>
      <h4>Filters</h4>
    </div>
    <div class='actions-block'>
      <label for="filter">Invoice number</label>
      <input v-model='filterParam' id="filter" type='text' placeholder="Enter value" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Filters',
  computed: {
    filterParam: {
      get() {
        return this.$store.state.filterParam;
      },
      set(value) {
        this.$store.commit('updateFilterParam', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  padding: 20px 0;
  .block-title {
    padding: 0 30px 5px 30px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(248, 248, 248, 1);
    text-align: left;
  }
  .actions-block {
    padding: 15px 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
  }
}
</style>
