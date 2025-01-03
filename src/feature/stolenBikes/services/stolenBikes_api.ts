import { apiSlice } from "../../../core/apis/api";

const stolenBikesApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStolenBikes: builder.query({
      query: ({ page, per_page, query }) => ({
        url: "/v3/search",
        method: "GET",
        params: {
          page,
          per_page,
          query,
        },
      }),
    }),
    getCountStolenBikes: builder.query({
      query: () => ({
        url: "/v3/search",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllStolenBikesQuery, useGetCountStolenBikesQuery } =
  stolenBikesApis;
