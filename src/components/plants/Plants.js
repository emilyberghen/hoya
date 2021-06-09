import React from "react";
import Plant from "./Plant";

function Plants({ plants }) {
  return (
    <>
      <div className="plants">
        <section className="plant addPlant">
          <div className="image"></div>
          <div>
            <h3>Got a new plant?</h3>
            <p>Add it to the jungle</p>
          </div>
        </section>

        {plants.map((plant, i) => (
          <Plant key={i} {...plant} />
        ))}
      </div>
    </>
  );
}

export default Plants;
