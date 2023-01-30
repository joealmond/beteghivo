import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

// TODO: javítani a táblázat formátumát, adatait
// TODO: stílus beállítása - lelóg a gomb, táblázat megjelenés stb..
// TODO: redundás kód eltűntetése
// TODO: programatikusan meghatározni a szobák számát
// TODO: csak az adatokkal dolgozni és abból renderelni az elemekt
// TODO: lefrissíteni a listát gombnyomáskor

export default function Localcaller({ roomsData, roomId }) {
  const [rowState, setRowState] = useState([]);
  const [renderButtonState, setRenderButtonState] = useState();

  function TableRow(roomId) {
    useEffect(() => {
      async function getRoomCue() {
        const response = await fetch(`/sorszam/${roomId}`);
        const roomCueData = await response.json();
        if (roomCueData[0]) {
          setRowState(roomCueData);
        } else {
          setRowState([
            {
              sorszam: "---",
              vizsgalatKod: "---",
              taj: "-------",
              erkezesIdeje: "----",
              varakozok: "--",
            },
          ]);
        }
      }
      let interval = setInterval(() => {
        getRoomCue();
      }, 10000);
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        {rowState.map((row, i) => (
          <tr key={uuid()}>
            <td>{row.sorszam}</td>
            <td>{row.vizsgalatKod}</td>
            <td>{row.erkezesIdeje}</td>
            <td>{row.taj}</td>
            <td>{row.varakozok}</td>
          </tr>
        ))}
      </>
    );
  }

  function Button(roomId) {
    async function callNext() {
      const response = await fetch(`/behivas/${roomId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rowState[0].sorszam),
      });
      // TODO: need this?
      const callData = await response.json();
    }

    return <button onClick={callNext}>Kérem a következőt</button>;
  }
  return (
    <section>
      <h2>Behívó</h2>
      <div>
        <div>
          <h3>Rendelő {roomsData.szam + ".  - " + roomsData.megnevezes}</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sorszám</th>
              <th>Vizsgálat</th>
              <th>Időpont</th>
              <th>TAJ</th>
              <th>Szoba</th>
            </tr>
          </thead>
          <tbody>{TableRow(roomId)}</tbody>
        </table>
        {Button(roomId)}
      </div>
    </section>
  );
}
