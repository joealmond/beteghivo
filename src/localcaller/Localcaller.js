import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

// TODO: javítani a táblázat formátumát, adatait
// TODO: stílus beállítása - lelóg a gomb, táblázat megjelenés stb..
// TODO: programatikusan meghatározni a szobák számát
// TODO: lefrissíteni a listát gombnyomáskor

export default function Localcaller({ roomsData, roomId }) {
  const [rowState, setRowState] = useState([]);
  const [error, setError] = useState(null);

  function TableRow(roomId) {
    useEffect(() => {
      async function getRoomCue() {
        try {
          const response = await fetch(`/sorszam/${roomId}`);
          // the number of "varakozok" is does not seems correct
          const roomCueData = await response.json();
          if (!response.ok) {
            throw new Error(roomCueData.message);
          }
          setRowState(roomCueData);
          if (roomCueData[0]) {
            setRowState(roomCueData);
          } else {
            setRowState([
              {
                sorszam: " --",
                vizsgalatKod: " --",
                taj: " --",
                erkezesIdeje: " --",
                varakozok: " --",
              },
            ]);
          }
        } catch (error) {
          setError(error.message);
        }
        console.log(error);
      }
      let interval = setInterval(() => {
        getRoomCue();
      }, 10000);
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        {rowState.map((row) => (
          <tr key={uuid()}>
            <td>{row.sorszam ? row.sorszam : " --"}</td>
            <td>{row.vizsgalatKod ? row.vizsgalatKod : " --"}</td>
            <td>
              {row.erkezesIdeje !== " --" && row.erkezesIdeje
                ? new Date(Date.parse(row.erkezesIdeje)).toLocaleTimeString(
                    "hu-HU"
                  )
                : " --"}
            </td>
            <td>{row.taj ? row.taj : " --"}</td>
            <td>{row.varakozok ? row.varakozok : " --"}</td>
          </tr>
        ))}
      </>
    );
  }

  function Button(roomId) {
    async function callNext() {
      try {
        if (rowState[0]?.sorszam !== " --" && rowState[0]) {
          const response = await fetch(`/behivas/${roomId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(rowState[0]?.sorszam),
          });
          const callData = await response.json();
          if (!response.ok) {
            throw new Error(callData.message);
          }

          // TODO: ezeket ki jelezgetni
          // {
          //   "sorszam": 0,
          //   "szoba": 0,
          //   "behívasIdeje": "2023-01-30T12:17:25.480Z"
          // }
        }
      } catch (error) {
        setError(error.message);
      }
      console.log(error);
    }

    return <button onClick={callNext}>Kérem a következőt</button>;
  }
  return (
    <section>
      <h2>Behívó</h2>
      <div>
        <div>
          <h3>{roomsData?.megnevezes}</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sorszám</th>
              <th>Vizsgálat</th>
              <th>Időpont</th>
              <th>TAJ</th>
              <th>Várakozók</th>
            </tr>
          </thead>
          <tbody>{TableRow(roomId)}</tbody>
        </table>
        {Button(roomId)}
      </div>
    </section>
  );
}
