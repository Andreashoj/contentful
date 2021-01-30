<template>
  <main class="container">
    <div class="search-section row">
      <ais-hits>
        <ul slot-scope="{ items }">
          <li v-for="item in items" :key="item.objectID">
            {{ item.fields.title["en-US"] }}
          </li>
        </ul>
      </ais-hits>
    </div>
  </main>
</template>
<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator'
import { getCurrentPage } from '../../cms/index'

import { AisHits } from 'vue-instantsearch'

@Component({
  components: {
    AisHits
  }
})
export default class Frontpage extends Vue {
  async asyncData () {
    return { page: await getCurrentPage('frontpage') }
  }
}
</script>
