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
import { RouterView } from "vue-router";

import Header from './components/base/Header.vue'
import Footer from "./components/base/Footer.vue";

</script>

<style>

</style>
