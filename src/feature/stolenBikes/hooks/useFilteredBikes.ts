import { useMemo } from "react";
import { DateRange } from "./useDateRange";
import { Bike } from "../types/bikes";

const useFilteredBikes = (bikes: Bike[], dateRange: DateRange) => {
  return useMemo(() => {
    if (!dateRange.startDate || !dateRange.endDate) return bikes;

    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);

    return bikes.filter((bike) => {
      const bikeDate = new Date(bike.date_stolen * 1000);
      return bikeDate >= startDate && bikeDate <= endDate;
    });
  }, [bikes, dateRange]);
};

export default useFilteredBikes;
