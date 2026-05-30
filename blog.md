---
layout: default
title: 博客文章
---



<h1>📝 所有文章</h1>

<div class="post-list">
  {% for post in site.posts %}
  <article class="post-preview">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <time>{{ post.date | date: "%Y年%m月%d日" }}</time>
    <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
    <a href="{{ post.url }}" class="read-more">阅读全文 →</a>
  </article>
  {% endfor %}
</div>

<style>
.post-list {
  margin-top: 2rem;
}
.read-more {
  color: #4ecdc4;
  text-decoration: none;
}
</style>

