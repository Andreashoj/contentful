import { Context } from "@nuxt/types";
import { getArticle } from '~/cms/index'

export default async (ctx: Context) => {
    const path = ctx.route.path
    const article = path.split("/").filter(path => path != "")[0]
    await getArticle(article)
}