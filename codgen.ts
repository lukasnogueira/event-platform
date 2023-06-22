
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/cli1svt4605r601uofj4197nq/master",
  documents: "./src/graphQL/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "./src/graphQL/generation.ts/": {
      preset: "client",
  plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
  config: {
    withComponent: false,
    reactApolloVersion: 3,
    withHOC: false,
    withHooks: true
  },
    },
  }
};

export default config;
