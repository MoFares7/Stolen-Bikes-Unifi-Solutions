import colors from "../../../assets/theme/colors";
import { Statuses } from "../types/statusType";

const useGetStatusInfo = () => {
  const STATUS_COLOR: Record<
    Statuses,
    { backgroundColor: string; color: string; label: string }
  > = {
    [Statuses.stolen]: {
      backgroundColor: colors.errorColor,
      color: colors.backgroundColorSecondary,
      label: "Stolen",
    },
    [Statuses.found]: {
      backgroundColor: colors.primaryColor,
      color: colors.backgroundColorSecondary,
      label: "Found",
    },
  };

  const getStatusColor = (status: Statuses) => {
    return STATUS_COLOR[status];
  };

  return { getStatusColor };
};

export default useGetStatusInfo;
