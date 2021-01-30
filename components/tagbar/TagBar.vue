<template>
  <div class="container">
    <ais-provider>
      <ais-refinement-list
        slot-scope="{ sortingValue }"
        :attribute="sortingValue"
      >
        <div slot-scope="{ items, refine, createURL }" class="tagbar">
          <ul v-if="items" class="tagbar__list offset-lg-3 col-lg-6 col-12">
            <tag-bar-item
              v-for="item in items"
              :key="item.value"
              :item="item"
              :search="refine"
              :url="createURL"
            />
          </ul>
        </div>
      </ais-refinement-list>
    </ais-provider>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { AisRefinementList } from 'vue-instantsearch'

import AisProvider from '@/providers/AisProvider'
import TagBarItem from '@/components/tagbar/TagBarItem.vue'

@Component({
  components: {
    AisRefinementList,
    AisProvider,
    TagBarItem
  }
})
export default class TagBar extends Vue {}
</script>
