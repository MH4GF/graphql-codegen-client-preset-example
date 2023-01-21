import { FilmItemFragmentDoc } from "./FilmItem.generated";
import { FragmentType, useFragment } from "./gql/fragment-masking";

const Film = (props: { film: FragmentType<typeof FilmItemFragmentDoc> }) => {
  const film = useFragment(FilmItemFragmentDoc, props.film);
  return (
    <div>
      <h3>{film.title}</h3>
      <p>{film.releaseDate}</p>
    </div>
  );
};

export default Film;
