import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import { ReactNode } from "react";
import { borders } from "../../../assets/theme/borders";
import colors from "../../../assets/theme/colors";

interface MainDropDownFieldProps {
  height?: string;
  margin?: string;
  isFullWidth?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (
    event: SelectChangeEvent<string | number>,
    child: ReactNode
  ) => void;
  autoComplete?: string;
  type?: string;
  error?: boolean;
  options?: { value: string; label: string }[];
  isFulWidth?: boolean;
  labelColor?: string;
  width?: string | { xs?: string; md?: string; xl?: string };
  backgroundColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isBordered?: boolean;
  isLoading?: boolean;
  my?: string;
}

const MainDropDownField: React.FC<MainDropDownFieldProps> = ({
  height,
  margin,
  isFullWidth,
  disabled = false,
  value,
  onChange,
  autoComplete,
  type,
  error,
  options,
  isFulWidth,
  width,
  backgroundColor,
  defaultValue,
  isBordered = true,
  isLoading,
  my,
}: MainDropDownFieldProps) => {
  const responsiveWidth =
    typeof width === "object" ? width : { xs: width, md: width, xl: width };

  return (
      <Select
        required
        fullWidth={isFullWidth}
        value={value}
        defaultValue={defaultValue}
        type={type}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={onChange}
        error={error}
        sx={{
          borderRadius: borders.borderRadius.sm,
          my: my || "16px",
          margin: margin,
          height: height || "47px",
          backgroundColor: backgroundColor || "background.paper",
          fontSize: "subtitle1.fontSize",
          borderColor: colors.stateColor,
          width: isFulWidth ? "100%" : responsiveWidth,
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : "secondary.light",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : "secondary.default",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : "text.primary",
              borderWidth: "1px",
            },
          },
          "& .MuiInputLabel-outlined": {
            transform: "translate(14px, 12px) scale(1)",
          },
          "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
            transform: "translate(14px, -6px) scale(0.75)",
          },
          "& .MuiOutlinedInput-input": {
            padding: "12px 14px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            ...(isBordered ? {} : { border: "none" }),
          },
        }}
      >
        {isLoading ? (
          <MenuItem disabled>
            <Typography variant="body2" color="text.secondary">
              Loading...
            </Typography>
          </MenuItem>
        ) : (
          options &&
          options.length > 0 &&
          options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ fontSize: "1rem" }}
            >
              {option.label}
            </MenuItem>
          ))
        )}
      </Select>
  );
};

export default MainDropDownField;
