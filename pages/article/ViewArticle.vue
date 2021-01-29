<template>
  <div v-if="page != null" class="container article">
    <div v-if="page.fields.headerImage != null">
      <img class="article__header-image" :src="page.fields.headerImage.fields.file.url + '?w=1000&h=400&fit=crop&r=5'" :alt="page.fields.headerImage.fields.description">
    </div>
    <div class="article__content-container">
      <h1 v-if="page.fields.title" class="article__title">
        {{ page.fields.title }}
      </h1>
      <div class="article__details">
        <p v-if="page.fields.author && page.fields.createdAt">
          {{ page.fields.author }} {{ page.fields.createdAt }}
        </p>
      </div>
    </div>
  </div>
</template>
<script src="./ViewArticle.ts"></script>
