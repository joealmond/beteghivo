import React, { useState, useEffect, useRef } from "react";
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
  room,
  setRoom,
}) {
  const [roomsData, setRoomsData] = useState({});
  const nRoomsRef = useRef("");

  useEffect(() => {
    async function getRooms() {
      const response = await fetch("/szobak");
      const roomsData = await response.json();
      setRoomsData(roomsData);
      nRoomsRef.current = roomsData.length;
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
          nRoomsRef={nRoomsRef}
          roomId={roomsData[i].szam}
          examName={examName}
          setExamName={setExamName}
          room={room}
          setRoom={setRoom}
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
