<template>
  <picture class="base-image">
    <source media="(min-width: 650px)" :srcset="image.fields.file.url + '?w=800&h=400&fit=fill'" type="image/jpeg">
    <source :srcset="image.fields.file.url + '?w=400&h=200&fit=fill'" type="image/jpeg">
    <img :src="image.fields.file.url" :alt="image.fields.description">
  </picture>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    image: {
      required: true,
      type: Object
    }
  }
})
export default class ViewArticle extends Vue {
  image: Object;
}
</script>
