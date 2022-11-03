import React, { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import TheLoader from "./TheLoader";
import videobg from "../assets/cloudsLoop.mp4";

const TheWeather = ({ LongLat }) => {
  // ================ CONVERT CELCIOUS/FARHENHEIT ===========
  const [Convert, setConvert] = useState(false);
  const { Api, refreshData, LoaderWeather } = useApi(
    "",
    (getResponse) => getResponse.data
  );

  useEffect(() => {
    if (LongLat.length) {
      let GetLongitude = Number(LongLat[0]);
      let GetLatitude = Number(LongLat[1]);
      refreshData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${GetLatitude}&lon=${GetLongitude}&appid=39f4571e6a4b235a7f18b027850c77fe&lang=es`,
        true
      );
    }
  }, [LongLat]);

  console.log(Api);

  return (
    <>
      <video
        src={videobg}
        autoPlay
        loop
        muted
        className="video--background"
      ></video>
      {!LoaderWeather && <TheLoader opacityy={0.5} />}
      {LoaderWeather && (
        <div className="container--weather-info">
          {/* {!LoaderWeather && <TheLoader opacity="0.3" />} */}
          {/* {LoaderWeather&& } */}
          <div className="content--title">
            <h1>Weather App</h1>
            <small>by MDKG</small>
            <div className="content--buttos-options">
              <button onClick={() => setConvert(!Convert)}>
                Change to {Convert ? "Kelvin" : "Celcious"}
              </button>
            </div>
          </div>

          <div className="content--img-country">
            <div className="content--temp-country">
              <span className="content--countryDate">
                {Api?.name}, {Api.sys?.country}
              </span>
              <span className="content--temp">
                {Convert
                  ? (Api.main?.temp - 273.15).toFixed(1)
                  : Api.main?.temp}
                º{Convert ? "C" : "K"}
              </span>
            </div>

            <div className="content--img-description">
              <div className="content--img-weather">
                <img
                  src={`http://openweathermap.org/img/wn/${Api.weather?.[0].icon}@2x.png`}
                  alt="IconWeather"
                  className="icon--weather"
                />
              </div>
              <span>{Api.weather?.[0].description}</span>
            </div>
          </div>
          <div className="content--info-details-weather">
            <div className="content--info-detail">
              <i className="fa-solid fa-wind fa-4x"></i>
              <span>
                <b>Wind Speed: </b>
                {Api.wind?.speed} M/s
              </span>
            </div>
            <div className="content--info-detail">
              <i className="fa-solid fa-cloud fa-4x"></i>
              <span>
                <b>Clouds: </b>
                {Api.clouds?.all}%
              </span>
            </div>
            <div className="content--info-detail">
              <i className="fa-solid fa-temperature-three-quarters fa-4x"></i>
              <span>
                <b>Pressure: </b>
                {Api.main?.pressure} hPa
              </span>
            </div>
            <div className="content--info-detail">
              <i className="fa-solid fa-droplet fa-4x"></i>
              <span>
                <b>Humidity: </b>
                {Api.main?.humidity} %
              </span>
            </div>
            <div className="content--info-detail">
              <div className="">
                <i className="fa-solid fa-temperature-arrow-down fa-3x"></i>
                <i className="fa-solid fa-temperature-arrow-up fa-3x"></i>
              </div>
              <span>
                <b>Min: </b>
                {Convert
                  ? (Api.main?.temp_min - 273.15).toFixed(1)
                  : Api.main?.temp_min}
                º{Convert ? "C" : "K"}
              </span>
              <span>
                <b>Max: </b>
                {Convert
                  ? (Api.main?.temp_max - 273.15).toFixed(1)
                  : Api.main?.temp_max}
                º{Convert ? "C" : "K"}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TheWeather;
// `https://api.openweathermap.org/data/2.5/weather?lat=${GetLatitude}&lon=${GetLongitude}&appid=39f4571e6a4b235a7f18b027850c77fe&lang=es`
