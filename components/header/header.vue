<template>
  <nav class="nav container">
    <!-- <h2 class="nav__title">
      Header
    </h2>
    <div class="nav__searchfield">
      <label class="sr-only" for="searchfield">Searchfield</label>
      <input id="searchfield" type="text" placeholder="Search for post">
    </div> -->
    <ais-instant-search :search-client="searchClient" index-name="articles">
      <ais-search-box />
      <ais-stats />
      <ais-refinement-list attribute="fields.author.en-US" />
      <ais-hits>
        <template slot="item" slot-scope="{ item }">
          <p>
            <ais-highlight attribute="fields.author.en-US" :hit="item" />
          </p>
        </template>
      </ais-hits>
      <ais-pagination />
    </ais-instant-search>
  </nav>
</template>
<script src="./header.ts"></script>
