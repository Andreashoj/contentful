<template>
  <li class="tagbar__item">
    <a
      class="tagbar__link"
      :href="url(item)"
      :class="{'is-active': item.isRefined}"
      @click.prevent="search(item.value)"
    >
      {{ item.isRefined ? '&#10005;' : '' }}
      <ais-highlight attribute="item" :hit="item" />
      <!-- Item count -->
      <!-- ({{ item.count.toLocaleString() }}) -->
    </a>
  </li>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { AisHighlight } from 'vue-instantsearch'

@Component({
  props: {
    item: {
      required: true,
      type: Object
    },
    search: {
      required: true,
      type: Function
    },
    url: {
      required: true,
      type: Function
    }
  },
  components: {
    AisHighlight
  }
})
export default class TagBar extends Vue {
    item: Object;
}
</script>
