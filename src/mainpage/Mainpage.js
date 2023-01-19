import React, { useState, useEffect } from "react";
import Ticketpuller from "../ticketpuller/Ticketpuller.js";
import Maindisplay from "../maindisplay/Maindisplay";
import Localdisplay from "../localdisplay/Localdisplay";
import Localcaller from "../localcaller/Localcaller";

export default function Mainpage({
  cueObj,
  setCueObj,
  examsData,
  setExamsData,
  examName,
  setExamName,
  examCode,
  setExamCode,
}) {
  const [roomsData, setRoomsData] = useState({});
  const [room, setRoom] = useState({});
  const exams = examsData.examCodes;

  switch (examCode) {
    case "V01":
      setRoom("1");
      // console.log("1. Körzeti nővér");
      break;
    case "V02":
      setRoom("1");
      // console.log("1. Körzeti nővér");
      break;
    case "V00":
      setRoom("2");
      // console.log("2. Általános orvos");
      break;
    case "V03":
      setRoom("2");
      // console.log("2. Általános orvos");
      break;
    case "V04":
      setRoom("2");
      // console.log("2. Általános orvos");
      break;
    case "V06":
      setRoom("3");
      // console.log("3. Bőrgyógyász");
      break;
    default:
    // console.log("Ismeretlen vizsgálat");
  }
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
      <Ticketpuller
        cueObj={cueObj}
        setCueObj={setCueObj}
        examsData={examsData}
        setExamsData={setExamsData}
        examName={examName}
        setExamName={setExamName}
        examCode={examCode}
        setExamCode={setExamCode}
        room={room}
        setRoom={setRoom}
      />
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
