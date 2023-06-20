<template>
    <div class="home">
        <b-container>
            <b-row class="row-main">
                <StoryblokComponent v-if="story" class="flex" :blok="story.content" />
            </b-row>
        </b-container>
    </div>
</template>

<script setup>
import { useStoryblok } from "@storyblok/vue";
const story = await useStoryblok('home', { version: 'draft' });
</script>

<style>
.home {
    background-color: rgb(46, 45, 45);
}
</style>