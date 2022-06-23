<template>
    <b-col cols="9" class="col-centro">
        <div class="col-centro">
            <h1>{{ blok.titulo }}</h1>
            <h3>{{ blok.texto }}</h3>
        </div>
    </b-col>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>
    .col-centro{
        background-color: darkred;
        color: #FFF;
        border-radius: 20px;
        padding: 20px;
    }

    .col {
        padding: 0;
        margin: 8px;
    }
</style>