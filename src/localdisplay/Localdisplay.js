// TODO: stílus beállítása

import React, { useEffect, useState } from "react";

export default function Localdisplay({ roomsData }) {
  const [allCueDataState, setAllCueDataState] = useState({});

  useEffect(() => {
    async function getAllCue() {
      try {
        const response = await fetch(`/behivas/${roomsData.szam}`);
        const allCueData = await response.json();
        if (!response.ok) {
          throw new Error(allCueData.message);
        }
        setAllCueDataState(allCueData);
      } catch (error) {
        console.log(error);
      }
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
          <h3 className="roomHeader">{roomsData?.megnevezes}</h3>
        </div>
        <div>
          <div>
            <h3>
              Sorszám:{" "}
              <p>{allCueDataState.sorszam ? allCueDataState.sorszam : " --"}</p>
            </h3>
            <h3>
              Helység:{" "}
              <p>{allCueDataState.szoba ? allCueDataState.szoba : " --"}</p>
            </h3>
            <h3>
              Behívás időpontja:{" "}
              <p>
                {allCueDataState.behívasIdeje
                  ? new Date(
                      Date.parse(allCueDataState.behívasIdeje)
                    ).toLocaleTimeString("hu-HU")
                  : " --"}
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
