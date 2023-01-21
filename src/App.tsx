import { useQuery } from "@apollo/client";
import { AllFilmsQueryDocument } from "./allFilmsQuery.generated";
import Film from "./Film";

function App() {
  const { data } = useQuery(AllFilmsQueryDocument, {
    variables: { first: 10, last: 10 },
  });
  return (
    <div className="App">
      {data && (
        <ul>
          {data.allFilms?.edges?.map(
            (e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
