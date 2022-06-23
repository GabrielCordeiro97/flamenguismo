<template>
    <nav class="links">
        <ul>       
            <li v-for="link in blok.links" :key="blok._uid">
                <StoryblokComponent :blok="link" />
                <!-- <a href="#surgimento">{{ blok.titulo }}</a> -->
            </li>
            <!-- <li><a href="#futebol">O futebol</a></li>
            <li><a href="#conquistas">Maiores conquistas</a></li>
            <li><a href="#atual">Momento atual</a></li>
            <li><a href="#referencias">Referencias e indicações</a></li> -->
        </ul>
    </nav>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>

</style>