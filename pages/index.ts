import { getCurrentPage } from './../cms/index';
import { Vue, Component } from 'nuxt-property-decorator';
import Logo from '../components/Logo';

@Component({
    components: {
        Logo
    }
})
export default class Frontpage extends Vue { 
    public page = this.$store.state.page;

    async asyncData() {
      return { page: await getCurrentPage("frontpage") };
    }
    
} 


