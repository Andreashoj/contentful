import algoliasearch from "algoliasearch/lite";

export const searchClient = algoliasearch(
    (process.env.ALGOLIA_APP_ID as string),
    (process.env.ALGOLIA_SEARCH_CLIENT as string),
);
