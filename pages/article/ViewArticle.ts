import { Vue, Component } from 'nuxt-property-decorator'

@Component({
    middleware: 'article'
})
export default class ViewArticle extends Vue {
    public page: any = this.$store.state.modules.page?.items[0];
}