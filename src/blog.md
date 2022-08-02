---
layout: page
title: Blog
pagination:
    data: collections.blog
    size: 10 
    alias: posts
    reverse: true
---
# {{ title }}
___
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
<p>More posts can be found in <a href="{{ 'blog/archive.html' | url }}">the archive</a>.</p>