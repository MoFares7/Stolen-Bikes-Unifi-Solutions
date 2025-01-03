import useDateRange from "./useDateRange";
import usePaginationSearch from "../../../shared/hooks/usePaginationSearch";
import { useAppSelector } from "../../../shared/hooks/useSelectors";
import useStolenBikesAPI from "./useStoleBikesApi";
import useFilteredBikes from "./useFilteredBikes";
import useTableData from "./useTableData";

const useStolenBikesData = () => {
  const { dateRange, setDateRange } = useDateRange();
  const viewMode = useAppSelector((state) => state.viewMode.viewMode);

  const {
    pageSize,
    pageNumber,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
    searchTerm,
  } = usePaginationSearch();

  const {
    stolenBikesData,
    stolenBikesCount,
    isGetStolenBikesDataLoading,
    isGetStolenBikesDataFetching,
    isGetStolenBikesDataError,
    isGetStolenBikesCountLoading,
    refetchStolenBikes,
  } = useStolenBikesAPI(pageNumber, pageSize, searchTerm);

  const bikes = stolenBikesData?.bikes || [];
  const filteredBikes = useFilteredBikes(bikes, dateRange);
  const { rows, columns } = useTableData(filteredBikes);

  const totalResults = stolenBikesCount?.bikes.length || 0;
  const pageCount = Math.ceil(totalResults / pageSize);

  return {
    rows,
    columns,
    viewMode,
    isGetStolenBikesDataLoading,
    isGetStolenBikesDataError,
    pageCount,
    totalResults,
    pageSize,
    pageNumber,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
    stolenBikesCount,
    searchTerm,
    isGetStolenBikesCountLoading,
    isGetStolenBikesDataFetching,
    refetchStolenBikes,
    dateRange,
    setDateRange,
  };
};

export default useStolenBikesData;
