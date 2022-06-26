<template>
    <b-pagination
        v-model="currentPage"
        :total-rows="totalJogos"
        :per-page="perPage"
        :aria-controls="ariaControls"
    ></b-pagination>
</template>

<script>
export default {
    name: "Pagination",
    props: {        
        perPage:{
            type: Number,
            default: 3,
        },
        totalJogos: {
            type: Number,
            default: 0,
        },
        ariaControls: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            currentPage: 1,
        }
    },
    watch: {
        currentPage(paginaAtual) {
            const inicio = this.perPage * paginaAtual - this.perPage
            const fim = this.perPage * paginaAtual
            this.$emit("pegar-jogos", inicio, fim)
        },
    },
}
</script>