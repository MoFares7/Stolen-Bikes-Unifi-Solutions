// import { useState } from "react";
// import { useGetAllStolenBikesQuery } from "../services/stolenBikes_api";

// const useStoleBikesApi = () => {
//   const [page, setPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const {
//     data: stolenBikesData,
//     isLoading: isGetStolenBikesDataLoading,
//     isError: isGetStolenBikesDataError,
//   } = useGetAllStolenBikesQuery({ page, per_page: perPage });

//   return {
//     stolenBikesData,
//     isGetStolenBikesDataLoading,
//     isGetStolenBikesDataError,
//     page,
//     perPage,
//     setPerPage,
//     setPage,
//   };
// };

// export default useStoleBikesApi;
