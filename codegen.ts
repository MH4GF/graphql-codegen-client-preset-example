import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.tsx", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
    "./src/gql/mocks/handlers.ts": {
      preset: "import-types", // 別ファイルから型をインポートするプリセット
      presetConfig: {
        typesPath: "./../graphql",
      },
      plugins: ["typescript-msw"], // オペレーション定義からMSWのハンドラを生成するプラグイン
      config: {},
    },
  },
};

export default config;
