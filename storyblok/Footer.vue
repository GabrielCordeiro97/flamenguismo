<template>
    <div class="footer">
        <div class="footer__content">
            <img :src="footer.imagem.filename" class="footer__logo" alt="crf">
            <p>Copyright © 2022 Gabriel Cordeiro</p>
            <p>Este é um site não oficial criado unicamente para exercio da programação e como portifolio pessoal</p>
            <p>Não existe qualquer ligação oficial entre o Clube de Regatas do Flamengo e o criador do site</p>
        </div>
    </div>
</template>

<script setup>
const story = await useAsyncStoryblok('config', {
  version: 'draft',
})
const footer = computed(() => {
  return story.value.content.footer[0]
})
</script>


<style>
.footer {
    background-color: black;
    height: 100%;
}
.footer__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer__logo {
    width: 10%;
    height: 80%;
    margin: 10px;
}
p {
    color: white;
}
</style>