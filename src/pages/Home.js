import React from "react";

import Predictions from "../components/predictions/Predictions";
import predictions from "../data/predictions.json";

const HomePage = () => {
  return (
    <>
      <Predictions predictions={predictions} />
    </>
  );
};

export default HomePage;
