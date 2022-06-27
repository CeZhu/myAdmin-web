<template>
  <div id="layout">
    <sidebar></sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/sidebar/index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Sidebar,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
