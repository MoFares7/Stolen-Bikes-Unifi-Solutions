import { Box, Grid } from "@mui/material";
import notFoundImage from "../../../assets/images/notFoundImage.svg";
import colors from "../../../assets/theme/colors";
import EmptyCard from "../../../shared/components/Cards/EmptyCard";
import ErrorCard from "../../../shared/components/Cards/ErrorCard";
import MainCard from "../../../shared/components/Cards/MainCard";
import Footer from "../../../shared/components/Footer/Footer";
import MainTable from "../../../shared/components/Table/MainTable";
import HeaderStolenBikes from "../components/HeaderStolenBikes";
import useStolenBikesData from "../hooks/useStolenBikesData";
import { DateRange } from "../types/dateRangeType";

const StolenBikesContent: React.FC = () => {
  const {
    rows,
    columns,
    viewMode,
    isGetStolenBikesDataLoading,
    isGetStolenBikesDataFetching,
    isGetStolenBikesDataError,
    pageCount,
    totalResults,
    pageSize,
    pageNumber,
    handlePageChange,
    handlePageSizeChange,
    handleSearch,
    isGetStolenBikesCountLoading,
    searchTerm,
    refetchStolenBikes,
    setDateRange,
  } = useStolenBikesData();

  return (
    <Box
      sx={{
        px: 1,
        py: 1,
        m: 2,
        backgroundColor: colors.backgroundColorSecondary,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "auto",
        boxSizing: "border-box",
        gap: 2,
      }}
    >
      <HeaderStolenBikes
        onSearch={handleSearch}
        onFilter={(range: DateRange) => setDateRange(range)}
        numberOfStolen={
          isGetStolenBikesCountLoading ? "Loading..." : totalResults
        }
      />
      {isGetStolenBikesDataError ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ErrorCard handleRefresh={refetchStolenBikes} />
        </Box>
      ) : rows.length === 0 && searchTerm ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <EmptyCard />
        </Box>
      ) : viewMode === "table" ? (
        <MainTable
          columns={columns}
          rows={rows}
          isLoading={
            isGetStolenBikesDataLoading || isGetStolenBikesDataFetching
          }
        />
      ) : (
        <Grid container spacing={2}>
          {rows.map((stolen) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={stolen.id}>
              <MainCard
                image={stolen.large_img || notFoundImage}
                title={stolen.title}
                subTitle={stolen.frame_model}
                status={stolen.status || "Unknown"}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Footer
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalResults={totalResults}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        pageCount={pageCount}
      />
    </Box>
  );
};

export default StolenBikesContent;
