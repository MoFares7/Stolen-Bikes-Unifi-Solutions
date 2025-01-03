import { Box } from "@mui/material";
import Lottie from "lottie-react";
import loader from "../../../assets/lottie/loader.json";

const LoaderCard = () => {
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
      <Lottie animationData={loader} style={{ width: 200, height: 200 }} />
    </Box>
  );
};

export default LoaderCard;
