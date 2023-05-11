import React, { useContext, useMemo } from "react";
import { Stack } from "@mui/material";
import { AppContext } from "../../../context/AppContextProvider";
import { ClickableSession } from "./ClickableSession";

export function Sessions() {
  const { data } = useContext(AppContext);

  const reversedData = useMemo(() => {
    return Object.entries(data).reverse();
  }, [data]);

  return (
    <Stack spacing={2}>
      {reversedData.map(([key, value]) => (
        <ClickableSession key={key} sessionKey={key} value={value} />
      ))}
    </Stack>
  );
}
