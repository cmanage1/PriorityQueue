import React, { useContext, useEffect } from "react";
import { Grid } from "@mui/material";
import { ValueBox } from "./ValueBox";
import { AppContext } from "../../../context/AppContextProvider";

export function ShowVisual({ buckets }) {
  const { data, changeSelectedSession } = useContext(AppContext);

  useEffect(() => {
    if (typeof data !== "undefined" && data !== "undefined") {
      changeSelectedSession(Object.keys(data)[Object.keys(data).length - 1]);
    }
  }, []);

  return (
    <Grid container spacing={2}>
      {Object.entries(buckets).map(([key, value]) => {
        return <ValueBox key={key} index={key} value={value} />;
      })}
    </Grid>
  );
}
