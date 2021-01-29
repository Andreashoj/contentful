<template>
  <main class="container">
    <div class="search-section row">
      <h1 class="sr-only">
        {{ page.displayField }}
      </h1>
    </div>
  </main>
</template>
<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator'
import { getCurrentPage } from '../../cms/index'

@Component
export default class Frontpage extends Vue {
  async asyncData () {
    return { page: await getCurrentPage('frontpage') }
  }
}

</script>
