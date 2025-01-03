import { apiSlice } from "../../../core/apis/api";

const stolenBikesApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStolenBikes: builder.query({
      query: () => ({
        url: "/v3/search",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllStolenBikesQuery } = stolenBikesApis;
