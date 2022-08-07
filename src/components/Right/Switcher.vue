<template>
  <div class='switcher'>
    <div class='switcher-wrapper'>
        <img
          @click="switchViewType('cards')"
          :src="require('/src/assets/img/switch-to-cards.svg')"
          alt="switch-to-cards"
          class='switcher-item left-item'
          :class="viewType === 'cards' ? 'selected' : null"
        />
        <img
          @click="switchViewType('table')"
          :src="require('/src/assets/img/switch-to-table.svg')"
          alt="switch-to-table"
          class='switcher-item right-item'
          :class="viewType === 'table' ? 'selected' : null"
        />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Switcher',
  methods: {
    ...mapMutations(['switchViewType']),
  },
  computed: {
    ...mapState(['viewType']),
  },
};
</script>

<style lang='scss' scoped>
.switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  .switcher-wrapper {
    background: #FFFFFF;
    border: 1px solid #647A8C;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    .switcher-item {
      cursor: pointer;
      &.left-item {
        border-right: 1px solid #647A8C;
        padding: 10px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      &.right-item {
        border-left: 1px solid #647A8C;
        padding: 12px 10px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      &.selected {
        background: #E5E9EC;
      }
    }
  }
}

</style>
