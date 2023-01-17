import { ApolloClient, InMemoryCache } from "@apollo/client";
import { MSW_MOCK_URL } from "../../constants";

export const client = new ApolloClient({
  uri: MSW_MOCK_URL,
  cache: new InMemoryCache(),
});
