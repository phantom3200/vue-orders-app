<template>
  <div class='modal'>
    <div class='overlay' @click.self="changeModalState(false)"></div>
    <div class='modal-block'>
      <div class='modal-title'>Добавление</div>
      <div class='modal-body'>
        <div class='input-group'>
          <label for="number">Номер накладной</label>
          <input
            v-model="addedOrderNumber"
            id="number"
            type="text"
            placeholder="Введите значение"
          />
        </div>
        <div class='input-group'>
          <label for="orderType">Тип заказа</label>
          <select id="orderType" v-model='addedOrderType'>
            <option v-for="(orderType, index) in orderTypes" :value="orderType" :key="index">
              {{ orderType }}
            </option>
          </select>
        </div>
      </div>
      <div class='modal-footer'>
        <button @click.prevent="pushNewOrder" class='add'>Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'Modal',
  methods: {
    ...mapMutations(['changeModalState']),
    ...mapActions(['pushNewOrder']),
  },
  computed: {
    ...mapState(['orderTypes']),
    addedOrderNumber: {
      get() {
        return this.$store.state.addedOrder.number;
      },
      set(value) {
        this.$store.commit('updateOrderNumber', value);
      },
    },
    addedOrderType: {
      get() {
        return this.$store.state.addedOrder.type;
      },
      set(value) {
        this.$store.commit('updateOrderType', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9991;
  background-color: rgba(0, 0, 0, 0.5);
  .overlay {
    height: 100%;
    width: 100%;
  }
  .modal-block {
    width: 400px;
    background: #FFFFFF;
    border-radius: 2px;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    margin: auto;
    padding: 25px 20px;
    .modal-title {
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    .modal-body {
      .input-group {
        display: flex;
        flex-direction: column;
        label {
          text-align: left;
          margin-bottom: 12px;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
        }
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      select {
        color: #A5A5A5;
      }
    }
    .modal-footer {
      button.add {
        height: 35px;
        margin-top: 20px;
      }
    }
  }
}
</style>
