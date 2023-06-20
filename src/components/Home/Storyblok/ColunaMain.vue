<template>
    <b-col cols="9" class="coluna-centro">
        <div class="col-centro">
            <h1 class="titulo-col-centro">{{ blok.titulo }}</h1>
            <h3 class="subtitulo-col-centro" >{{ blok.texto }}</h3>
        </div>
        <div id="meuCarrossel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li
                    v-for="(banner, index) in blok.carrossel"
                    data-target="#meuCarrossel"
                    :data-slide-to="index"
                    :class="{ active: index === 0 }"
                    interval="4000"
                >
                </li>
            </ol>
            <div class="carousel-inner">
                <div
                    v-for="(banner, index) in blok.carrossel"
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                    :key="banner._uid"
                    :style="`background-image: url(${banner.fundo.filename})`"
                >   
                    <div class="elementos-slide">
                        <h1 class="titulo-slide rounded">{{ banner.titulo }}</h1>
                        <router-link v-if="banner.rout" :to="{ path: banner.rout }" class="btn btn-lg btn-danger">{{ banner.botao }}</router-link>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#meuCarrossel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#meuCarrossel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </b-col>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            default: () => {}
        },
    },
}
</script>

<style>
    .coluna-centro{
        background-color: darkred;
        color: #FFF;
        border-radius: 20px;
        padding: 35px;
        margin: 8px;
    }
    .carousel-inner {
        height: 35rem;
    }
    .carousel-item {
        position: relative;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 35rem;
    }
    .carousel-indicators{
        justify-content: space-evenly;
        margin-left: 35%;
        margin-right: 35%;
    }
    .carousel-indicators .active {
        background-color: darkred;
    }
    .carousel-control-prev-icon,.carousel-control-next-icon {
        background-size: 30px;
        background-color: darkred;
        border-radius: 100%;
    }
    .carousel-indicators li {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        padding: 10px;
        background-color: #FFF;
        border: solid darkred 3px;
    }
    .elementos-slide{
        display: flex;
        position: absolute;
        bottom: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 50px;
        width: 100%;
    }
    .btn {
        width: fit-content;
        background-color: darkred;
        border-color: darkred;
    }
    .titulo-slide {
        background-color: darkred;
        padding: 5px;
    }
    .titulo-col-centro {
        margin-bottom: 20px;
        text-align: center;
    }
    .subtitulo-col-centro {
        margin-bottom: 20px;
    }
</style>