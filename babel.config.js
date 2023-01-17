const { babelOptimizerPlugin } = require("@graphql-codegen/client-preset");

module.exports = {
  plugins: [[babelOptimizerPlugin, { artifactDirectory: "./src/gql", gqlTagName: "graphql" }]],
};
