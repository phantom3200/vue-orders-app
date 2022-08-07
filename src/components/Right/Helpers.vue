<template>
  <ul class="helpers">
    <li @click="switchEditMode(index)">
      <div class='image'>
        <img :src="require('/src/assets/img/pencil.svg')" alt="edit">
      </div>
      <span>редактировать</span>
    </li>
    <li @click="removeOrder(order)">
      <div class='image'>
       <img :src="require('/src/assets/img/remove.svg')" alt="remove">
      </div>
      <span>удалить</span>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Helpers',
  props: {
    order: Object,
    index: Number,
  },
  methods: {
    ...mapMutations(['switchEditMode', 'removeOrder']),
  },
};
</script>

<style lang="scss" scoped>
.helpers {
  padding: 10px;
  margin: 0;
  list-style: none;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgb(182 182 182 / 25%);
  border-radius: 2px;
  font-size: 14px;
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    .image {
      display: flex;
      width: 20px;
      img {
        margin-right: 5px;
      }
    }
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
