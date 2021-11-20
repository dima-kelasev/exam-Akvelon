import React from "react";
import { useTranslation } from "react-i18next";
// import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export function ButtonTranslate(): JSX.Element {
  const { i18n, ready, t } = useTranslation("common");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <div>
        <InputLabel>{t("lang.langTitle")}</InputLabel>
        <Select style={{ width: 75 }} label="Language">
          <MenuItem onClick={() => changeLanguage("rus")} value={11}>
            {t("lang.rus")}
          </MenuItem>
          <MenuItem onClick={() => changeLanguage("en")} value={10}>
            {t("lang.en")}
          </MenuItem>
        </Select>
      </div>
    );
  }

  return <span>Loading...</span>;
}
