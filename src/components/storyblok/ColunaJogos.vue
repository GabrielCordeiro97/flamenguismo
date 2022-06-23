<template>
    <b-col cols="3">
        <div class="col-direita">
            <h1>{{ blok.titulo }}</h1>
            <div v-for="blok in blok.jogos" :key="blok._uid">
                <StoryblokComponent :blok="blok" />
            </div>
        </div>
    </b-col>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>
    .col-direita {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background-color: darkred;
        color: #FFF;
        width: 100%;
        border-radius: 20px;
    }

    .col {
        padding: 0;
        margin: 8px;
    }
</style>