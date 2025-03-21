<template>
<div :class="story.content.classe">
  <div class="container">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</div>

</template>

<script setup>
const { slug } = useRoute().params

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'published',
  }
)
</script>

<style lang="scss">
.links {
  height: 50px;
  position: fixed;
  display: flex;
}
.links ul {
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  width: 100%;
  margin-top: 25px;
}
.links ul li {
  margin: 0 1rem;
  padding: 1rem;
  border-bottom: solid #fff 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links ul li a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}
.links ul li a:hover {
  color: gold;
}
/* .bloco {
        width: 100vw;
        height: 100vh;
    }
    .section{
        scroll-snap-align: center;
    } */
/* #surgimento, #conquistas, #referencias {
        background-color: darkred;
    }
    #futebol, #atual {
        background-color: rgb(46, 45, 45);
    } */
.home {
  background-color: rgb(46, 45, 45);
}
.jogos {
    background-color: rgb(46, 45, 45);
}
</style>
