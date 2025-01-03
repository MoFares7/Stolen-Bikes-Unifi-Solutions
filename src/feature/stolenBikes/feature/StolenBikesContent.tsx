import { Box, Grid, Grid2 } from "@mui/material";
import MainTable from "../../../shared/components/Table/MainTable";
import useStolenBikesData from "../hooks/useStolenBikesData";
import HeaderStolenBikes from "./HeaderStolenBikes";
import colors from "../../../assets/theme/colors";
import MainCard from "../../../shared/components/Cards/MainCard";
import notFoundImage from "../../../assets/images/notFoundImage.svg";
import { StolenBikeDataType } from "../types/stolenBikeDataType";

const StolenBikesContent = () => {
  const {
    ROWS,
    COLUMNS,
    isGetStolenBikesDataLoading,
    viewMode,
    isGetStolenBikesDataError,
  } = useStolenBikesData();

  if (isGetStolenBikesDataLoading) {
    return <h1>Loading</h1>;
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
      <HeaderStolenBikes />
      {viewMode === "table" ? (
        <MainTable columns={COLUMNS} rows={ROWS} />
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
    </Box>
  );
};

export default StolenBikesContent;
