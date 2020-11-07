import {Component, Vue} from 'nuxt-property-decorator';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';


@Component({
    components: {
        Header,
        Footer
    }
})
export default class Layout extends Vue {
}