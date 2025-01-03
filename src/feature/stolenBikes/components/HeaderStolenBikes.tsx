import { FilterListOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import grid from "../../../assets/icons/grid.svg";
import layout from "../../../assets/icons/layout.svg";
import { borders } from "../../../assets/theme/borders";
import colors from "../../../assets/theme/colors";
import { fonts } from "../../../assets/theme/fonts";
import PrimaryButton from "../../../shared/components/Buttons/PrimaryButton";
import SearchField from "../../../shared/components/Inputs/SearchField";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/useSelectors";
import { changeMode } from "../../../shared/slices/viewSlice";

interface HeaderStolenBikesProps {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  numberOfStolen: number;
}

const HeaderStolenBikes: React.FC<HeaderStolenBikesProps> = ({
  onSearch,
  numberOfStolen,
}) => {
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector((state) => state.viewMode.viewMode);

  const renderViewButtons = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid",
        borderColor: colors.secondaryColor,
        borderRadius: borders.borderRadius.sm,
        backgroundColor: "#f1f1f1",
      }}
    >
      <PrimaryButton
        isIcon={true}
        icon={<img src={layout} />}
        borderRadius={borders.borderRadius.sm}
        backgroundColor={
          viewMode === "table" ? colors.stateColor : colors.backgroundColor
        }
        onClick={() => dispatch(changeMode("table"))}
      />
      <PrimaryButton
        isIcon={true}
        icon={<img src={grid} />}
        borderRadius={borders.borderRadius.sm}
        backgroundColor={
          viewMode === "grid" ? colors.stateColor : colors.backgroundColor
        }
        onClick={() => dispatch(changeMode("grid"))}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        // pb: 3,
        display: { xs: "block", md: "flex" },
        mt: { xs: "10px", lg: "0px" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "70%",
          gap: "16px",
        }}
      >
        <SearchField onChange={onSearch} />
        <PrimaryButton
          isTitleAndIcon={true}
          icon={<FilterListOutlined />}
          title="Filter"
          borderRadius={borders.borderRadius.sm}
          backgroundColor={colors.primaryColor}
          colorTitle={colors.backgroundColorSecondary}
          hoverColor={colors.hoverColor}
        />
        <Box
          sx={{
            //   dispaly: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: { xs: "10px", md: "0px" },
            justifySelf: "flex-end",
          }}
        >
          {renderViewButtons()}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Typography
          sx={{
            typography: fonts.h6,
            fontWeight: 600,
            color: colors.textColorBase,
          }}
        >
          All Stolen Bikes{" "}
          <span style={{ color: colors.primaryColor }}>{numberOfStolen}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderStolenBikes;
