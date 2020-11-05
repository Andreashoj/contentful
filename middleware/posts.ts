import { Context } from "@nuxt/types";
import { getPosts } from '~/cms/index'

export default async (ctx: Context) => {
    const path = ctx.route.path
    if(path === "/") {
        await getPosts()
    }
}