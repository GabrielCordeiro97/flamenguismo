<template>
    <b-col>
        <div class="col-direita">
            <h1>{{ blok.titulo }}</h1>
            <div v-for="jogo in currentJogos" :key="jogo._uid">
                <StoryblokComponent :blok="jogo" />
            </div>
            <Pagination
                v-if="exibirPagination"
                :per-page="pagination.perPage" 
                :total-jogos="totalJogos"
                aria-controls="my-list"
                @pegar-jogos="pegarJogos"
            />
        </div>
    </b-col>
</template>

<script>
import Pagination from "./Pagination.vue"

export default {
    props: {
        blok: {
            type: Object,
            default: () => {}
        },
    },
    components: { 
        Pagination 
    },
    data() {
        return {
            currentJogos: [],
        }
    }, 
    computed: {
        listaJogos() {
            return this.blok.conteudo[0]
        },
        pagination() {
            return this.blok.conteudo[1]
        },
        exibirPagination() {
            return this.pagination.exibir
            // EXIBE O MENU DE PAGINAÇAO NA COLUNA JOGOS
        },
        totalJogos() {
            return this.listaJogos.jogos.length
        },
    },
    mounted() {
        if (this.exibirPagination) {
            this.currentJogos = this.listaJogos.jogos.slice(0, this.pagination.perPage)
        }else{
            this.currentJogos = this.listaJogos.jogos
        }
        // SE A PAGINAÇAO ESTA ATIVA EXIBE SOMENTE OS ELEMENTOS QUE SAO DESEJADOS POR PAGINA
        // E TAMBEM O MENU DE PAGINAÇAO. SE NAO EXIBE TODA A LISTA
    },
    methods: {
        pegarJogos(inicio, fim) {
            this.currentJogos = this.listaJogos.jogos.slice(inicio, fim)
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
        padding: 10px;
    }

    .col {
        margin: 8px;
    }
</style>