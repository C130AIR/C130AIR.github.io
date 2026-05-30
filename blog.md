---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 3c041fe1738ba2bde15a4dc9097ec384_4e038a7f5be511f19299525400d9a7a1
    ReservedCode1: k+TL6f/yymSntwRO0Bruo4EUk/3xfH+PYMW0hMJ6a4snVNNgnLGao0AATB8ZTMGnhQ8FE3mFFoDZO3cHfXvvZM27i/yIyKn/ujCQMxBmi7o4xh/Yu2xOcNWHNF8+q0tK0mACbP4Y1i/U6oWKVTm6Z7IbNMJ/7V1enq8pzT+ey0dwWteqOlLwUGb83/o=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 3c041fe1738ba2bde15a4dc9097ec384_4e038a7f5be511f19299525400d9a7a1
    ReservedCode2: k+TL6f/yymSntwRO0Bruo4EUk/3xfH+PYMW0hMJ6a4snVNNgnLGao0AATB8ZTMGnhQ8FE3mFFoDZO3cHfXvvZM27i/yIyKn/ujCQMxBmi7o4xh/Yu2xOcNWHNF8+q0tK0mACbP4Y1i/U6oWKVTm6Z7IbNMJ/7V1enq8pzT+ey0dwWteqOlLwUGb83/o=
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
*（内容由AI生成，仅供参考）*
