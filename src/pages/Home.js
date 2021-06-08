import React from "react";

import Predictions from "../components/predictions/Predictions";
import predictions from "../data/predictions.json";

const HomePage = () => {
  return (
    <>
      <h2>Predictions</h2>
      <div className="predictions">
        <Predictions predictions={predictions} />
      </div>
    </>
  );
};

export default HomePage;
