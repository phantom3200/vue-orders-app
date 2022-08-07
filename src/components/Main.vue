<template>
  <main>
    <div class='container'>
      <div class='main-wrap'>
        <Aside />
        <Right />
      </div>
    </div>
  </main>
</template>

<script>
import Aside from '@/components/Aside.vue';
import Right from '@/components/Right.vue';

export default {
  name: 'Main',
  components: { Right, Aside },
};
</script>

<style scoped>
 .main-wrap {
   margin-top: 30px;
   display: grid;
   grid-auto-flow: column;
   grid-gap: 30px;
   grid-template-columns: 25% auto;
 }
</style>
