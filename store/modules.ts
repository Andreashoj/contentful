import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
    name: 'PageModule',
    stateFactory: true,
    namespaced: false,
  })
export default class PageModule extends VuexModule {
    public page: any = null;
    public posts: any = null;

    @Mutation 
    setPosts(posts: any) {
        this.posts = posts;
    }

    @Mutation 
    setPage(page: any) {
        this.page = page;
    }

    @Action
    async loadPosts(posts: any) {
        this.setPosts(posts)
    }

    @Action
    async loadPage(page: any) {
        this.setPage(page)
    }
}