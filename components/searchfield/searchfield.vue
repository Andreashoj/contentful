<template>
  <div class="searchfield offset-3 col-lg-6 col-12">
    <!-- SEARCHFIELD -->
    <ais-search-box class="searchfield__container">
      <div class="searchfield__spacing" slot-scope="{ isSearchStalled, refine }">
        <input
          v-model="searchInput"
          type="search"
          class="searchfield__search-input"
          @input="refine($event.currentTarget.value)"
          placeholder="Search for article"
        >
        <span :hidden="!isSearchStalled">Loading...</span>
      </div>
    </ais-search-box>

    <!-- DROPDOWN -->
    <div class="searchfield__dropdown" :class="{'is-active': searchInput.length > 0}">
      <!-- SEARCH STATS -->
      <ais-stats class="searchfield__stats">
        <p class="searchfield__stats-text" slot-scope="{ nbHits }">
          {{ nbHits }} articles found
        </p>
      </ais-stats>

      <!-- SEARCHRESULT -->
      <ais-hits>
        <ul slot-scope="{ items }" class="searchfield__list">
          <template v-if="items">
            <li v-for="(item, index) in items" :key="index" class="searchfield__list-item">
              <nuxt-link :to="'/' + item.fields.slug['en-US'] + '/'" class="searchfield__list-link">
                {{ item.fields.title['en-US'] }}
              </nuxt-link>
            </li>
          </template>
        </ul>
      </ais-hits>
    </div>
  </div>
</template>
<script src="./searchfield.ts"></script>
