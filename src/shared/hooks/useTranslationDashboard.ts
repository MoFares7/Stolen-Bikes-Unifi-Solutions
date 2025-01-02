import { useTranslation } from "react-i18next";

const useTranslationDashboard = () => {
  const { t } = useTranslation();

  const translate = (key: string) => t(key);

  return { translate };
};

export default useTranslationDashboard;
