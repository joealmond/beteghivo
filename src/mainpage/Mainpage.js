import React, { useState, useEffect } from "react";
import Ticketpuller from "../ticketpuller/Ticketpuller.js";
import Maindisplay from "../maindisplay/Maindisplay";
import Localdisplay from "../localdisplay/Localdisplay";
import Localcaller from "../localcaller/Localcaller";

const exams = ["V00", "V01", "V02", "V03", "V04", "V06"];
switch (exams[0]) {
  case "V01":
    console.log("1. Körzeti nővér");
    break;
  case "V02":
    console.log("1. Körzeti nővér");
    break;
  case "V00":
    console.log("2. Általános orvos");
    break;
  case "V03":
    console.log("2. Általános orvos");
    break;
  case "V04":
    console.log("2. Általános orvos");
    break;
  case "V06":
    console.log("3. Bőrgyógyász");
    break;
  default:
    console.log("Ismeretlen vizsgálat");
}

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
