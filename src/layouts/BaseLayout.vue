<template>
  <div>
    <!-- 公共头部 -->
    <header>
      <div class="container header-content">
        <div class="logo">
          <h1>数学与计算科学学院</h1>
          <p>School of Mathematics & Computing Science</p>
        </div>
        <div class="search-box">
          <input type="text" placeholder="请输入关键字搜索" />
          <button type="submit">搜索</button>
        </div>
      </div>
    </header>

    <!-- 公共导航栏 -->
    <NavBar />

    <!-- 页面内容由子路由注入 -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

import NavBar from "@/comments/NavBar.vue";
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo h1 {
  font-size: 24px;
  color: #275895;
  margin-bottom: 5px;
}
.logo p {
  font-size: 14px;
  color: #666;
}
.search-box {
  display: flex;
  align-items: center;
}
.search-box input {
  width: 240px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #ccc;
  outline: none;
}
.search-box button {
  height: 36px;
  padding: 0 15px;
  background-color: #275895;
  color: white;
  border: none;
  cursor: pointer;
}
</style>