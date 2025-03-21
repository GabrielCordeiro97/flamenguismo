<template>
<div class="header__principal">
    <b-col fluid cols="2" class="header__logo">
        <NuxtLink to="/"> <img :src="header.imagem.filename" alt="EscudoDoFlamengo" class="img-logo"> </NuxtLink>
    </b-col>
    <b-col class="header__menu">
        <NuxtLink to="/" class="linksPrincipais">Home</NuxtLink>
        <NuxtLink to="/noticias" class="linksPrincipais">Notícias</NuxtLink>
        <NuxtLink to="/historia" class="linksPrincipais">História</NuxtLink>
        <NuxtLink to="/equipe" class="linksPrincipais">Equipe</NuxtLink>
        <NuxtLink to="/jogos" class="linksPrincipais">Jogos</NuxtLink>
    </b-col>
</div>
</template>

<script setup>
const story = await useAsyncStoryblok('config', {
  version: 'draft',
})
const header = computed(() => {
  return story.value.content.header[0]
})
</script>

<style>

    .linksPrincipais {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 1.5rem;
        
    }
    .linksPrincipais:hover {
        color: gold;
        text-decoration: overline;
    }

    .header__principal {
        display: flex;
        background-color: darkred;
        color: #FFF;
        border-bottom: black solid 3px;
    }
    .header__logo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    .header__menu {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;
    }
    .img-logo {
        width: 140px;
    }
</style>