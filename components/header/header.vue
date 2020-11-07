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
      <searchfield />
    </ais-instant-search>
  </nav>
</template>
<script src="./header.ts"></script>
