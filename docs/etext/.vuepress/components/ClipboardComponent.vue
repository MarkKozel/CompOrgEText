Copyright © VuePress Community
Link: https://vuepress.github.io/en/plugins/copyright/

<template>
  <div>
    <p>
This work is licensed under a Creative Commons Attribution 4.0 International License
See <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">

      <a :href="location">{{ location }}</a>
    </p>
    <div v-html="html" />
  </div>
</template>

<script>
export default {
  props: ['html'],

  created() {
    this.location = window.location
  },
}
</script>