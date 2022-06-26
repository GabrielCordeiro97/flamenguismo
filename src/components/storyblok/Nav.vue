<template>
    <nav class="links">
        <ul>       
            <li v-for="link in blok.links" :key="blok._uid">
                <StoryblokComponent :blok="link" />
            </li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>

</style>