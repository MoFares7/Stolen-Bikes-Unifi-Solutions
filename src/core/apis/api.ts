import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getValue } from "../storage/storage";

export const BASE_URL = "https://staging.glowy.uranuslink.com";
const token = "";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,

    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      if (token) headers.set("x-tenant-id", token);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
