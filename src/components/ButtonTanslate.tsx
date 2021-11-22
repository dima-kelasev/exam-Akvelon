import React from "react";
import { useTranslation } from "react-i18next";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { StyledPharagraph, StyledSelect } from "../styles";

export function ButtonTranslate(): JSX.Element {
  const { i18n, ready, t } = useTranslation("common");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <div>
        <InputLabel>
          <StyledPharagraph>{t("lang.langTitle")}</StyledPharagraph>
        </InputLabel>
        <StyledSelect style={{ width: 75 }} label="Language">
          <MenuItem onClick={() => changeLanguage("rus")} value={11}>
            {t("lang.rus")}
          </MenuItem>
          <MenuItem onClick={() => changeLanguage("en")} value={10}>
            {t("lang.en")}
          </MenuItem>
        </StyledSelect>
      </div>
    );
  }

  return <span>Loading...</span>;
}
