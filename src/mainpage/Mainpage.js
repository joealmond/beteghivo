// TODO: vizsgálatkód szobákba való elosztása

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
  // const [room, setRoom] = useState({});
  // const exams = examsData.examCodes;

  // switch (examCode) {
  //   case "V01":
  //     setRoom("1");
  //     // console.log("1. Körzeti nővér");
  //     break;
  //   case "V02":
  //     setRoom("1");
  //     // console.log("1. Körzeti nővér");
  //     break;
  //   case "V00":
  //     setRoom("2");
  //     // console.log("2. Általános orvos");
  //     break;
  //   case "V03":
  //     setRoom("2");
  //     // console.log("2. Általános orvos");
  //     break;
  //   case "V04":
  //     setRoom("2");
  //     // console.log("2. Általános orvos");
  //     break;
  //   case "V06":
  //     setRoom("3");
  //     // console.log("3. Bőrgyógyász");
  //     break;
  //   default:
  //   // console.log("Ismeretlen vizsgálat");
  // }
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
        // room={room}
        // setRoom={setRoom}
      />
      <Maindisplay />
      {Array.from({ length: nRooms }, (n, i) => (
        <Localdisplay
          roomsData={{
            szam: roomsData[i].szam,
            megnevezes: roomsData[i].megnevezes,
          }}
          setRoomsData={setRoomsData}
        />
      ))}
      {Array.from({ length: nRooms }, (n, i) => (
        <Localcaller
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
