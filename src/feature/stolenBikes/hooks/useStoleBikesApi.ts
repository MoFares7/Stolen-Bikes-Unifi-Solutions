import {
  useGetAllStolenBikesQuery,
  useGetCountStolenBikesQuery,
} from "../services/stolenBikes_api";

const useStolenBikesAPI = (
  pageNumber: number,
  pageSize: number,
  searchTerm: string
) => {
  const {
    data: stolenBikesData,
    isLoading: isGetStolenBikesDataLoading,
    isFetching: isGetStolenBikesDataFetching,
    isError: isGetStolenBikesDataError,
    refetch: refetchStolenBikes,
  } = useGetAllStolenBikesQuery({
    page: pageNumber,
    per_page: pageSize,
    query: searchTerm,
  });

  const { data: stolenBikesCount, isLoading: isGetStolenBikesCountLoading } =
    useGetCountStolenBikesQuery({});

  return {
    stolenBikesData,
    stolenBikesCount,
    isGetStolenBikesDataLoading,
    isGetStolenBikesDataFetching,
    isGetStolenBikesDataError,
    isGetStolenBikesCountLoading,
    refetchStolenBikes,
  };
};

export default useStolenBikesAPI;
