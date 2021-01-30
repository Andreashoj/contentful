<template>
  <div class="container">
    <div class="searchfield offset-lg-3 col-lg-6 col-12">
      <!-- SEARCHFIELD -->
      <ais-search-box class="searchfield__container">
        <search-bar-input
          slot-scope="{ isSearchStalled, refine }"
          :is-search-stalled="isSearchStalled"
          :search="refine"
          :value="searchInput"
          @input-event="(input) => (searchInput = input)"
        />
      </ais-search-box>

      <!-- DROPDOWN -->
      <base-dropdown :class="{ 'is-active': searchInput.length > 0 }">
        <!-- SEARCH STATS -->
        <ais-stats class="searchfield__stats">
          <p slot-scope="{ nbHits }" class="searchfield__stats-text">
            {{ nbHits }} articles found
          </p>
        </ais-stats>
        <!-- SEARCH RESULTS -->
        <ais-hits>
          <ul slot-scope="{ items }" class="search-results">
            <template v-if="items">
              <search-bar-result
                v-for="(item, index) in items"
                :key="index"
                :item="item"
              />
            </template>
          </ul>
        </ais-hits>
      </base-dropdown>
      <!--------------------->
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {
  AisStats,
  AisHits,
  AisSearchBox
} from 'vue-instantsearch'

import SearchBarInput from '@/components/search/SearchBarInput.vue'
import SearchBarResult from '@/components/search/SearchBarResult.vue'

@Component({
  components: {
    AisSearchBox,
    AisStats,
    AisHits,
    SearchBarInput,
    SearchBarResult
  }
})
export default class SearchBar extends Vue {
  searchInput = '';
}
</script>
