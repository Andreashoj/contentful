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
          <template slot="item" slot-scope="{ item }">
            <p>
              <ais-highlight attribute="fields.author.en-US" :hit="item" />
            </p>
          </template>
        </ais-hits>
      </div>
    </transition>
  </div>
</template>
<script src="./searchfield.ts"></script>
