<template>
  <div class="searchfield__spacing">
    <label class="sr-only" for="searchbar-input">Searchbar</label>
    <input
      id="searchbar-input"
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
export default class SearchField extends Vue {}
</script>
