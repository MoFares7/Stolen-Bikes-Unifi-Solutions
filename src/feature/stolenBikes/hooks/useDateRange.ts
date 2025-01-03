import { useState } from "react";

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

const useDateRange = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  return { dateRange, setDateRange };
};

export default useDateRange;
