import { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const localStorageCart = JSON.parse(localStorage.getItem("pandorasCart"));
    return localStorageCart || [];
  });

  useEffect(() => {
    localStorage.setItem("pandorasCart", JSON.stringify(cart));
  }, [cart]);

  return <DataContext.Provider value={{ cart, setCart }}>{children}</DataContext.Provider>;
}

export default DataProvider;
