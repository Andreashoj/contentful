<template>
  <div class="dropdown">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BaseDropdown extends Vue {}
</script>
