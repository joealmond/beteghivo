import React, { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";

// TODO: javítani a táblázat formátumát, adatait
// TODO: stílus beállítása - lelóg a gomb, táblázat megjelenés stb..
// TODO: redundás kód eltűntetése
// TODO: programatikusan meghatározni a szobák számát
// TODO: csak az adatokkal dolgozni és abból renderelni az elemekt

export default function Localcaller({ roomsData, roomId }) {
  const [renderRenderRowState, setRenderRenderRowState] = useState();
  const [renderButtonState, setRenderButtonState] = useState();

  const cueRefData1 = useRef([]);
  const cueRefData2 = useRef([]);
  const cueRefData3 = useRef([]);

  const cueRef1 = useRef([]);
  const cueRef2 = useRef([]);
  const cueRef3 = useRef([]);
  const cueNumRef = useRef(localStorage.getItem("cueNumber"));

  let cueArray = {};

  for (let i = 0; i < roomsData.length; i++) {
    cueArray[i] = [];
  }

  let cueArrayData = {};

  for (let i = 0; i < roomsData.length; i++) {
    cueArrayData[i] = [];
  }

  let tajTemp = "-";

  function RenderRow(roomId) {
    if (
      roomId === Number(localStorage.getItem("room")) &&
      localStorage.getItem("cueNumber") !== cueNumRef.current
    ) {
      cueArray[roomId - 1] = (
        <tr key={uuid()}>
          <td>{localStorage.getItem("cueNumber")}</td>
          <td>{roomsData.megnevezes}</td>
          <td>{localStorage.getItem("cueInTime")}</td>
          <td>{tajTemp}</td>
          <td>{roomId}</td>
          <td>{localStorage.getItem("room")}</td>
        </tr>
      );

      cueArrayData[roomId - 1] = {
        cueNumber: localStorage.getItem("cueNumber"),
        room: localStorage.getItem("room"),
        roomId: roomId,
      };
      cueRefData1.current = [...cueRefData1.current, cueArrayData[0]];
      cueRefData2.current = [...cueRefData2.current, cueArrayData[1]];
      cueRefData3.current = [...cueRefData3.current, cueArrayData[2]];

      cueNumRef.current = localStorage.getItem("cueNumber");
      cueRef1.current = [...cueRef1.current, cueArray[0]];
      cueRef2.current = [...cueRef2.current, cueArray[1]];
      cueRef3.current = [...cueRef3.current, cueArray[2]];
    }
    if (roomId === 1) return cueRef1.current;
    if (roomId === 2) return cueRef2.current;
    if (roomId === 3) return cueRef3.current;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderRenderRowState(RenderRow(roomId));
    }, 10000);

    return () => clearInterval(interval);
  }, [renderButtonState]);

  useEffect(() => {
    setRenderButtonState(Button(roomId));
  }, []);

  function Button(roomId) {
    let jsonData = {};
    let renderData = {};
    if (roomId === 1) {
      jsonData.current = cueRefData1.current;
      renderData.current = cueRef1.current;
    }
    if (roomId === 2) {
      jsonData.current = cueRefData2.current;
      renderData.current = cueRef2.current;
    }
    if (roomId === 3) {
      jsonData.current = cueRefData3.current;
      renderData.current = cueRef3.current;
    }
    async function callNext() {
      const response = await fetch(`/behivas/${roomId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData.current[0].cueNumber),
      });
      const callData = await response.json();
      jsonData.current.shift();
      renderData.current.shift();
      console.log(callData.sorszam, callData.szoba, callData.behívasIdeje);
    }

    return <button onClick={() => callNext()}>Kérem a következőt</button>;
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
          <tbody>{renderRenderRowState}</tbody>
        </table>
        {renderButtonState}
      </div>
    </section>
  );
}
