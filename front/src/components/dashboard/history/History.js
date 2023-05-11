import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import { Sessions } from "./Sessions";
import { InputForm } from "./InputForm";
import { useTranslation } from "react-i18next";

export function History() {
  const [t] = useTranslation();

  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <Box typography="h4"> {t("history")}</Box>
      </Grid>
      <Grid item>
        <InputForm />
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <Sessions />
      </Grid>
    </Grid>
  );
}
