import React, { useState, useEffect } from "react";
import Ticketpuller from "../ticketpuller/Ticketpuller.js";
import Maindisplay from "../maindisplay/Maindisplay";
import Localdisplay from "../localdisplay/Localdisplay";
import Localcaller from "../localcaller/Localcaller";

export default function Mainpage({
  cueData,
  setCueData,
  examsData,
  setExamsData,
  examName,
  setExamName,
  examCode,
  setExamCode,
}) {
  const [roomsData, setRoomsData] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    async function getRooms() {
      const response = await fetch("/szobak");
      const roomsData = await response.json();
      setRoomsData(roomsData);
    }
    getRooms();
  }, []);

  const nRooms = roomsData.length;

  return (
    <>
      <Ticketpuller
        cueData={cueData}
        setCueData={setCueData}
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
          key={roomsData[i].szam}
          roomsData={{
            szam: roomsData[i].szam,
            megnevezes: roomsData[i].megnevezes,
          }}
          setRoomsData={setRoomsData}
        />
      ))}
      {Array.from({ length: nRooms }, (n, i) => (
        <Localcaller
          key={roomsData[i].szam}
          roomsData={{
            szam: roomsData[i].szam,
            megnevezes: roomsData[i].megnevezes,
          }}
          setRoomsData={setRoomsData}
        />
      ))}
    </>
  );
}
