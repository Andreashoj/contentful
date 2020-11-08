<template>
  <div class="searchfield">
    <!-- SEARCHFIELD -->
    <ais-search-box>
      <div slot-scope="{ isSearchStalled, refine }">
        <input
          v-model="searchInput"
          type="search"
          @input="refine($event.currentTarget.value)"
        >
        <span :hidden="!isSearchStalled">Loading...</span>
      </div>
    </ais-search-box>

    <!-- DROPDOWN -->
    <transition>
      <div v-if="searchInput.length > 0" class="searchfield__dropdown">
        <!-- SEARCH STATS -->
        <ais-stats class="searchfield__stats">
          <p slot-scope="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
            Page {{ page + 1 }} of {{ nbPages }} with {{ hitsPerPage }} hits per page  -
            {{ nbHits }} hits retrieved in {{ processingTimeMS }}ms for <q>{{ query }}</q>
          </p>
        </ais-stats>

        <!-- SEARCHRESULT -->
        <ais-hits>
          <ul slot-scope="{ items }">
            <template v-if="items">
              <li v-for="(item, index) in items" :key="index">
                <nuxt-link :to="'/' + item.fields.slug['en-US'] + '/'">
                  {{ item.fields.title['en-US'] }}
                </nuxt-link>
              </li>
            </template>
          </ul>
        </ais-hits>
      </div>
    </transition>
  </div>
</template>
<script src="./searchfield.ts"></script>
