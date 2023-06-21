import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL_TOKEN,

    headers:{
        'Authorization': `Bearer ${import.meta.env.VIT_API_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()
})