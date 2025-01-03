import {
  Box,
  Pagination,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import { borders } from "../../../assets/theme/borders";
import { fonts } from "../../../assets/theme/fonts";
import MainDropDownField from "../DropDown/MainDropDown";
import colors from "../../../assets/theme/colors";

const Footer: React.FC<{
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  onPageSizeChange: (
    event: SelectChangeEvent<string | number>,
    child: ReactNode
  ) => void;
  pageCount: number;
}> = ({
  pageNumber,
  pageSize,
  totalResults,
  onPageChange,
  onPageSizeChange,
  pageCount,
}) => {
  console.log("pageCount: ", pageCount);
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "flex",
          xl: "flex",
        },
        justifyContent: "space-between",
        alignItems: "center",
        pt: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          px: 3,
          gap: 2,
        }}
      >
        <MainDropDownField
          isFullWidth={true}
          margin="1"
          backgroundColor={"background.paper"}
          value={pageSize}
          options={[
            { value: "10", label: "10" },
            { value: "15", label: "15" },
            { value: "20", label: "20" },
            { value: "25", label: "25" },
          ]}
          onChange={onPageSizeChange}
        />
        <Stack direction={"row"} gap={1}>
          <Typography
            sx={{
              typography: fonts.subtitle1,
              color: "text.secondary",
            }}
          >
            Results:
          </Typography>
          <Typography
            sx={{
              typography: fonts.subtitle1,
              color: "text.secondary",
              textWrap: "nowrap",
            }}
          >
            {`${(pageNumber - 1) * pageSize + 1} - ${Math.min(
              pageNumber * pageSize,
              totalResults
            )} of ${totalResults}`}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Pagination
          count={pageCount}
          page={pageNumber}
          onChange={onPageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              typography: fonts.subtitle1,
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              p: 2,
              color: colors.backgroundColor,
              backgroundColor: colors.primaryColor,
              borderRadius: borders.borderRadius.xs,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
