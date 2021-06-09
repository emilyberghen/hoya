import React from "react";

import plants from "../data/plants.json";
import PlantDetail from "../components/plants/PlantDetail";

function PlantPage({ match }) {
  const {
    params: { plant },
  } = match;

  const index = plants.map((el) => el.slug).indexOf(plant);
  const currentPlant = plants[index];

  return (
    <>
      <PlantDetail {...currentPlant}></PlantDetail>
    </>
  );
}

export default PlantPage;
