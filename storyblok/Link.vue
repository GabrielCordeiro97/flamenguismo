<template>
    <NuxtLink :to="`#${blok.href}`">{{ blok.titulo }}</NuxtLink>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>

</style>