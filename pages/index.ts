import { Vue, Component } from 'nuxt-property-decorator';
import Logo from '../components/Logo';
import {createClient} from '~/plugins/contentful.js'
import { Context } from '@nuxt/types';
const client = createClient()

@Component({
    components: {
        Logo
    }
})
export default class Frontpage extends Vue {
    public test = "Helllo"

    async asyncData (ctx: Context) {
        return Promise.all([
          // fetch the owner of the blog
          client.getEntries({
            'sys.id': ctx.env.CTF_BLOG_TYPE_ID
          }),
          // fetch all blog posts sorted by creation date
          client.getEntries({
            'content_type': ctx.env.CTF_BLOG_POST_TYPE_ID,
            order: '-sys.createdAt'
          })
        ]).then(([entries, posts]) => {
          // return data that should be available
          // in the template
          return {
            person: entries.items[0],
            posts: posts.items
          }
        }).catch(console.error)
    }
} 


