<template>
  <div>
    <layout-navigation />

    <!-- Algolia data layer -->
    <ais-provider>
      <ais-instant-search-ssr slot-scope="{ searchClient }">
        <search-bar />
        <Nuxt />
      </ais-instant-search-ssr>
    </ais-provider>
    <!----------------------->

    <layout-footer />
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { AisInstantSearchSsr } from 'vue-instantsearch'

import AisProvider from '@/provider/AisProvider'

import LayoutNavigation from '@/components/navigation/LayoutNavigation.vue'
import LayoutFooter from '@/components/footer/LayoutFooter.vue'
import SearchBar from '@/components/search/SearchBar.vue'

@Component({
  components: {
    AisProvider,
    LayoutNavigation,
    LayoutFooter,
    SearchBar,
    AisInstantSearchSsr
  }
})
export default class Layout extends Vue {}

</script>
