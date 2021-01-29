import { searchClient } from './../utils/search-client';
import { createServerRootMixin } from 'vue-instantsearch';
import { Vue, Component } from "nuxt-property-decorator"
import { VNode } from "vue";

@Component({
    data() {
        const mixin = createServerRootMixin({
            searchClient,
            indexName: "articles"
        })
        return {
            ...mixin.data()
        }
    },
    provide() {
        return {
            $_ais_ssrInstantSearchInstance: (this as any).instantsearch
        };
    },
    serverPrefetch() {
        return (this as any).instantsearch
            .findResultsState(this)
            .then((algoliaState: any) => {
                this.$ssrContext.nuxt.algoliaState = algoliaState;
            });
    },
    beforeMount() {
        const results =
            this.$nuxt.context.nuxtState.algoliaState ||
            (window as any).__NUXT__.algoliaState;
        (this as any).instantsearch.hydrate(results);
    },
})
export default class AisProvider extends Vue {
    public searchClient: any = searchClient;

    render(): VNode[] | undefined {
        if(this.$scopedSlots.default) {
            return this.$scopedSlots.default!({
                searchClient: this.searchClient
            })
        } return;
    }
}