<template>
    <div>
        <div v-for="section in blok.sections" :key="blok._uid">
            <StoryblokComponent :blok="section" />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>

</style>
        <!-- <section class="bloco" id="surgimento"></section>
        <section class="bloco" id="futebol"></section>
        <section class="bloco" id="conquistas"></section>
        <section class="bloco" id="atual"></section>
        <section class="bloco" id="referencias"></section> -->