import { Box, Typography } from "@mui/material";
import React from "react";
import { borders } from "../../../assets/theme/borders";
import { Statuses } from "../types/statusType";
import useGetStatusInfo from "../hooks/useGetStatusInfo";

interface StatusCardProps {
  status: Statuses;
}

const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
  const { getStatusColor } = useGetStatusInfo();
  return (
    <Box
      sx={{
        display: "inline-block",

        px: 1.5,
        borderRadius: borders.borderRadius.lg,
        backgroundColor: getStatusColor(status)?.backgroundColor,
      }}
    >
      <Typography
        sx={{
          typography: "subtitle1",
          color: getStatusColor(status)?.color,
          textTransform: "lowercase",
        }}
      >
        {getStatusColor(status)?.label}
      </Typography>
    </Box>
  );
};

export default StatusCard;
