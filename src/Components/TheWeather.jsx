import React, { useContext, useState } from "react";
import { locationContext } from "../contexts/LocationContext";

const TheWeather = () => {
  // ================ CONVERT CELCIOUS/FARHENHEIT ===========
  const [unit, setUnit] = useState(false);
  // todo: usar context no provider
  const { dataApi } = useContext(locationContext);

  return (
    <>
      <main className="bg-[#00000080] min-h-screen">
        <header className="text-center pt-10 md:mb-[2vh]">
          <h1 className="text-5xl font-bold">The weather app</h1>
          <span className="">api by Open Weather map</span>
        </header>
        <section className="text-center mb-14 md:mb-[15vh] max-w-xl mx-auto">
          <div className="flex items-center justify-around">
            <h2 className="font-light text-3xl pt-7">
              {dataApi.name}, {dataApi.sys?.country}
            </h2>
            <div className="relative px-3 flex justify-center">
              <img
                src={`http://openweathermap.org/img/wn/${dataApi.weather?.[0].icon}@2x.png`}
                alt="icon-wheather"
              />
              <span className="absolute bottom-0 font-light">
                {dataApi.weather?.[0].description}
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-wrap gap-x-5">
            <span className="font-bold text-6xl">
              {unit
                ? dataApi.main?.temp
                : ((dataApi.main?.temp * 9) / 5 + 32).toFixed(1)}
              º{unit ? "C" : "F"}
            </span>
            <button
              className="bg-gray-700 text-white active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-400 rounded-full"
              onClick={() => setUnit(!unit)}
            >
              Change to {unit ? "fahrenheit" : "celcious"}
            </button>
          </div>
        </section>
        <aside className="flex flex-wrap gap-y-3 text-center">
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-wind fa-4x"></i>
            <span>
              Wind Speed:{" "}
              <span className="font-light">{dataApi.wind?.speed} M/s</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-cloud fa-4x"></i>
            <span>
              Clouds: <span className="font-light">{dataApi.clouds?.all}%</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-temperature-three-quarters fa-4x"></i>
            <span>
              Pressure:{" "}
              <span className="font-light">{dataApi.main?.pressure} Pha</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-droplet fa-4x"></i>
            <span>
              Humidity:{" "}
              <span className="font-light">{dataApi.main?.humidity}%</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-temperature-arrow-up fa-4x"></i>
            <span>
              Max:{" "}
              <span className="font-light">
                {unit
                  ? dataApi.main?.temp_max
                  : ((dataApi.main?.temp_max * 9) / 5 + 32).toFixed(1)}
                º{unit ? "C" : "F"}
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-temperature-arrow-down fa-4x"></i>
            <span>
              min:{" "}
              <span className="font-light">
                {unit
                  ? dataApi.main?.temp_min
                  : ((dataApi.main?.temp_min * 9) / 5 + 32).toFixed(1)}
                º{unit ? "C" : "F"}
              </span>
            </span>
          </div>
        </aside>
      </main>
    </>
  );
};

export default TheWeather;
// `https://api.openweathermap.org/data/2.5/weather?lat=${GetLatitude}&lon=${GetLongitude}&appid=39f4571e6a4b235a7f18b027850c77fe&lang=es`
