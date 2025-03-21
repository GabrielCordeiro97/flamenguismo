<template>
    <section :id="blok.id" class="capitulo" :class="`fundo-${blok.fundo}`">
        <h3 class="capitulo__title">{{ blok.titulo }}</h3>
    </section>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            default: () => { }
        }
    },
}
</script>

<style>
.capitulo {
        width: 100vw;
        height: 100vh;
        padding-left: 300px;
    }
section{
    scroll-snap-align: center;
}
.fundo-vermelho {
    background-color: darkred;
}
.fundo-preto {
    background-color: rgb(46, 45, 45);
}
</style>