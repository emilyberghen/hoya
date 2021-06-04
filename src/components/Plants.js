import React from "react";
import Plant from "./Plant";

function Plants({ plants }) {
  return (
    <>
      <div className="plants">
        {plants.map((plant, i) => (
          <Plant key={i} {...plant} />
        ))}
      </div>
    </>
  );
}

export default Plants;