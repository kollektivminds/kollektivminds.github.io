---
layout: page
title: Blog Home
pagination:
    data: collections.posts
    size: 10 
    alias: posts
    reverse: true
---
<h1>{{ title }}</h1>

<ul>
  {%- for post in posts -%}
    <li>
      <a href="{{ post.url }}">"{{ post.data.title }}"</a> <i>(published {{ post.date }})</i> 
      <p>{% if post.data.teaser %}
          {{ post.data.teaser }}
      {% endif %}</p>
    </li>
  {%- endfor -%}
</ul>
---
<p>More posts can be found in <a href="{{ 'archive.html' | url }}">the archive</a>.</p>