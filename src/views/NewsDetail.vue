<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {getNewsById} from "@/http/news.ts";


const route = useRoute()
const newsId = Number(route.params.id)
const news = ref<any>(null)

onMounted(async () => {
  try {
    const data = await getNewsById(newsId)
    news.value = data
  } catch (error) {
    console.error('获取新闻详情失败', error)
  }
})
</script>

<template>
  <div class="container news-detail" v-if="news">
    <h2>{{ news.title || news.newsTitle }}</h2>
    <div class="meta">
      <span v-if="news.publishDate">发布时间：{{ news.publishDate }}</span>
      <span v-if="news.author">作者：{{ news.author }}</span>
    </div>
    <div class="content" v-html="news.content || news.newsContent"></div>
  </div>
  <div class="container" v-else>
    <p>加载中...</p>
  </div>
</template>

<style scoped>
.news-detail {
  margin-top: 30px;
}
.news-detail h2 {
  font-size: 22px;
  color: #275895;
  margin-bottom: 5px;
  text-align: center;
}
.meta {
  color: #999;
  font-size: 14px;
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
}
.content {
  line-height: 1.8;
  font-size: 16px;
}
</style>