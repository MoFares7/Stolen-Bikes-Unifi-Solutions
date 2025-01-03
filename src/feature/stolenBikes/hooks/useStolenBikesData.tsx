import useTranslationDashboard from "../../../shared/hooks/useTranslationDashboard";
import { TableColumn } from "../../../shared/components/Table/MainTable";
import { RowStolenBikesType } from "../types/stolenBikesRowType";
import { StolenBikeDataType } from "../types/stolenBikeDataType";
import useStoleBikesApi from "./useStoleBikesApi";
import { useAppSelector } from "../../../shared/hooks/useSelectors";
import notFoundImage from "../../../assets/images/notFoundImage.svg";

const useStolenBikesData = () => {
  const {
    stolenBikesData,
    isGetStolenBikesDataError,
    isGetStolenBikesDataLoading,
  } = useStoleBikesApi();
  const { translate } = useTranslationDashboard();

  const viewMode = useAppSelector((state) => state.viewMode.viewMode);
  const ROWS: RowStolenBikesType[] =
    stolenBikesData?.bikes.map((bike: StolenBikeDataType) => {
      return {
        id: bike.id,
        large_img: bike.large_img ? bike.large_img : notFoundImage,
        title: bike.title,
        description: bike.description || "No description available",
        dateOfTheTheft: new Date(bike.date_stolen * 1000).toLocaleDateString(),
        location: bike.stolen_location || "Location not specified",
        createdAt: new Date().toLocaleDateString(),
        status: bike.status,
        frame_model: bike.frame_model,
      };
    }) || [];

  const COLUMNS: TableColumn<RowStolenBikesType>[] = [
    {
      key: "large_img",
      label: `${translate("pages.stolenBikes.image")}`,
      align: "center",
      sortable: false,
      format: (value: string) => (
        <img
          src={value}
          alt="stolen"
          // crossOrigin="anonymous"
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
      label: `${translate("pages.stolenBikes.createdAt")}`,
      sortable: false,
      align: "center",
    },
  ];

  return {
    ROWS,
    COLUMNS,
    viewMode,
    isGetStolenBikesDataLoading,
    isGetStolenBikesDataError,
  };
};

export default useStolenBikesData;
