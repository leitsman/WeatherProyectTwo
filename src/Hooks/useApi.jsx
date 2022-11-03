import axios from "axios";
import React, { useEffect, useState } from "react";

const useApi = (BaseUrl, getData) => {
  // =============== CONDITION LOADER/SHOW WEATHER ===========
  const [LoaderWeather, setLoaderWeather] = useState(false);
  const [Api, setApi] = useState({});
  useEffect(() => {
    if (BaseUrl) {
      axios.get(BaseUrl).then((response) => setApi(getData(response)));
    }
  }, []);

  const refreshData = (url, condition) => {
    axios.get(url).then((response) => {
      setApi(getData(response));
      setLoaderWeather(condition);
    });
  };
  return { Api, refreshData, LoaderWeather };
};

export default useApi;
