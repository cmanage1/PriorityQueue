import React, { useContext, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { AppContext } from "../../../context/AppContextProvider";

export function ClickableSession({ sessionKey, value }) {
  const { changeSelectedSession, selectedTuple, onChange } =
    useContext(AppContext);

  function makeArrayFromBucket(b) {
    const inputArr = [];
    for (const key in b) {
      const count = b[key];
      for (let i = 0; i < count; i++) {
        inputArr.push(parseInt(key));
      }
    }
    return inputArr;
  }

  useEffect(() => {
    if (!Array.isArray(value)) {
      //Display Bucket instead of original input array
      onChange({
        action: "modifyValue",
        payload: { key: sessionKey, value: makeArrayFromBucket(value) },
      });
    }
  }, [value]);

  function handleSessionClick(k) {
    changeSelectedSession(k);
  }

  return (
    <Box
      key={sessionKey}
      sx={{
        width: 1,
        justifyContent: "space-between",
        border: "1px solid",
        borderColor: "grey.400",
        borderRadius: 1,
        p: 1,
        backgroundColor: selectedTuple[1] === value ? "#fff9c4" : "",
      }}
      component={Button}
      onClick={() => handleSessionClick(sessionKey)}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Box typography={"subtitle"} sx={{ alignItems: "left" }}>
          {"[" + value + "]"}
        </Box>
        <Box typography={"subtitle"} sx={{ alignItems: "right" }}>
          {new Date(parseInt(sessionKey)).toLocaleString()}
        </Box>
      </Box>
    </Box>
  );
}
