import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const AppContext = React.createContext({
  data: [],
  selectedTuple: [],
  triggerEffect: () => {},
  onChange: {},
});

const BASE_URL = "http://localhost:7001"; //Change according to backend

function AppContextProvider({ children }) {
  const [data, setData] = React.useState({});
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [selectedTuple, setSelectedTuple] = useState([]);
  const [t] = useTranslation();

  // Can call all APIs here
  const onChange = useCallback(
    ({ action, payload }) => {
      switch (action) {
        case "dequeue_all":
          axios
            .put(BASE_URL + "/v1/put/dequeue_all", payload)
            .then((response) => {
              setData({
                ...data,
                [response.data[0]]: response.data[1],
              });
            })
            .catch((error) => {
              console.error(error);
            });
          break;
        case "dequeue":
          axios
            .put(BASE_URL + "/v1/put/dequeue", payload)
            .then((response) => {
              if (response.data === "LIMITED") {
                alert(t("rate-limit-reach"));
              } else if (response.data === "EMPTY") {
                alert(t("dequeue-limit-reach"));
              } else {
                setData({
                  ...data,
                  [response.data[0]]: response.data[1],
                });
              }
            })
            .catch((error) => {
              console.error(error);
            });
          break;
        case "enqueue":
          axios
            .put(BASE_URL + "/v1/put/enqueue", payload)
            .then((response) => {
              console.log("Enqueue Success", response);
            })
            .catch((error) => {
              console.error("Error doing enqueue", error);
            });
          break;
        case "getBuckets":
          return axios
            .get(BASE_URL + "/v1/get/buckets/", payload)
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              console.error(error);
              return { 0: 0 };
            });
        case "modifyValue":
          setData({
            ...data,
            [payload.key]: payload.value,
          });
          break;
        default:
          return "not recgonized";
      }
    },
    [data]
  );

  useEffect(() => {
    axios
      .get(BASE_URL + "/v1/get/sessions")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [triggerEffect]);

  function changeSelectedSession(sessionKey) {
    console.log("Change selected");
    setSelectedTuple([sessionKey, data[sessionKey]]);
  }

  const value = {
    onChange,
    data,
    selectedTuple,
    changeSelectedSession,
    triggerEffect: () => setTriggerEffect(!triggerEffect),
  };
  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
}

export { AppContextProvider };
