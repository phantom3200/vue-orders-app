<template>
  <div class='aside'>
    <button class='add' @click.prevent='changeModalState(true)'>Добавить</button>
    <Filters />
  </div>
</template>

<script>
import Filters from '@/components/Aside/Filters.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'Aside',
  components: { Filters },
  methods: {
    ...mapMutations(['changeModalState']),
  },
};
</script>

<style lang="scss" scoped>
.aside {
  display: grid;
  grid-gap: 30px;
  height: fit-content;
  button.add {
    height: 70px;
  }
}

</style>
