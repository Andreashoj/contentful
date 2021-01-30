<template>
  <nav class="nav container">
    <div class="row nav__spacing">
      <div class="col-1">
        <nuxt-link to="/">
          <img class="nav__logo" src="~/assets/icons/rat.svg" alt="">
        </nuxt-link>
      </div>
      <ul class="nav__links col-lg-4">
        <li class="nav__menu-item">
          <nuxt-link to="/" class="nav__menu-link">
            Development
          </nuxt-link>
        </li>
        <li class="nav__menu-item">
          <nuxt-link to="/" class="nav__menu-link">
            Design
          </nuxt-link>
        </li>
        <li class="nav__menu-item">
          <nuxt-link to="/" class="nav__menu-link">
            Tech
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class LayoutNavigation extends Vue {}
</script>
