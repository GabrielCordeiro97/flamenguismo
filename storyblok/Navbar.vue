<template>
    <nav class="links">
        <ul>       
            <li v-for="link in navbar" :key="link._uid">
                 <NuxtLink :to="link.href">{{ link.titulo }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const story = await useAsyncStoryblok('config', {
  version: 'draft',
})
const navbar = computed(() => {
  return story.value.content.navbar[0].links
})
</script>

<style>

</style>