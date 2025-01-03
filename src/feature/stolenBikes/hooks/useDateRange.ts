import { useState } from "react";
import { DateRange } from "../types/dateRangeType";

const useDateRange = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  return { dateRange, setDateRange };
};

export default useDateRange;
