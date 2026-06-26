<template>
  <nav>
    <ul class="first">
      <li><router-link to="/">首页11</router-link></li>
      <li>
        <a href="#">学院概况</a>
        <ul class="second">
          <li><a href="#">学院简介</a></li>
          <li><a href="#">现任领导</a></li>
          <li><a href="#">组织机构</a></li>
          <li><a href="#">办事指南</a></li>
        </ul>
      </li>
      <li>
        <a href="#">师资队伍</a>
        <ul class="second">
          <li><a href="#">师资队伍简介</a></li>
          <li><a href="#">博士硕士导师</a></li>
          <li><a href="#">按教师所在部门</a></li>
        </ul>
      </li>
      <li>
        <a href="#">本科生教育</a>
        <ul class="second">
          <li><a href="#">本科生教育</a></li>
          <li><a href="#">创新创业</a></li>
        </ul>
      </li>
      <li>
        <a href="#">研究生教育</a>
        <ul class="second">
          <li><a href="#">学习年度重点建设</a></li>
        </ul>
      </li>
      <li>
        <a href="#">科学研究</a>
        <ul class="second">
          <li><a href="#">科研平台</a></li>
          <li><a href="#">研究团队</a></li>
          <li><a href="#">科研项目</a></li>
        </ul>
      </li>
      <li>
        <a href="#">党建工作</a>
        <ul class="second">
          <li><a href="#">支部设置</a></li>
          <li><a href="#">专题活动</a></li>
          <li><a href="#">理论学习</a></li>
          <li><a href="#">基层动态</a></li>
        </ul>
      </li>
      <li>
        <a href="#">学生工作</a>
        <ul class="second">
          <li><a href="#">学生活动</a></li>
          <li><a href="#">通知公告</a></li>
          <li><a href="#">就业指导</a></li>
          <li><a href="#">易班动态</a></li>
        </ul>
      </li>
      <li><a href="#">人才招聘</a></li>
      <li><a href="#">理论学习</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  background-color: #275895;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul.first {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
ul.second {
  width: 160px;
  background-color: #1d3f7e;
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
  background-color: #1d3f7e;
}
.second > li a:hover {
  background-color: #275895;
}
</style>