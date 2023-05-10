import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const AppContext = React.createContext({
  data: [],
  selectedTuple: [],
  triggerEffect: () => {},
  onChangeExample: {},
});

function AppContextProvider({ children }) {
  const [data, setData] = React.useState({});
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [selectedTuple, setSelectedTuple] = useState([]);

  // Can call all APIs here
  const onChangeExample = useCallback(
    ({ action, payload }) => {
      switch (action) {
        case "startConfiguration":
          setData({ ...data, mode: "configuration", selection: null });
          break;
        case "error":
          // You can make changes to your data using setData. For example: setData({... data, mode: "error"}); return "do something";
          break;
        default:
          return "not recgonized";
      }
    },
    [data]
  );

  useEffect(() => {
    axios
      .get("http://localhost:7001/v1/get/sessions")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [triggerEffect]);

  function changeSelectedSession(sessionKey) {
    setSelectedTuple([sessionKey, data[sessionKey]]);
  }

  const value = {
    onChangeExample,
    data,
    selectedTuple,
    changeSelectedSession,
    triggerEffect: () => setTriggerEffect(!triggerEffect),
  };
  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
}

export { AppContextProvider };
