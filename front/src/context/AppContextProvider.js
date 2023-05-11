import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const AppContext = React.createContext({
  data: [],
  selectedTuple: [],
  bucketList: {},
  triggerEffect: () => {},
  onChange: {},
});

const BASE_URL = "http://18.222.197.6:7001";

function AppContextProvider({ children }) {
  const [data, setData] = React.useState({});
  const [bucketList, setBucketList] = React.useState({});
  const [triggerEffect, setTriggerEffect] = useState(false);
  const [selectedTuple, setSelectedTuple] = useState([]);

  // Can call all APIs here
  const onChange = useCallback(
    ({ action, payload }) => {
      switch (action) {
        case "dequeue":
          axios
            .put(BASE_URL + "/v1/put/dequeue", payload)
            .then((response) => {
              console.log("Response data :", response.data[1]);
              setBucketList({
                ...bucketList,
                [response.data[0]]: response.data[1],
              });
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
      .get(BASE_URL + "/v1/get/sessions")
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
    bucketList,
    onChange,
    data,
    selectedTuple,
    changeSelectedSession,
    triggerEffect: () => setTriggerEffect(!triggerEffect),
  };
  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
}

export { AppContextProvider };
