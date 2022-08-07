<template>
  <div class="cards">
    <div v-for="(order, index) in filteredOrders" class='card' :key="index">
      <div class='card-title'>
        <h4>Card {{ order.id + 1 }}</h4>
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
          :src="require('/src/assets/img/three-points-black.svg')"
          alt='three-points'
        />
        <Helpers :order="order" :index="index" v-if="order.isShowHelpers" />
      </div>
      <div class='card-body'>
        <input type="text" class='card-body__item' v-model="order.id" disabled/>
        <input
          type="text"
          class='card-body__item'
          v-model="order.number"
          :disabled="!order.isEditMode"
        />
        <input
          type="text"
          class='card-body__item'
          v-model="order.type"
          :disabled="!order.isEditMode"
        />
        <input
          type="text"
          class='card-body__item'
          v-model="order.date"
          :disabled="!order.isEditMode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Helpers from '@/components/Right/Helpers.vue';

export default {
  name: 'Cards',
  components: { Helpers },
  computed: {
    ...mapGetters(['filteredOrders']),
  },
  methods: {
    ...mapMutations(['switchHelpersVision', 'updateOrderData', 'switchEditMode']),
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  .card {
    background: #F6FAFB;
    box-shadow: 0 4px 12px #EBEBEB;
    border-radius: 3px;
    .card-title {
      background: rgba(237, 232, 245, 0.5);
      display: flex;
      align-items: center;
      padding: 13px 20px 7px 20px;
      justify-content: space-between;
      position: relative;
      .helpers {
        position: absolute;
        top: 30px;
        right: 20px;
      }
      .apply {
        cursor: pointer;
        width: 18px;
        margin-left: auto;
        margin-right: 10px;
      }
    }
    .card-body {
      padding: 0 20px;
      .card-body__item {
        padding: 7px 0 5px 0;
        border-bottom: 1px solid #F2F2F2;
        text-align: left;
        width: 100%;
        background: none;
        border-top: none;
        border-left: none;
        border-right: none;
        font-size: 16px;
        color: inherit;
      }
    }
  }
}

</style>
