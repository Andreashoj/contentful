<template>
  <div class="searchfield__spacing">
    <input
      type="search"
      class="searchfield__search-input"
      placeholder="Search for article"
      @input="(e) => {
        search(e.target.value)
        $emit('input-event', e.target.value)
      }"
    >
    <span :hidden="!isSearchStalled">Loading...</span>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  props: {
    value: {
      required: true,
      type: String
    },
    isSearchStalled: {
      required: true,
      type: Boolean
    },
    search: {
      required: true,
      type: Function
    }
  }
})
export default class SearchField extends Vue {
  searchInput: string;
  search: Function;
}
</script>
