import React, { useEffect, useState } from "react";
import { locationContext } from "./LocationContext";
import axios from "axios";

export const DataProvider = ({ children }) => {
  // loader
  const [isLoader, setIsLoader] = useState(true);
  // long lat
  const [longLat, setLongLat] = useState(null);
  // info api
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    if (longLat) {
      axios
        .post(
          `https://api.openweathermap.org/data/2.5/weather?lat=${longLat.lat}&lon=${longLat.long}&appid=39f4571e6a4b235a7f18b027850c77fe&units=metric`
        )
        .then((res) => {
          setDataApi(res.data);
          setIsLoader(false);
        });
    }
  }, [longLat]);
  const value = {
    isLoader,
    setIsLoader,
    longLat,
    setLongLat,
    dataApi,
  };
  return (
    <locationContext.Provider value={value}>
      {children}
    </locationContext.Provider>
  );
};

export default DataProvider;
