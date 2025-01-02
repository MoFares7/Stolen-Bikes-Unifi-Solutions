import { Box, IconButton, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

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
          borderColor: "text.primary",
          transition: ".5s",
          borderRadius: "100px",
        },
        "&:hover .circle": {
          transition: ".5s",
          borderLeftColor: "text.primary",
        },
      }}
    >
      <TextField
        onChange={onChange}
        placeholder={"Search"}
        value={value}
        sx={{
          width: "100%",
          borderRadius: "100px",
          borderColor: "secondary.light",
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
      <Box
        className="circle"
        sx={{
          backgroundColor: "background.paper",
          p: "10px",
          position: "absolute",
          right: "-10px",
          borderLeftWidth: "3px",
          borderLeftColor: "secondary.light",
          borderLeftStyle: "solid",
          borderWidth: "1px",
          borderRadius: "100%",
          // "&:hover ~ .MuiFormControl-root": {
          //   borderColor: isDarkMode ? "info.light" : "secondary.main",
          // },
        }}
      >
        <IconButton
          sx={{
            "&:hover": { backgroundColor: "primary.main" },
            backgroundColor: "primary.main",
            width: "45px",
            height: "45px",
          }}
          size="small"
        >
          {/* <IconSearch color="white" size={22} /> */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchField;
