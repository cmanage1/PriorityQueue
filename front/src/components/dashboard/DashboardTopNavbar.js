import React from "react";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import { LinkIconButton } from "../LinkIconButton";
import { LanguageSwitch } from "./LanguageSwitch";

export function DashboardTopNavbar() {
  const [t] = useTranslation();

  return (
    <Grid container>
      <Grid item xs={11}>
        <LinkIconButton href="/" icon={<DashboardIcon />}>
          {t("dashboard")}
        </LinkIconButton>
        <LinkIconButton href="/about" icon={<InfoIcon />}>
          {t("about")}
        </LinkIconButton>
      </Grid>
      <Grid item xs={1}>
        <LanguageSwitch />
      </Grid>
    </Grid>
  );
}
