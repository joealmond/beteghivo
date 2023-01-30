// TODO: stílus beállítása
import { MAIN_DISPLAY_ROWS } from "../constants/globals.js";

import React, { useEffect, useState } from "react";

export default function Maindisplay() {
  const [allCueDataState, setAllCueDataState] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllCue() {
      try {
        const response = await fetch("/behivas");
        // it allways gives back only array of length 3
        const allCueData = await response.json();
        if (!response.ok) {
          throw new Error(allCueData.message);
        }
        setAllCueDataState(allCueData);
      } catch (error) {
        setError(error.message);
      }
      console.log(error);
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
                <h3>
                  Sorszám:{" "}
                  {allCueDataState[i] ? allCueDataState[i].sorszam : " --"}
                </h3>
                <h3>
                  Helység:{" "}
                  {allCueDataState[i] ? allCueDataState[i].szoba : " --"}
                </h3>
                <h3>
                  Behívás időpontja:
                  {allCueDataState[i]
                    ? new Date(
                        Date.parse(allCueDataState[i]?.behívasIdeje)
                      ).toLocaleTimeString("hu-HU")
                    : " --"}
                </h3>
              </div>
            );
          })}
      </div>
    </section>
  );
}
