import React from "react";
import { Link } from "react-router-dom";

import Plants from "../components/Plants";
import data from "../data/plants.json";

function PlantPage() {
  return (
    <>
      <Plants plants={data} />
    </>
  );
}

export default PlantPage;
