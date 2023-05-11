import React, { useContext, useEffect, useState } from "react";
import { Grid, Box, Button, Stack, Divider } from "@mui/material";
import { ShowVisual } from "./ShowVisual";
import { AppContext } from "../../../context/AppContextProvider";
import { useTranslation } from "react-i18next";

export function Simulation() {
  const { selectedTuple, onChange } = useContext(AppContext);
  const [buckets, setBuckets] = useState({});
  const [changeTrigger, setChangeTrigger] = useState(false);
  const [executionStack, setExecutionStack] = useState([]);
  const [t] = useTranslation();

  useEffect(() => {
    // Get buckets
    if (selectedTuple !== [] && typeof selectedTuple[0] !== "undefined") {
      onChange({
        action: "getBuckets",
        payload: {
          params: {
            sessionKey: selectedTuple[0],
          },
        },
      })
        .then((result) => {
          setBuckets(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedTuple, changeTrigger]);

  useEffect(() => {
    //setExecutionStack([]);
  }, [selectedTuple]);

  function refreshBuckets() {
    setChangeTrigger(!changeTrigger);
  }

  function handleNext() {
    onChange({ action: "dequeue", payload: { time: selectedTuple[0] } });
    setExecutionStack([...executionStack, "Dequeue"]);
    refreshBuckets();
  }

  function handleAll() {
    onChange({ action: "dequeue_all", payload: { time: selectedTuple[0] } });
    // Add animation here
    setExecutionStack([...executionStack, "Dequeued All"]);
    refreshBuckets(); // Refresh buckets afetrwards
  }
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <Box typography="h4">{t("simulation")}</Box>
      </Grid>
      <Grid item>
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained" color="secondary" onClick={handleNext}>
            {t("next")}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleAll}>
            {t("all")}
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <ShowVisual buckets={buckets} />
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        {executionStack.map((text, index) => {
          return (
            <Box key={index} typography="body2">
              {index + 1}
              {". "}
              {text}
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
