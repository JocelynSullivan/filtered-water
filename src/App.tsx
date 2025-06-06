import { useState } from "react";
import "./App.css";
import Polluted from "./polluted";
import Filtered from "./filtered";
import FilterWater from "./filter";

function App() {
  const [waterImage, setWaterImage] = useState<boolean>(false);

  const handleOnClick = () => {
    let filteredWater: string[] = FilterWater(water, contaminates);
    setWater(filteredWater);

    setWaterImage(true);
  };

  const [water, setWater] = useState<string[]>([
    "chlorine",
    "dirt",
    "oil",
    "debris",
  ]);

  let contaminates: string[] = ["dirt", "oil", "debris"];

  return (
    <div className="filter">
      <h1>Water Filter</h1>
      {/* <Polluted water={water} /> */}
      {waterImage ? <Filtered water={water} /> : <Polluted water={water} />}
      <button onClick={handleOnClick}></button>
    </div>
  );
}

export default App;
