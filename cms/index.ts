import client from "~/plugins/contentful";
import { siteStore } from '~/store'

const cms = client;

export const getPosts = async () => {
    try {
        if (!cms) {
            return;
        } 
        const response = await cms.getEntries({
            content_type: "post"
        });
        if (response.items.length > 0) {
            siteStore.loadPosts(response.items)
        }
    } catch (err) {
        console.error(err);
    }
}

export const getCurrentPage = async (currentPage: string) => {
    try {
        if(!cms) {
            return;
        }
        const response = await cms.getContentType(currentPage);
        if(response) {
            return response;
        } return;
    } catch(err) {
        console.error(err)
        return;
    }
}

export const getArticles = async () => {
    try {
        if(!cms) {
            return;
        }
        const response = await cms.getEntries({
            content_type: "article"
        });
        if(response) {
            return response;
        } return;
    } catch(err) {
        console.error(err)
        return;
    }
}
