import React, { useEffect, useState } from "react";
import TheWeather from "./TheWeather";
import TheLoader from "./TheLoader";

const RequestGeo = () => {
  // =============== SEND TO THEWEATHER LONG/LAT =============
  const [LongLat, setLongLat] = useState([]);
  // ================= LOADING AND MESSAGE ERROR ===========
  const [Loader, setLoader] = useState(true);
  const [MessageError, setMessageError] = useState(false);
  // =================== function geolacation ==================
  useEffect(() => {
    const success = (position) => {
      let coords = position.coords;
      setLoader(false);
      setMessageError(false);
      console.log(coords.longitude);
      setLongLat([coords.latitude, coords.longitude]);
      //   console.log(coords);
    };
    const error = (err) => {
      setMessageError(true);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
  let urlBase =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=39f4571e6a4b235a7f18b027850c77fe";

  return (
    <>
      {Loader && <TheLoader ValueMessage={MessageError} />}
      <TheWeather LongLat={LongLat} />
    </>
  );
};

export default RequestGeo;
