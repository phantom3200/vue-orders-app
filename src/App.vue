<template>
  <div id="app">
    <Header />
    <Main />
    <Modal v-if="isModalOpened" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Modal from '@/components/Modal.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Modal,
    Main,
    Header,
  },
  computed: {
    ...mapState(['isModalOpened']),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2B2839;
  margin: 0 0 30px;
}
.container {
  width: 1200px;
  margin: auto;
}
h4 {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin: 0;
}
.shadow-block {
  filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25));
  background: #FFF;
}
input, select {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  height: 28px;
  padding: 0 15px;
}
::placeholder {
  color: #A5A5A5;
}
.three-points {
  cursor: pointer;
}
button.add {
  background: #4943CD;
  box-shadow: 0 4px 4px #ebebeb;
  border-radius: 2px;
  width: 100%;
  border: none;
  color: #FFF;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
}
</style>
