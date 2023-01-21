import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "~~/gql/graphql",
      },
      plugins: [
        "typescript-msw", // オペレーション定義からMSWのハンドラを生成するプラグイン
        "typed-document-node",
      ],
      config: {
        typesPrefix: "Types.",
      },
    },
  },
};

export default config;
