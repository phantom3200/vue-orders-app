<template>
  <div class='table'>
    <div class='table-head'>
      <div class='table-head__item'>ID</div>
      <div class='table-head__item'>Номер накладной</div>
      <div class='table-head__item'>Тип заказа</div>
      <div class='table-head__item'>Дата создания</div>
      <div class='table-head__item'></div>
    </div>
    <div class='table-body'>
      <div v-for="(order, index) in filteredOrders" class='table-body__items' :key="index">
        <input type="text" class='table-body__item' v-model="order.id" disabled/>
        <input
          type="text"
          class='table-body__item'
          v-model="order.number"
          :disabled="!order.isEditMode"
        />
        <input
          type="text"
          class='table-body__item'
          v-model="order.type"
          :disabled="!order.isEditMode"
        />
        <input
          type="text"
          class='table-body__item'
          v-model="order.date"
          :disabled="!order.isEditMode"
        />
        <div class='table-body__item'>
          <img
            v-if="order.isEditMode"
            :src="require('/src/assets/img/chevron-green.svg')"
            alt="apply"
            class="apply"
            @click="switchEditMode(index)"
          />
          <img
            @click="switchHelpersVision(index)"
            class='three-points'
            :src="require('/src/assets/img/three-points.svg')"
            alt='three-points'
          />
          <Helpers :order="order" :index="index" v-if="order.isShowHelpers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Helpers from '@/components/Right/Helpers.vue';

export default {
  name: 'Table',
  computed: {
    ...mapGetters(['filteredOrders']),
  },
  methods: {
    ...mapMutations(['switchHelpersVision', 'switchEditMode']),
  },
  components: { Helpers },
};
</script>

<style lang="scss" scoped>
  .table {
    grid-column-start: 1;
    grid-column-end: 3;
    .table-head {
      display: grid;
      grid-template-columns: 0.7fr 1.3fr 0.7fr 1.3fr 0.2fr;
      grid-gap: 3px;
      .table-head__item {
        font-weight: 700;
        font-size: 14px;
        background: #E6E6E6;
        padding: 12px 20px;
      }
    }
    .table-body {
      background: #FFFFFF;
      border: 1px solid #E6E6E6;
      .table-body__items {
        grid-template-columns: 0.7fr 1.3fr 0.7fr 1.3fr 0.2fr;
        grid-gap: 3px;
        display: grid;
        border-bottom: 1px solid #E6E6E6;
      }
      .table-body__item {
        padding: 12px 20px;
        font-weight: 400;
        font-size: 16px;
        position: relative;
        border: none;
        height: auto;
        width: 100%;
        color: inherit;
        .helpers {
          position: absolute;
          right: 25px;
          z-index: 10;
          top: -45px;
        }
        .apply {
          position: absolute;
          left: -20px;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 15px;
          cursor: pointer;
        }
      }
    }
  }
</style>
