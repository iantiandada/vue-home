
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { newsList } from "@/http/news.ts";

// 各模块数据
const collegeNews = ref([]);   // 学院新闻 (category=1)
const noticeNews = ref([]);    // 通知公告 (category=2)
const academicNews = ref([]);  // 学术活动 (category=3)
const studentNews = ref([]);   // 学工新闻 (category=4)

// 通用加载函数：请求指定分类的前N条新闻
async function loadCategoryNews(category: number, targetRef: any, rows = 5) {
  try {
    const { data } = await newsList(1, rows, category);
    targetRef.value = data;
  } catch (e) {
    console.error(`加载 category ${category} 失败`, e);
  }
}

onMounted(async () => {
  // 并行请求四个分类
  await Promise.all([
    loadCategoryNews(1, collegeNews, 5),
    loadCategoryNews(2, noticeNews, 5),
    loadCategoryNews(3, academicNews, 5),
    loadCategoryNews(4, studentNews, 5)
  ]);
});
</script>

<template>
  <!-- 轮播图区域保持不变 -->
  <section class="banner">
    <img src="/top-banner.png" alt="学院横幅" style="width:100%; display:block;">
  </section>

  <!-- 内容区域 -->
  <section class="content">
    <div class="container">
      <!-- 第一行：学院新闻、中间图片、通知公告 -->
      <div class="three-column-layout">
        <!-- 学院新闻 -->
        <div class="module">
          <div class="section-header">
            <h3>学院新闻</h3>
            <span>更多 &gt;&gt;</span>
          </div>
          <ul class="news-list">
            <li v-for="news in collegeNews" :key="news.id">
              <router-link :to="'/news/' + news.id">
                {{ news.title ? news.title.substring(0, 20) : '' }}
              </router-link>
              <span>{{ news.createTime ? news.createTime.slice(0, 10) : '' }}</span>
            </li>
          </ul>
        </div>

        <!-- 中间图片 -->
        <div class="center-image">
          <img src="/22222.png" alt="学院活动照片" style="width:100%; border-radius: 5px;">
        </div>

        <!-- 通知公告 -->
        <div class="module">
          <div class="section-header">
            <h3>通知公告</h3>
            <span>更多 &gt;&gt;</span>
          </div>
          <ul class="notice-list">
            <li v-for="news in noticeNews" :key="news.id">
              <router-link :to="'/news/' + news.id">
                {{ news.title ? news.title.substring(0, 20) : '' }}
              </router-link>
              <span>{{ news.createTime ? news.createTime.slice(0, 10) : '' }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 第二行：学术活动、党建工作（留空或删除）、学工新闻 -->
      <div class="three-column-layout second-row">
        <!-- 学术活动 -->
        <div class="module">
          <div class="section-header">
            <h3>学术活动</h3>
            <span>更多 &gt;&gt;</span>
          </div>
          <ul class="news-list">
            <li v-for="news in academicNews" :key="news.id">
              <router-link :to="'/news/' + news.id">
                {{ news.title ? news.title.substring(0, 20) : '' }}
              </router-link>
              <span>{{ news.createTime ? news.createTime.slice(0, 10) : '' }}</span>
            </li>
          </ul>
        </div>

        <!-- 党建工作（若数据库无此分类，可留空或删除整个模块） -->
        <div class="module">
          <div class="section-header">
            <h3>党建工作</h3>
            <span>更多 &gt;&gt;</span>
          </div>
          <ul class="news-list">
            <!-- 暂时无数据，保留占位 -->
            <li v-for="news in []" :key="news.id">
              <router-link :to="'/news/' + news.id">{{ news.title }}</router-link>
            </li>
          </ul>
        </div>

        <!-- 学工新闻 -->
        <div class="module">
          <div class="section-header">
            <h3>学工新闻</h3>
            <span>更多 &gt;&gt;</span>
          </div>
          <ul class="notice-list">
            <li v-for="news in studentNews" :key="news.id">
              <router-link :to="'/news/' + news.id">
                {{ news.title ? news.title.substring(0, 20) : '' }}
              </router-link>
              <span>{{ news.createTime ? news.createTime.slice(0, 10) : '' }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 全局重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", "SimHei", sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

a {
  text-decoration: none;
  color: #333;
}

ul {
  list-style: none;
}

/* 通用容器 */
.container {
  width: 1200px; /* 页面总宽度 */
  margin: 0 auto;
}

/* 1. 顶部 Header 样式 */
header {
  background-color: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
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

.search-box button:hover {
  background-color: #1D3F7E;
}

/* 2. 导航栏 (沿用你的代码逻辑) */
nav {
  width: 100%;
  background-color: #275895;
}

ul.first {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

ul.second {
  width: 160px;
  background-color: #1D3F7E;
  display: none;
  position: absolute;
  top: 100%;
  z-index: 1000;
  margin-top: 0;
}

.first > li {
  height: 50px;
  line-height: 50px;
  position: relative;
}

.first > li a {
  display: block;
  padding: 0 20px;
  color: white;
  font-size: 16px;
}

.first > li:hover ul {
  display: block;
}

.second > li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #275895;
}

.second > li a {
  padding-left: 38px;
  font-size: 14px;
}

.first > li a:hover {
  background-color: #1D3F7E;
}

.second > li a:hover {
  background-color: #275895;
}

/* 3. 轮播图占位符样式 */
.banner {
  width: 1200px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.banner-placeholder {
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #666;
  border: 1px dashed #ccc;
}

.banner-placeholder h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

/* 4. 内容区域：三栏布局 (新闻 + 图片 + 公告) */
.content {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* 三栏布局容器 */
.three-column-layout {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* 左右模块通用样式 */
.module {
  width: 350px;              /* 从 355px 缩小到 350px */
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
  padding-bottom: 20px;
}

/* 中间图片容器 */
.center-image {
  width: 440px;              /* 从 450px 缩小到 440px */
  text-align: center;
  flex-shrink: 0;
}
.module:not(:last-child),
.center-image:not(:last-child) {
  margin-right: 30px;
}
.image-placeholder {
  width: 100%;
  height: 450px;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
  border-radius: 5px;
}


.image-placeholder h2 {
  font-size: 24px;
  margin-bottom: 5px;
}

/* 模块标题栏 (蓝底白字) */
.section-header {
  background-color: #275895;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-header h3 {
  font-size: 18px;
  font-weight: normal;
}

.section-header span {
  font-size: 14px;
  color: #d0d0d0;
}

/* 新闻和公告列表 */
.news-list, .notice-list {
  padding: 15px 20px;
}

/* 新闻和公告列表 */
.news-list li,
.notice-list li {
  display: flex;
  align-items: center;          /* 垂直居中 */
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #eee;
}

/* 去掉最后一项的分隔线 */
.news-list li:last-child,
.notice-list li:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* 灰色圆点（利用伪元素） */
.news-list li::before,
.notice-list li::before {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  background-color: #999;
  border-radius: 50%;
  margin-right: 8px;
  flex-shrink: 0;
}

/* 标题链接 */
.news-list a,
.notice-list a {
  flex: 1;
  font-size: 15px;
  color: #333;
  transition: color 0.3s;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-list a:hover,
.notice-list a:hover {
  color: #275895;
}

/* 日期 */
.news-list span,
.notice-list span {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}
/* 5. 底部 Footer */
footer {
  background-color: #275895;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
}

footer p {
  font-size: 14px;
}
</style>