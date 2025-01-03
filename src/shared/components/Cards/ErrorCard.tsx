import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import error from "../../../assets/lottie/error.json";
import { fonts } from "../../../assets/theme/fonts";
import PrimaryButton from "../Buttons/PrimaryButton";
import colors from "../../../assets/theme/colors";

interface ErrorCardProps {
  handleRefresh: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ handleRefresh }) => {
  return (
    <Box
      sx={{
        px: 10,
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        py: 2,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={error}
        autoplay
        loop
        style={{ alignItems: "center", width: 200, height: 200 }}
      />
      <Box sx={{ py: 2 }} />
      <Typography sx={{ typography: fonts.subtitle1, pb: 4 }}>
        Occured error, PLease Refresh
      </Typography>
      <PrimaryButton
        title={"Refresh"}
        colorTitle={colors.backgroundColorSecondary}
        backgroundColor={colors.errorColor}
        isIcon={false}
        isTitleAndIcon={false}
        fontType={"subtitle2"}
        onClick={handleRefresh}
      />
    </Box>
  );
};

export default ErrorCard;
