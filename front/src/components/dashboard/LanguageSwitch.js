import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() =>
          handleLanguageChange(i18n.language === "en" ? "fr" : "en")
        }
      >
        {i18n.language === "en" ? "EN" : "FR"}
      </Button>
    </Box>
  );
}
