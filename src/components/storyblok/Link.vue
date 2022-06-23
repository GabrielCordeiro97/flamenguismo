<template>
    <a :href="`#${blok.href}`">{{ blok.titulo }}</a>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>

</style>