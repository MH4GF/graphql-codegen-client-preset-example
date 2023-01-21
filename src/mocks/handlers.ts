import { mockAllFilmsQueryQuery } from "~/allFilmsQuery.generated";
import { FilmItemFragmentDoc } from "~/FilmItem.generated";
import { makeFragmentData } from "../gql";

export const handlers = [
  mockAllFilmsQueryQuery((req, res, ctx) => {
    return res(
      ctx.data({
        allFilms: {
          edges: [
            {
              node: makeFragmentData(
                {
                  id: "1",
                  title: "A New Hope",
                  releaseDate: "1977-05-25",
                },
                FilmItemFragmentDoc
              ),
            },
          ],
        },
      })
    );
  }),
];
