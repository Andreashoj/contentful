<template>
  <div v-if="page != null">
    <h1>{{ page.fields.title }}</h1>
    <p>{{ page.fields.author }}</p>
  </div>
</template>
<script src="./article.ts"></script>
