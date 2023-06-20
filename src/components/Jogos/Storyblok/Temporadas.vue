<template>
    <div class="div-principal">
        <div class="grupo-multiselect">
            <div>
                <label class="label-filtros" for="ano">Ano</label>
                <multiselect
                    v-model="filtros.anos"
                    id="ano"
                    :options="optionsAnos"
                    multiple
                    :close-on-select="false"
                    placeholder="Escolha um Ano"
                />
            </div>
            
            <div>
                <label class="label-filtros" for="campeonato">Campeonato</label>
                <multiselect
                    id="campeonato"
                    v-model="filtros.camps"
                    :options="optionsCamps"
                    multiple
                    :close-on-select="false"
                    placeholder="Escolha um Campeonato"
                />
            </div>

            <div>
                <label class="label-filtros" for="status">Status do time no campeonato</label>
                <multiselect
                    v-model="filtros.status"
                    :options="optionsStatus"
                    multiple
                    :close-on-select="false"
                    placeholder="Escolha um status"
                />
            </div>
        </div>
        <div 
            v-for="resultado in resultadoFiltro" :key="resultado._uid"
            class="resultados"
        >
            <h1 class="titulo-resultado">{{ resultado.titulo }}</h1>
            <div class="espaço-cards">
                <div
                    v-for="campeonato in resultado.camps"
                    class="card-camp"
                    :class="campeonato.status"
                    :style="`background-image: url(${campeonato.fundo.filename})`"
                >
                    <p>{{ campeonato.titulo }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            default: () => {}
        },
    },
    data() {
        return {
            resultadoFiltro: [],
            filtros: {
                anos: [],
                camps: [],
                status: [],
            },
        }
    },
    computed: {
        optionsAnos() {
            const options = []
            this.blok.historico.forEach((ano) => options.push(ano.titulo))
            return options
        },
        optionsCamps() {
            return ['Campeonato Carioca',
                    'Campeonato Brasileiro',
                    'Copa do Brasil',
                    'Copa Libertadores da America',
                    'Copa do Mundo de Clubes da FIFA']
        },
        optionsStatus() {
            return ['competindo', 
                    'eliminado',
                    'campeao']
        },
        
    },
    mounted() {
        this.resultadoFiltro = this.blok.historico
    },
    watch: {
        'filtros': {
            handler: function () {
                this.filtrar()
            },
            deep: true
        },
    },
    methods: {
        filtrar() {
            this.resultadoFiltro = []
            // // if filtro vazio
            if (
                !this.filtros.anos.length && !this.filtros.camps.length && !this.filtros.status.length
            ) {
                this.resultadoFiltro = this.blok.historico
            } else {
                // referente a cada ano
                let anoAux = {
                    titulo: '',
                    camps: [],
                }
                this.blok.historico.forEach((ano) => {
                    ano.camps.forEach((campeonato) => {
                        if (
                            //filtro triplo
                            (
                                this.filtros.anos.includes(ano.titulo) &&
                                this.filtros.camps.includes(campeonato.camp) &&
                                this.filtros.status.includes(campeonato.status)
                            ) ||
                            //filtro só pra ano
                            (
                                this.filtros.anos.includes(ano.titulo) &&
                                !this.filtros.camps.length && !this.filtros.status.length
                            ) ||
                            // filtro só pra campeonato
                            (
                                this.filtros.camps.includes(campeonato.camp) &&
                                !this.filtros.anos.length && !this.filtros.status.length
                            ) ||
                            //filtro só pra status
                            (
                                this.filtros.status.includes(campeonato.status) &&
                                !this.filtros.anos.length && !this.filtros.camps.length
                            ) ||
                            // filtro pra ano e campeonato
                            (
                                this.filtros.anos.includes(ano.titulo) &&
                                this.filtros.camps.includes(campeonato.camp) &&
                                !this.filtros.status.length
                            ) ||
                            //filtro pra ano e status
                            (
                                this.filtros.anos.includes(ano.titulo) &&
                                this.filtros.status.includes(campeonato.status) &&
                                !this.filtros.camps.length
                            ) ||
                            //filtro pra campeonato e status
                            (
                                this.filtros.camps.includes(campeonato.camp) &&
                                this.filtros.status.includes(campeonato.status) &&
                                !this.filtros.anos.length
                            )
                        ) {
                            // se o ano nao foi "nomeado"
                            if (!anoAux.titulo) {
                                anoAux.titulo = ano.titulo
                            }
                            //empurra mais um campeonato pra lista de campeonatos do ano
                            anoAux.camps.push(campeonato)
                        }
                    })
                    // verifica se o ano tem algum resultado de acordo com o filtro
                    if (anoAux.titulo) {
                        this.resultadoFiltro.push(anoAux)
                    }
                    // limpa a variavel anoAux a cada ano
                    anoAux = {
                        titulo: '',
                        camps: [],
                    }
                })
            }
        },
    },
}
</script>

<style>
.div-principal {
    width: 100%;
}
.grupo-multiselect {
    display: flex;
    justify-content: space-between;
}
.label-filtros {
    color: white;
    margin-top: 30px;
    font-size: 1.5rem;
}
.multiselect {
    width: 400px;
    margin-top: 10px;
    margin-bottom: 30px;
}
.titulo-resultado {
    display: flex;
    color: rgb(138, 138, 138);
    margin-top: 30px;
    margin-bottom: 5px;
    justify-content: center;
    font-size: 4rem;
}
.resultados {
    width: 100%;
}
.espaço-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}
.card-camp {
    background-repeat: no-repeat;
    width: 325px;
    height: 325px;
    background-size: 100% 100%;
    margin-right: 10px;
    border-radius: 10px;
}
.eliminado {
    filter: grayscale(90%);
}
/* .competindo {
    filter: contrast(120%) brightness(1.1);
    
} */
.campeao {
    filter: contrast(120%) brightness(1.1);
    border: solid 3px rgb(255, 251, 0);
    height: 350px;
    width: 350px;
}
</style>