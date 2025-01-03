import { Stack } from "@mui/material";
import React, { ReactNode } from "react";
import colors from "../assets/theme/colors";

interface PagesLayoutProps {
  children: ReactNode;
}

const PagesLayot: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <Stack
      direction={"column"}
      sx={{
        transition: ".3s",
        position: "relative",
        height: "100vh",
        overflowY: "auto",
        overflowX: "auto",
        backgroundColor: colors.backgroundColorSecondary,
      }}
    >
      {children}
    </Stack>
  );
};

export default PagesLayot;
