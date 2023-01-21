import { mockAllFilmsWithVariablesQueryQuery } from "~/App.generated";
import { FilmFragment } from "../Film";
import { makeFragmentData } from "../gql";

export const handlers = [
  mockAllFilmsWithVariablesQueryQuery((req, res, ctx) => {
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
                FilmFragment
              ),
            },
          ],
        },
      })
    );
  }),
];
