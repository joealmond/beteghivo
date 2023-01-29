// TODO: stílus beállítása
import { MAIN_DISPLAY_ROWS } from "../constants/globals.js";

import React, { useEffect, useState } from "react";

export default function Maindisplay() {
  const [allCueDataState, setAllCueDataState] = useState({});
  useEffect(() => {
    async function getAllCue() {
      const response = await fetch("/behivas");
      const allCueData = await response.json();
      setAllCueDataState(allCueData);
    }

    setInterval(() => {
      getAllCue();
    }, 3000);
  }, []);

  return (
    <section>
      <h2>Központi kijelző</h2>
      <div>
        {Array(MAIN_DISPLAY_ROWS)
          .fill(true)
          .map((_, i) => {
            return (
              <div key={i}>
                <h3>Sorszám: {allCueDataState[i]?.sorszam}</h3>
                <h3>Helység: {allCueDataState[i]?.szoba}</h3>
                <h3>
                  Behívás időpontja:{" "}
                  {new Date(
                    Date.parse(allCueDataState[i]?.behívasIdeje)
                  ).toLocaleTimeString("hu-HU")}
                </h3>
              </div>
            );
          })}
      </div>
    </section>
  );
}
