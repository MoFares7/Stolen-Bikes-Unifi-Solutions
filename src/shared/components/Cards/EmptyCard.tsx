import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import notFoundItem from "../../../assets/lottie/empty.json";
import useTranslationDashboard from "../../hooks/useTranslationDashboard";
import { fonts } from "../../../assets/theme/fonts";

const SearchEmptyCard = () => {
  const { translate } = useTranslationDashboard();
  return (
    <Box
      sx={{
        px: 10,
        display: "flex",
        flexDirection: "column",
        maxWidth: 600,
        py: 2,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={notFoundItem}
        style={{ width: 200, height: 200 }}
      />

      <Box sx={{ py: 1.5 }} />
      <Typography
        sx={{
          typography: fonts.subtitle1,
          pb: 1,
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        {translate("Not Result Found")}
      </Typography>
      <Box sx={{ py: 0.5 }} />
      <Typography
        sx={{
          typography: fonts.subtitle1,
          pb: 1,
          fontWeight: 500,
          color: "text.primary",
        }}
      >
        {translate(
          "No Content Matched Your Criteria. Try Searching For Something Else"
        )}
      </Typography>
    </Box>
  );
};

export default SearchEmptyCard;
