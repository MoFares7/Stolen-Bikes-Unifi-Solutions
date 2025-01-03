import createCache from "@emotion/cache";
import { SelectChangeEvent } from "@mui/material";
import { useLayoutEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import rtl from "stylis-plugin-rtl";
import { setValue } from "../../core/storage/storage";

const useLanguages = () => {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "العربية", value: "ar" },
  ];

  const handleLanguageChange = (event: SelectChangeEvent<string | number>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage as string);
    setValue("i18nextLng", newLanguage as string);
  };

  const cache = useMemo(
    () =>
      createCache({
        key: dir === "rtl" ? "css-ar" : "css-en",
        stylisPlugins: dir === "rtl" ? [rtl] : [],
      }),
    [dir]
  );

  useLayoutEffect(() => {
    document.body.setAttribute("dir", dir);
  }, [dir]);

  return { cache, languageOptions, handleLanguageChange };
};

export default useLanguages;
