import { Window } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { ChangeEvent } from "react";
import { borders } from "../../../assets/theme/borders";
import PrimaryButton from "../../../shared/components/Buttons/PrimaryButton";
import SearchField from "../../../shared/components/Inputs/SearchField";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/useSelectors";
import { changeMode } from "../../../shared/slices/viewSlice";

interface HeaderStolenBikesProps {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const HeaderStolenBikes: React.FC<HeaderStolenBikesProps> = ({ onSearch }) => {
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector((state) => state.viewMode.viewMode);

  const renderViewButtons = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid",
        borderColor: "secondary.light",
        borderRadius: borders.borderRadius.xs,
        backgroundColor: "#f1f1f1",
      }}
    >
      <PrimaryButton
        isIcon={true}
        icon={<Window />}
        borderRadius={borders.borderRadius.xs}
        backgroundColor={
          viewMode === "table" ? "secondary.default" : "background.paper"
        }
        onClick={() => dispatch(changeMode("table"))}
        hoverColor={"secondary.light"}
      />
      <PrimaryButton
        isIcon={true}
        icon={<Window />}
        borderRadius={borders.borderRadius.xs}
        backgroundColor={
          viewMode === "grid" ? "secondary.default" : "background.paper"
        }
        onClick={() => dispatch(changeMode("grid"))}
        hoverColor={"secondary.light"}
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
      <SearchField onChange={onSearch} />
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mt: { xs: "10px", md: "0px" },
          justifySelf: "flex-end",
        }}
      >
        {renderViewButtons()}
      </Box>
    </Box>
  );
};

export default HeaderStolenBikes;
