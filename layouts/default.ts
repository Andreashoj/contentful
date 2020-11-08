import {Component, Vue} from 'nuxt-property-decorator';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';
import { AisInstantSearchSsr, createServerRootMixin } from "vue-instantsearch";
import { searchClient } from "~/utils/search-client";



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
    components: {
        Header,
        Footer,
        AisInstantSearchSsr
    }
})
export default class Layout extends Vue {
    public searchClient: any = searchClient;
}