import searchfield from '~/components/searchfield/searchfield';
import { Vue, Component } from "nuxt-property-decorator";



@Component({
    components: {
        searchfield
    }
})
export default class Header extends Vue {
}
