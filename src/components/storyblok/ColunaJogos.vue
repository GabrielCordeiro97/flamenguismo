<template>
    <b-col>
        <div class="col-direita">
            <h1>{{ blok.titulo }}</h1>
            <div v-for="jogo in currentJogos" :key="jogo._uid">
                <StoryblokComponent :blok="jogo" />
            </div>
            <b-pagination
                v-model="currentPage"
                :total-rows="totalJogos"
                :per-page="perPage"
                aria-controls="my-list"
            ></b-pagination>
        </div>
    </b-col>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            currentJogos: [],
        }
    },
    computed: {
        totalJogos() {
            return this.blok.jogos.length
        },
    },
    mounted() {
        this.currentJogos = this.blok.jogos.slice(0, this.perPage)
    },
    watch: {
        currentPage(paginaAtual) {
            const inicio = this.perPage * paginaAtual - this.perPage
            const fim = this.perPage * paginaAtual
            this.currentJogos = this.blok.jogos.slice(inicio, fim)
        },
    },
}
</script>

<style>
    .col-direita {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
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