import { Box, Typography } from "@mui/material";
import React from "react";
import { borders } from "../../../assets/theme/borders";
import colors from "../../../assets/theme/colors";
import StatusCard from "../../../feature/stolenBikes/ui/StatusCard";
import { Statuses } from "../../../feature/stolenBikes/types/statusType";

interface MainCardProps {
  image?: string;
  title?: string;
  subTitle?: string;
  status?: Statuses;
}

const MainCard: React.FC<MainCardProps> = ({
  image,
  title,
  subTitle,
  status,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        textAlign: "center",
        my: 3,
        px: 2,
        mx: "auto",
        border: `1px solid`,
        borderColor: colors.secondaryColor,
        position: "relative",
        maxWidth: 248,
        maxHeight: 275,
        height: "100%",
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
        transition: "color 0.3s ease, transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box>
        <img
          src={image}
          alt={title}
          style={{
            marginBottom: "15px",
            position: "relative",
            width: 86,
            height: 86,
            maxWidth: 86,
            maxHeight: 86,
            objectFit: "cover",
            borderRadius: borders.borderRadius.xl,
          }}
        />
      </Box>
      <Typography
        sx={{
          pt: 1,
          typography: "subtitle1",
          color: colors.textColorBase,
          fontWeight: "500",
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          typography: "subtitle1",
          color: "text.secondary",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
      >
        {subTitle}
      </Typography>
      <Box sx={{ py: 1 }} />
      <StatusCard status={status!} />
    </Box>
  );
};

export default MainCard;
