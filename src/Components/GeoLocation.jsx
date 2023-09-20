import React, { useContext, useEffect, useState } from "react";
import { locationContext } from "../contexts/LocationContext";
import TheLoader from "./TheLoader";

const GeoLocation = () => {
  const [isAllow, setIsAllow] = useState(false);
  // loader
  const { setIsLoader, setLongLat, isLoader, longlat } =
    useContext(locationContext);
  // longitude latitude
  useEffect(() => {
    const success = (position) => {
      let coords = position.coords;
      // disabled error geo
      setIsAllow(true);
      // send cords
      setLongLat({
        long: coords.longitude,
        lat: coords.latitude,
      });
      console.log(longlat, "funcionando localizacion");
    };
    const error = (err) => {
      console.log("localizacion error");
      setIsAllow(false);
      setIsLoader(true);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <>
      {isLoader && (
        <TheLoader style={{ opacity: isAllow ? 0.9 : 1 }}>
          {isAllow ? "Cargando..." : "Debe dar permisos de geolocalizacion"}
        </TheLoader>
      )}
    </>
  );
};

export default GeoLocation;
