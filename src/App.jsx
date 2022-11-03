import { useState } from "react";
import "./App.css";
import RequestGeo from "./Components/RequestGeo";
import TheWeather from "./Components/TheWeather";

function App() {
  return (
    <div className="App">
      {/* ================= Request ============= */}
      <RequestGeo />
    </div>
  );
}

export default App;
