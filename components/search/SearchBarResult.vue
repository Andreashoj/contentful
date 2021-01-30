<template>
  <li class="search-results__item">
    <nuxt-link
      :to="'/' + item.fields.slug['en-US'] + '/'"
      class="search-results__link"
    >
      {{ item.fields.title["en-US"] }}
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    item: {
      required: true,
      type: Object
    }
  }
})
export default class SearchBarResult extends Vue {
  item: Object;
}
</script>
