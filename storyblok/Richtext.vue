<template>
    <p class="capitulo__text" v-html="richtext"></p>
</template>

<script>
import RichTextResolver from 'storyblok-js-client/source/richTextResolver'
import { computed } from 'vue'

export default {
    props: {
        texto: {
            type: Object,
            default: () => {},
        }
    },
    setup(props) {
        const richtext = computed(() => {
            const resolver = new RichTextResolver();
            return resolver.render(props.texto)
        })

        return {
            richtext,
        }
    },
}
</script>