import React, { useEffect, useState } from "react";
import { locationContext } from "./LocationContext";
import axios from "axios";

export const DataProvider = ({ children }) => {
  // todo: console.log en cada endpoint, el navegador no respode estados de cambio de permisos de geo
  // loader
  const [isLoader, setIsLoader] = useState(true);
  // long lat
  const [longLat, setLongLat] = useState(null);
  // info api
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    if (longLat) {
      console.log("este es el longlat provider", longLat);
      axios
        .post(
          `https://api.openweathermap.org/data/2.5/weather?lat=${longLat.lat}&lon=${longLat.long}&appid=39f4571e6a4b235a7f18b027850c77fe&lang=es`
        )
        .then((res) => {
          setDataApi(res.data);
          setIsLoader(false);
        });
    } else console.log("no existe largo provider", longLat);
  }, [longLat]);
  return (
    <locationContext.Provider
      value={{
        isLoader,
        setIsLoader,
        longLat,
        setLongLat,
        dataApi,
      }}
    >
      {children}
    </locationContext.Provider>
  );
};

export default DataProvider;
