import { Box, Grid } from "@mui/material";
import notFoundImage from "../../../assets/images/notFoundImage.svg";
import colors from "../../../assets/theme/colors";
import MainCard from "../../../shared/components/Cards/MainCard";
import MainTable from "../../../shared/components/Table/MainTable";
import HeaderStolenBikes from "../components/HeaderStolenBikes";
import useStolenBikesData from "../hooks/useStolenBikesData";
import Footer from "../../../shared/components/Footer/Footer";
import EmptyCard from "../../../shared/components/Cards/EmptyCard";

const StolenBikesContent = () => {
  const {
    ROWS,
    COLUMNS,
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
    isGetStolenBikesCountLoading,
    searchTerm,
  } = useStolenBikesData();

  if (ROWS?.length === 0 && searchTerm) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 10,
        }}
      >
        <EmptyCard />
      </Box>
    );
  }

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
        numberOfStolen={
          isGetStolenBikesCountLoading ? "Loading..." : totalResults
        }
      />
      {viewMode === "table" ? (
        <MainTable
          columns={COLUMNS}
          rows={ROWS}
          isLoading={isGetStolenBikesDataLoading}
        />
      ) : (
        <Grid container spacing={2}>
          {ROWS.map((stolen) => (
            <Grid item xs={12} sm={4} md={6} lg={2.4}>
              <MainCard
                image={stolen.large_img ? stolen.large_img : notFoundImage}
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
