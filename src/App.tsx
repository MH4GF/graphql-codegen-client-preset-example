import { useQuery } from '@apollo/client';
import { graphql } from './gql/gql'; // 生成されたコードから `graphql()` をimport

import Film from './Film';

// GraphQLで取得したい内容を定義
// ここで定義した内容はTypedDocumentNode(後述)として型付けされる
const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          ...FilmItem
        }
      }
    }
  }
`);

function App() {
  // ほとんどのGraphQLクライアントはTypedDocumentNodeを扱う方法を知っている
  // ドキュメントをuseQueryに渡すだけで、返却されるdataや第二引数で渡すvariablesも型付けがされている！
  const { data } = useQuery(allFilmsWithVariablesQueryDocument, { variables: { first: 10 } });
  return (
    <div className="App">
      {data && <ul>{data.allFilms?.edges?.map((e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />)}</ul>}
    </div>
  );
}

export default App;