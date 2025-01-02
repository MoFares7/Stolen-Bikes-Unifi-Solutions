import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { borders } from "../../../assets/theme/borders";

interface PrimaryButtonProps {
  title?: string;
  width?: string | number;
  height?: string | number;
  fontType?: "body1" | "body2" | "h5" | "h6" | "subtitle1" | "subtitle2";
  borderColor?: string;
  borderRadius?: string | number;
  backgroundColor?: string;
  colorTitle?: string;
  hoverColor?: string;
  isTitleAndIcon?: boolean;
  isIcon?: boolean;
  icon?: string | React.ReactNode;
  fontSize?: string | number;
  fontWeight?: string | number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  margin?: number;
  disabled?: boolean;
  isHasDropDown?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  width,
  height,
  fontType,
  borderColor = "transparent",
  borderRadius = borders.borderRadius.sm,
  backgroundColor,
  colorTitle = "inherit",
  hoverColor,
  isTitleAndIcon = false,
  isIcon = false,
  icon,
  fontSize,
  fontWeight,
  onClick,
  loading,
  margin,
  disabled,
  isHasDropDown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isHasDropDown) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      onClick={(e) => {
        handleClick(e);
      }}
      sx={{
        backgroundColor: disabled ? "text.secondary" : backgroundColor,
        borderRadius: borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 40,
        margin: margin,
        height: height ? height : 40,
        width: width,
        color: disabled ? "background.paper" : colorTitle,
        border: `1px solid`,
        borderColor,
        transition: isIcon ? "transform 0.1s ease" : "",
        "&:hover": {
          transform: isIcon ? "translateY(-1px)" : "",
          backgroundColor: disabled ? "text.secondary" : hoverColor,
        },
      }}
      disabled={disabled}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: "background.paper" }} />
      ) : isIcon && typeof icon === "string" ? (
        <img src={icon} alt="icon" style={{ width: 24, height: 24 }} />
      ) : isIcon && React.isValidElement(icon) ? (
        icon
      ) : (
        <Box display="flex" alignItems="center">
          {isTitleAndIcon && typeof icon === "string" ? (
            <img src={icon} alt="icon" style={{ width: 24, height: 24 }} />
          ) : (
            icon
          )}
          <Typography
            variant={fontType}
            fontSize={fontSize}
            fontWeight={fontWeight}
            mx={1}
            color={colorTitle}
          >
            {title}
          </Typography>
          {isHasDropDown &&
            (isOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />)}
        </Box>
      )}
    </Button>
  );
};

export default PrimaryButton;
