import React from "react";

import Plants from "../components/plants/Plants";
import data from "../data/plants.json";

function PlantPage() {
  return (
    <>
      <h2>12 plants</h2>
      <Plants plants={data} />
    </>
  );
}

export default PlantPage;
