// TODO: stílus beállítása

import React, { useEffect, useState } from "react";

export default function Localdisplay({ roomsData }) {
  const [allCueDataState, setAllCueDataState] = useState({});
  useEffect(() => {
    async function getAllCue() {
      const response = await fetch(`/behivas/${roomsData.szam}`);
      const allCueData = await response.json();
      setAllCueDataState(allCueData);
    }

    setInterval(() => {
      getAllCue();
    }, 3000);
  }, []);

  return (
    <section>
      <h2>Helység kijelző</h2>
      <div>
        <div>
          <h3>Rendelő {roomsData.szam + ".  - " + roomsData.megnevezes}</h3>
        </div>
        <div>
          <div>
            <h3>Sorszám: {allCueDataState?.sorszam}</h3>
            <h3>Helység: {allCueDataState?.szoba}</h3>
            <h3>
              Behívás időpontja:{" "}
              {new Date(
                Date.parse(allCueDataState?.behívasIdeje)
              ).toLocaleTimeString("hu-HU")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
