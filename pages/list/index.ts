
import { getCurrentPage } from '../../cms/index';
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Frontpage extends Vue { 
    async asyncData() {
      return { page: await getCurrentPage("frontpage") };
    }
} 


