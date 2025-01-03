import { useGetAllStolenBikesQuery } from "../services/stolenBikes_api";

const useStoleBikesApi = () => {
  const {
    data: stolenBikesData,
    isLoading: isGetStolenBikesDataLoading,
    isError: isGetStolenBikesDataError,
  } = useGetAllStolenBikesQuery({});

  return {
    stolenBikesData,
    isGetStolenBikesDataLoading,
    isGetStolenBikesDataError,
  };
};

export default useStoleBikesApi;
