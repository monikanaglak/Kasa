import React, { useState } from "react";
import infos_apparts from "../data_apparts/appartments.js";
import { Box } from "./Gallery_box";
export function Gallery() {
  const [appartments, setappartments] = useState(infos_apparts);
  return (
    <main>
      <div>
        <section className="container_appartments">
          <div className="flex_appartments">
            {appartments.map((appartement) => {
              return <Box key={appartement.id} {...appartement} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
