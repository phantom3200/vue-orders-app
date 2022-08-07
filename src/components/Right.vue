<template>
  <div class='right-component'>
    <Sorting />
    <Switcher />
    <Table v-if="viewType === 'table'" />
    <Cards v-else-if="viewType === 'cards'" />
  </div>
</template>

<script>
import Sorting from '@/components/Right/Sorting.vue';
import Switcher from '@/components/Right/Switcher.vue';
import Table from '@/components/Right/Table.vue';
import Cards from '@/components/Right/Cards.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Right',
  components: {
    Cards, Table, Switcher, Sorting,
  },
  computed: {
    ...mapState(['viewType']),
  },
  methods: {
    ...mapMutations(['switchViewType']),
  },
  created() {
    this.switchViewType('cards');
  },
};
</script>

<style lang="scss" scoped>
  .right-component {
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-columns: 1fr auto;
    grid-gap: 30px;
  }
</style>
