import { Vue, Component } from "nuxt-property-decorator";
import { AisSearchBox, AisStats, AisHighlight, AisHits } from "vue-instantsearch";

@Component({
    components: {
        AisSearchBox,
        AisStats,
        AisHighlight,
        AisHits
    }
})
export default class Searchfield extends Vue {
    public searchInput: string = "";
    mounted() {
        console.log(process.env)
    }
}
