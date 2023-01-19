import React, { useState, useEffect } from "react";
import Ticketpuller from "../ticketpuller/Ticketpuller.js";
import Maindisplay from "../maindisplay/Maindisplay";
import Localdisplay from "../localdisplay/Localdisplay";
import Localcaller from "../localcaller/Localcaller";

export default function Mainpage({ cueObj, setCueObj }) {
  const [roomsData, setRoomsData] = useState({});

  useEffect(() => {
    async function getRooms() {
      const response = await fetch("/szobak");
      const roomsObj = await response.json();
      setRoomsData(roomsObj);
    }
    getRooms();
  }, []);

  const nRooms = roomsData.length;

  return (
    <>
      <Ticketpuller cueObj={cueObj} setCueObj={setCueObj} />
      <Maindisplay />
      {Array.from({ length: nRooms }, (n, i) => (
        <Localdisplay
          roomsData={roomsData[i].szam + " - " + roomsData[i].megnevezes}
          setRoomsData={setRoomsData}
        />
      ))}
      {Array.from({ length: nRooms }, (n, i) => (
        <Localcaller
          roomsData={roomsData[i].szam + " - " + roomsData[i].megnevezes}
          setRoomsData={setRoomsData}
        />
      ))}
    </>
  );
}
