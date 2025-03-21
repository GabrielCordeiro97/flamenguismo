<template>
    <b-pagination
        v-model="currentPage"
        :total-rows="totalJogos"
        :per-page="perPage"
        :aria-controls="ariaControls"
        :limit="3"
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
        },
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

<style>
.page-link {
    color: red;
}
.page-item.active .page-link{
    background-color: darkred;
    border-color: red;
}
</style>