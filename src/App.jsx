import "./App.css";
import TheWeather from "./Components/TheWeather";
import BgVideo from "./Components/BgVideo";
import { DataProvider } from "./contexts/DataProvider";
import GeoLocation from "./Components/GeoLocation";

function App() {
  return (
    <div className="App min-h-screen">
      {/* ===================== PERF CODE WEATHER ================== */}
      <DataProvider>
        <GeoLocation />
        <BgVideo />
        <TheWeather />
      </DataProvider>
    </div>
  );
}

export default App;
