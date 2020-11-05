import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
    name: 'PageModule',
    stateFactory: true,
    namespaced: false,
  })
export default class PageModule extends VuexModule {

    public posts: any = null;

    @Mutation 
    setPosts(posts: any) {
        this.posts = posts;
    }

    @Action
    async loadPosts(posts: any) {
        this.setPosts(posts)
    }
}