<template>
  <div v-if="page != null" class="container article">
    <template v-if="page.fields.headerImage != null">
      <base-image :image="page.fields.headerImage" />
    </template>
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
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  middleware: 'article'
})
export default class ViewArticle extends Vue {
  page: Object = this.$store.state.modules.page?.items[0];
}
</script>
