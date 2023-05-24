import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cli1svt4605r601uofj4197nq/master',
    cache: new InMemoryCache()
})