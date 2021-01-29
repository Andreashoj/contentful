<template>
  <div class="container">
    <div class="searchfield offset-lg-3 col-lg-6 col-12">
      <!-- SEARCHFIELD -->
      <ais-search-box class="searchfield__container">
        <template slot-scope="{ isSearchStalled, refine }">
          <search-bar-input
            :search="refine"
            :is-search-stalled="isSearchStalled"
            :value="searchInput"
            @input-event="(input) => searchInput = input"
          />
        </template>
      </ais-search-box>

      <!-- DROPDOWN -->

      <div
        class="searchfield__dropdown"
        :class="{ 'is-active': searchInput.length > 0 }"
      >

        <ais-stats class="searchfield__stats">
          <p slot-scope="{ nbHits }" class="searchfield__stats-text">
            {{ nbHits }} articles found
          </p>
        </ais-stats>


        <ais-hits>
          <ul slot-scope="{ items }" class="searchfield__list">
            <template v-if="items">
              <li
                v-for="(item, index) in items"
                :key="index"
                class="searchfield__list-item"
              >
                <nuxt-link
                  :to="'/' + item.fields.slug['en-US'] + '/'"
                  class="searchfield__list-link"
                >
                  {{ item.fields.title["en-US"] }}
                </nuxt-link>
              </li>
            </template>
          </ul>
        </ais-hits>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {
  AisStats,
  AisHighlight,
  AisHits,
  AisSearchBox
} from 'vue-instantsearch'

import SearchBarInput from '@/components/search/SearchBarInput.vue'

@Component({
  components: {
    AisSearchBox,
    AisStats,
    AisHighlight,
    AisHits,
    SearchBarInput
  }
})
export default class SearchBar extends Vue {
  searchInput = '';
}
</script>
