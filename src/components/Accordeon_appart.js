import React, { useState } from "react";
import infos_apparts from "../data_apparts/appartments";
import SingleDropdown from "./Dropdown";
export function Accordeon_appart() {
  const [values, setValues] = useState(infos_apparts);
  return (
    <main>
      <div>
        <section className="test">
          {values.map((val) => {
            return <SingleDropdown key={val.id} {...val} />;
          })}
        </section>
      </div>
    </main>
  );
}
