import React from "react";
import Prediction from "./Prediction";

function Predictions({ predictions }) {
  return (
    <>
      <div className="predictions">
        {predictions.map((prediction, i) => (
          <Prediction key={i} {...prediction} />
        ))}
      </div>
    </>
  );
}

export default Predictions;
