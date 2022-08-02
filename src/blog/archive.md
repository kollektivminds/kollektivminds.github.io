---
title: Archive
layout: page
eleventyExcludeFromCollections: true
pagination:
    data: collections.blog
    size: 10
    alias: posts
    reverse: true
---
# {{ title }}
___
<p>This is a list or the oldest posts. To see the newest entries, return to the <a href="/blog.html">blog home</a>.</a></p>
  {%- for post in posts | reverse -%}
  <li>
    <a href="{{ post.url }}">"{{ post.data.title }}"</a> <i>(published {{ post.date }})</i>
  </li>
  {% endfor %}
</ul>
  
  <p>
    {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">Previous</a>
    {% else %}
    Previous
    {% endif %} / 
    {% if pagination.href.next %}
    <a href="{{ pagination.href.next }}">Next</a>
    {%else %} Next
    {% endif %}
  </p>