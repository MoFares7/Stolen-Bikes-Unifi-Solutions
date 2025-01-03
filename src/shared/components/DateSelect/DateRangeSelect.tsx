import { FilterListOutlined } from "@mui/icons-material";
import { Box, Button, Popover, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import { borders } from "../../../assets/theme/borders";
import colors from "../../../assets/theme/colors";
import PrimaryButton from "../Buttons/PrimaryButton";

function DateRangePickerWithCalendars(props: { onChange: any }) {
  const { onChange } = props;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    if (startDate && endDate) {
      onChange({
        startDate: dayjs(startDate).toISOString(),
        endDate: dayjs(endDate).toISOString(),
      });
    }
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <PrimaryButton
        isTitleAndIcon={true}
        icon={<FilterListOutlined />}
        title="Filter"
        fontSize={"16px"}
        fontType="subtitle1"
        fontWeight={500}
        borderRadius={borders.borderRadius.sm}
        backgroundColor={colors.primaryColor}
        colorTitle={colors.backgroundColorSecondary}
        hoverColor={colors.hoverColor}
        onClick={handleOpen}
      />

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box display="flex" flexDirection="column" padding={2} gap={4}>
          <Box>
            <Typography variant="subtitle1">Start Date</Typography>
            <DateCalendar
              value={startDate}
              onChange={(newDate) => {
                setStartDate(newDate);
                if (endDate && newDate && dayjs(newDate).isAfter(endDate)) {
                  setEndDate(null);
                }
              }}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1">End Date</Typography>
            <DateCalendar
              value={endDate}
              minDate={startDate}
              onChange={(newDate) => setEndDate(newDate)}
            />
          </Box>

          <Box textAlign="right" mt={2}>
            <Button variant="contained" onClick={handleSave}>
              OK
            </Button>
          </Box>
        </Box>
      </Popover>
    </LocalizationProvider>
  );
}

export default DateRangePickerWithCalendars;
