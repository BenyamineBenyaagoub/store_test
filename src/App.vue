<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
/* @ts-ignore */
import Header from "@/components/Header.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "App",
  components: {
    Header,
  },
});
</script>
