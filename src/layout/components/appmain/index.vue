<template>
  <div id="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const key = computed(() => route.path);
</script>

<style scoped></style>
