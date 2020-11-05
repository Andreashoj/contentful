import client from "~/plugins/contentful";
import { siteStore } from '~/store'

const cmsClient = client

export const getPosts = async () => {
    try {
        if (!cmsClient) {
            return;
        } 
        const response = await cmsClient.getEntries({
            content_type: "post"
        });
        console.log(response)
        if (response.items.length > 0) {
            siteStore.loadPosts(response.items)
        }
    } catch (err) {
        console.error(err);
    }
}
