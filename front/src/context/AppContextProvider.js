import React, { useEffect } from "react";

export const AppContext = React.createContext({ data: [] });

function AppContextProvider({ children }) {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData([]);
  }, []);

  const value = { data };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
