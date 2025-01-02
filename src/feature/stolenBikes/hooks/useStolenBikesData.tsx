import React from "react";
import useTranslationDashboard from "../../../shared/hooks/useTranslationDashboard";
import { TableColumn } from "../../../shared/components/Table/MainTable";
import { RowStolenBikesType } from "../types/stolenBikesDataType";
import { StolenBikeDataType } from "../types/stolenBikeDataType";

const useStolenBikesData = () => {
  const { translate } = useTranslationDashboard();

  const ROWS: RowStolenBikesType[] =
    bikes?.map((client: StolenBikeDataType) => {
      return {
        id: client.id,
        image: client?.image,
        number: client.customer?.clientNumber,

        createdAt: new Date(client.createdAt).toLocaleDateString(),
      };
    }) || [];

  const COLUMNS: TableColumn<RowStolenBikesType>[] = [
    {
      key: "Image",
      label: `${translate("pages.manageSalon.offerList.display.image")}`,
      align: "center",
      sortable: false,
      format: (value: string) => (
        <img
          src={value}
          alt="offer-image"
          crossOrigin="anonymous"
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
      sortable: false,
      align: "center",
    },
    {
      key: "dateOfTheTheft",
      label: `${translate("pages.stolenBikes.DateOfTheTheft")}`,
      sortable: false,
      align: "center",
    },
    {
      key: "location",
      label: `${translate("pages.stolenBikes.Location")}`,
      sortable: false,
      align: "center",
    },

    {
      key: "createdAt",
      label: `${translate(
        "pages.manageSalon.clientList.tableHeader.createdAt"
      )}`,
      sortable: true,
      sortKey: "createdAt",
      align: "left",
    },
  ];

  return {};
};

export default useStolenBikesData;
