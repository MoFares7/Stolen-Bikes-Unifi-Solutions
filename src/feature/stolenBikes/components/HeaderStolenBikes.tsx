import { Box, Stack, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import grid from "../../../assets/icons/grid.svg";
import layout from "../../../assets/icons/layout.svg";
import { borders } from "../../../assets/theme/borders";
import colors from "../../../assets/theme/colors";
import { fonts } from "../../../assets/theme/fonts";
import PrimaryButton from "../../../shared/components/Buttons/PrimaryButton";
import DateRangePickerWithCalendars from "../../../shared/components/DateSelect/DateRangeSelect";
import MainDropDownField from "../../../shared/components/DropDown/MainDropDown";
import SearchField from "../../../shared/components/Inputs/SearchField";
import { useAppDispatch } from "../../../shared/hooks/useSelectors";
import useTranslationDashboard from "../../../shared/hooks/useTranslationDashboard";
import { changeMode } from "../../../shared/slices/viewSlice";
import useStolenBikesData from "../hooks/useStolenBikesData";
import { DateRange } from "../types/dateRangeType";
import useLanguages from "./../../../shared/hooks/useLanguages";
import i18n from "../../../assets/translate/i18next";

interface HeaderStolenBikesProps {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilter?: (range: DateRange) => void;
  numberOfStolen?: number;
}

const HeaderStolenBikes: React.FC<HeaderStolenBikesProps> = ({
  onSearch,
  onFilter,
  numberOfStolen,
}) => {
  const dispatch = useAppDispatch();
  const { viewMode } = useStolenBikesData();
  const { languageOptions, handleLanguageChange } = useLanguages();
  const { translate } = useTranslationDashboard();

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
        display: { xs: "block", md: "flex" },
        mt: { xs: "10px", lg: "0px" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          mt: { xs: "10px", lg: "0px" },
          justifyContent: "start",
          alignItems: "center",
          width: { xs: "100%", md: "70%" },
          gap: "16px",
        }}
      >
        <SearchField onChange={onSearch} />

        <MainDropDownField
          width={{ xs: "100%", md: "10%" }} 
          defaultValue={i18n.language}
          options={languageOptions}
          onChange={handleLanguageChange}
        />

        <Stack direction={"row"} justifyContent={"space-around"} gap={"8px"}>
          <DateRangePickerWithCalendars onChange={onFilter} />
          {renderViewButtons()}
        </Stack>
      </Box>
      <Stack
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Typography
          sx={{
            typography: fonts.h6,
            fontWeight: 600,
            color: colors.textColorBase,
          }}
        >
          {translate("pages.stolenBikes.All Stolen Bikes")}{" "}
          <span style={{ color: colors.primaryColor }}>{numberOfStolen}</span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default HeaderStolenBikes;
