<template>
<div class="header__principal">
    <b-col fluid cols="2" class="header__logo">
        <router-link to="/"> <img src="../../assets/flamenguismoLogo.png" alt="EscudoDoFlamengo" class="img-logo"> </router-link>
    </b-col>
    <b-col class="header__menu">
        <router-link to="/" class="linksPrincipais">Home</router-link>
        <router-link to="/noticias" class="linksPrincipais">Notícias</router-link>
        <router-link to="/historia" class="linksPrincipais">História</router-link>
        <router-link to="/equipe" class="linksPrincipais">Equipe</router-link>
        <router-link to="/jogos" class="linksPrincipais">Jogos</router-link>
    </b-col>
</div>
</template>

<script lang="ts">
    export default {
        name: 'HeaderMain'
    }
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