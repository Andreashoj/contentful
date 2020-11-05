import { Vue, Component } from 'nuxt-property-decorator';
import Logo from '../components/Logo';

@Component({
    components: {
        Logo
    },
    middleware: [
      'posts'
    ]
})
export default class Frontpage extends Vue {
    public test = "Helllo";

    mounted() {
      console.log(this.$store.state)
    }
} 


