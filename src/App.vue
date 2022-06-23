<template>
  <div>
    <Header/>
    <Suspense>
      <RouterView />
    </Suspense>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue';
import { RouterView } from "vue-router";

// import Home from './components/Home.vue'
import Header from './components/base/Header.vue'
import Footer from "./components/base/Footer.vue";

// export default defineComponent({
//   name: 'App',
//     components: {
//       // Home,
//       Header,
//   }
// });
</script>

<style>

</style>
