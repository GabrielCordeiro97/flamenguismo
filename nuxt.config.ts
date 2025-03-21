// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'LAPEP7BVUckZl6x2dLFFlAtt',
        bridge: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
  components: {
    dirs: [
      {
        path: '~/components',
        global: true,
      },
      {
        path: '~/storyblok',
        global: true,
      },
    ],
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "vue-multiselect/dist/vue-multiselect.css"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
})
