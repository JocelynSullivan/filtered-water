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
    "salt",
    "chlorine",
    "dirt",
    "calcite",
    "uranium",
    "arsenic",
    "pharmaceuticals",
    "lead",
  ]);

  let contaminates: string[] = ["dirt", "oil", "debris"];

  return (
    <>
      <div>
        <h1>Water Filter</h1>
      </div>
      <section className="filter">
        {/* <Polluted water={water} /> */}
        <div className="wtr">
          <p>Current contaminates: </p>
          {waterImage ? <Filtered water={water} /> : <Polluted water={water} />}
        </div>
        <div className="button">
          <button onClick={handleOnClick}>Click to Filter!</button>
        </div>
      </section>
    </>
  );
}

export default App;
