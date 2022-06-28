<template>
  <div id="layout">
    <Sidebar></Sidebar>
    <Appmain></Appmain>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/sidebar/index.vue";
import Appmain from "./components/appmain/index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Sidebar,
    Appmain,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
