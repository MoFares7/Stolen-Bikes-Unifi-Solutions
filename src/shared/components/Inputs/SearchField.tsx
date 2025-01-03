import { SearchOutlined } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { borders } from "../../../assets/theme/borders";
import colors from "../../../assets/theme/colors";
import useTranslationDashboard from "../../hooks/useTranslationDashboard";

interface SearchFieldProps {
  width?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  onChange,
  width,
  value,
}) => {
  const { translate } = useTranslationDashboard();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "between",
        alignItems: "center",
        position: "relative",
        width: width ? width : { xs: "100%", md: "40%" },
        overflow: "hidden",
        transition: ".5s",
        "&:hover .MuiFormControl-root": {
          borderColor: colors.primaryColor,
          transition: ".5s",
          borderRadius: "8px",
        },
        "&:hover .circle": {
          transition: ".5s",
          borderLeftColor: colors.primaryColor,
        },
      }}
    >
      <TextField
        onChange={onChange}
        placeholder={translate("pages.stolenBikes.search")}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined style={{ color: colors.secondaryColor }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "100%",
          borderRadius: borders.borderRadius.sm,
          borderColor: colors.secondaryColor,
          borderStyle: "solid",
          borderWidth: "1px",
          outline: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiInputBase-input": {
            p: "11px 25px",
            fontSize: "16px",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "text.secondary",
          },
        }}
      />
    </Box>
  );
};

export default SearchField;
