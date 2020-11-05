import { getCurrentPage } from './../cms/index';
import { Vue, Component } from 'nuxt-property-decorator';
import Logo from '../components/Logo';

@Component({
    components: {
        Logo
    }
})
export default class Frontpage extends Vue { 
    async asyncData() {
      return { page: await getCurrentPage("frontpage") };
    }
} 


