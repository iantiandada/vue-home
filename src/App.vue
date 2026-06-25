<template>
  <BaseLayout>
    <router-view />
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<style>
/* 全局样式可放在这里，如重置样式、body 字体等 */
body {
  font-family: "Microsoft YaHei", "SimHei", sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>