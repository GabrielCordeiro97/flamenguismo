<template>
<section :id="blok.id" class="capitulo" :class="`fundo-${blok.fundo}`">
    <h3 class="capitulo__title">{{ blok.titulo }}</h3>
    <p class="capitulo__text" v-html="richtext"></p>
</section>
</template>

<script>
import RichTextResolver from 'storyblok-js-client/source/richTextResolver'
import { computed } from 'vue'

export default {
    props: {
        blok: {
            type: Object,
            default: () => {}
        }
    },
    setup(props) {
        const richtext = computed(() => {
            const resolver = new RichTextResolver();
            return resolver.render(props.blok.texto)
        })

        return {
            richtext,
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