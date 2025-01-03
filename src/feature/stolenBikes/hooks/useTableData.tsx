import { useMemo } from "react";
import notFoundImage from "../../../assets/images/notFoundImage.svg";
import useTranslationDashboard from "../../../shared/hooks/useTranslationDashboard";
import { Bike } from "../types/bikes";
import { Statuses } from "../types/statusType";
import { TableColumn } from "../../../shared/components/Table/MainTable";

export interface TableRow {
  id: string;
  large_img: string;
  title: string;
  description: string;
  dateOfTheTheft: string;
  location: string;
  createdAt: string;
  status: Statuses;
  frame_model?: string;
}

const useTableData = (bikes: Bike[]) => {
  const { translate } = useTranslationDashboard();

  const rows = useMemo<TableRow[]>(() => {
    return bikes.map((bike) => ({
      id: bike.id,
      large_img: bike.large_img || notFoundImage,
      title: bike.title,
      description: bike.description || "No description available",
      dateOfTheTheft: new Date(bike.date_stolen * 1000).toLocaleDateString(),
      location: bike.stolen_location || "Location not specified",
      createdAt: new Date().toLocaleDateString(),
      status: bike.status,
      frame_model: bike.frame_model,
    }));
  }, [bikes]);

  const columns: TableColumn<TableRow>[] = [
    {
      key: "large_img",
      label: `${translate("pages.stolenBikes.image")}`,
      align: "center",
      sortable: false,
      format: (value: string) => (
        <img
          src={value}
          alt="stolen"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      key: "title",
      label: `${translate("pages.stolenBikes.title")}`,
      align: "center",
      sortable: false,
    },
    {
      key: "description",
      label: `${translate("pages.stolenBikes.description")}`,
      align: "center",
      sortable: false,
    },
    {
      key: "dateOfTheTheft",
      label: `${translate("pages.stolenBikes.DateOfTheTheft")}`,
      align: "center",
      sortable: false,
    },
    {
      key: "location",
      label: `${translate("pages.stolenBikes.Location")}`,
      align: "center",
      sortable: false,
    },
    {
      key: "createdAt",
      label: `${translate("pages.stolenBikes.createdAt")}`,
      align: "center",
      sortable: false,
    },
  ];

  return { rows, columns };
};

export default useTableData;
