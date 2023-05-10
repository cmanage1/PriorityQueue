import React, { useContext, useEffect, useState } from "react";
import { Grid, Box, Button, Stack, Divider } from "@mui/material";
import { ShowVisual } from "./ShowVisual";
import { AppContext } from "../../../context/AppContextProvider";
import axios from "axios";

export function Simulation() {
  const { selectedTuple } = useContext(AppContext);
  const [buckets, setBuckets] = useState({});
  const [changeTrigger, setChangeTrigger] = useState(false);
  const [executionStack, setExecutionStack] = useState([]);

  useEffect(() => {
    // Get buckets
    if (selectedTuple !== [] && typeof selectedTuple[0] !== "undefined") {
      axios
        .get("http://localhost:7001/v1/get/buckets/", {
          params: {
            sessionKey: selectedTuple[0],
          },
        })
        .then((response) => {
          setBuckets(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedTuple, changeTrigger]);

  useEffect(() => {
    setExecutionStack([]);
  }, [selectedTuple]);

  // This function changes the value of myVar
  function refreshBuckets() {
    setChangeTrigger(!changeTrigger);
  }

  function handleNext() {
    // Send axios request to dequeue an item from the queue

    console.log("Next");
    setExecutionStack([...executionStack, "Dequeue"]);
    refreshBuckets(); // Refresh buckets afetrwards
  }

  function handleAll() {
    // Send axios requiest to keep dequeing until all buckets are 0
    // ANIMATION: step-by-step execution instead of only listing the steps as blocks right away.
    console.log("All");
    refreshBuckets(); // Refresh buckets afetrwards
  }
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <Box typography="h4"> Simulation </Box>
      </Grid>
      <Grid item>
        <Stack direction={"row"} spacing={2}>
          <Button variant="contained" color="secondary" onClick={handleNext}>
            Next
          </Button>
          <Button variant="contained" color="secondary" onClick={handleAll}>
            All
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
              {" "}
              {text}
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
