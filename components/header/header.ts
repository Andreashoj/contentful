import { searchClient } from "~/utils/search-client";
import { Vue, Component } from "nuxt-property-decorator";
import {
    AisInstantSearch,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisPagination,
    createServerRootMixin
} from "vue-instantsearch";

@Component({
    mixins: [
        createServerRootMixin({
            searchClient,
            indexName: "articles"
        })
    ],
    serverPrefetch() {
        return (this as any).instantsearch.findResultsState(this).then((algoliaState: any) => {
            this.$ssrContext.nuxt.algoliaState = algoliaState;
        });
    },
    beforeMount() {
      const results =
      this.$nuxt.context.nuxtState.algoliaState ||
      (window as any).__NUXT__.algoliaState;
      (this as any).instantsearch.hydrate(results);
    },
    components: {
        AisInstantSearch,
        AisRefinementList,
        AisHits,
        AisHighlight,
        AisSearchBox,
        AisStats,
        AisPagination
    }
})
export default class Header extends Vue {
    public searchClient: any = searchClient;
}
