<template>
  <div v-editable="blok" :class="{ 'd-flex': blok.display_flex }">
    <StoryblokComponent
      v-for="blok in blok.body"
      :blok="blok"
      :key="blok._uid"
    />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>