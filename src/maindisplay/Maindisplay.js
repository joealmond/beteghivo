// TODO: 5db behívott sorszám kijelzése
// TODO:  rendelerés programatikusan
// TODO: stílus beállítása

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
        <div>
          <h3>Sorszám: {allCueDataState[0]?.sorszam}</h3>
          <h3>Helység: {allCueDataState[0]?.szoba}</h3>
          <h3>
            Behívás időpontja:{" "}
            {new Date(
              Date.parse(allCueDataState[0]?.behívasIdeje)
            ).toLocaleTimeString("hu-HU")}
          </h3>
        </div>
        <div>
          <p>Sorszám: {allCueDataState[1]?.sorszam}</p>
          <p>Helység: {allCueDataState[1]?.szoba}</p>
          <p>
            Behívás időpontja:{" "}
            {new Date(
              Date.parse(allCueDataState[1]?.behívasIdeje)
            ).toLocaleTimeString("hu-HU")}
          </p>
        </div>
      </div>
    </section>
  );
}
