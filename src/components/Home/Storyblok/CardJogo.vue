<template>
<article class="card" :class="{ 'vitoria': blok.vitoria,
                                'empate': blok.empate,
                                'derrota': blok.derrota }" 
                      :style="`background-image: url(${blok.foto.filename})`">
  <div class="card__content">
    <h3 class="card__title">{{ blok.mandante }} x {{ blok.visitante }}</h3>
    <span class="card__subtitle">
      {{ blok.resultado_mandante }} - {{ blok.resultado_visitante }}
    </span>
    <p class="card__description">{{ blok.descricao }}</p>
  </div>
</article>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style>
.card {
  position: relative;
  width: 250px;
  height: 225px;
  color: darkred;
  background-size: 250px 225px;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  
}
.vitoria { 
  border: 6px solid rgb(0, 250, 0);
}
.empate {
  border: 6px solid rgb(146, 146, 146);
}
.derrota {
  border: 6px solid rgb(250, 0, 0);
}
.card__content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transform: translateY(100px);
  transition: transform .25s;
}

.card__title {
  color: darkred;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
}

.card__subtitle {
  display: block;
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 700;
}
.card__description {
  font-size: 0.9rem;
  text-align: justify;
  opacity: 0;
  transition: opacity .5s;
  color: darkred;
  font-weight: 700;
}
.card:hover .card__content {
  transform: translateY(0);
}
.card:hover .card__description {
  opacity: 1;
  transition-delay: .25s;
}
</style>

<!-- https://colunadofla.com/wp-content/uploads/2020/10/flamengo-x-goias-brasileirao-maracana.jpg -->