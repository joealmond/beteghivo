import React, { useEffect, useState } from "react";

import Ticketpuller from "../ticketpuller/Ticketpuller.js";
import Maindisplay from "../maindisplay/Maindisplay";
import Localdisplay from "../localdisplay/Localdisplay";
import Localcaller from "../localcaller/Localcaller";

export default function Mainpage({
  cueData,
  setCueData,
  examsData,
  setExamsData,
  roomsData,
  setRoomsData,
}) {
  useEffect(() => {
    async function getExams() {
      const response = await fetch("/vizsgalat");
      const examsData = await response.json();
      const exams = examsData.map((exam) => exam.megnevezes);
      const examCodes = examsData.map((exam) => exam.kod);
      setExamsData({ exams, examCodes });
    }
    getExams();
  }, []);

  useEffect(() => {
    async function getRooms() {
      const response = await fetch("/szobak");
      const roomsData = await response.json();
      setRoomsData(roomsData);
    }
    getRooms();
  }, []);

  function renderLocaldisplay(roomsData, setRoomsData) {
    return Array.from({ length: roomsData.length }, (n, i) => (
      <Localdisplay
        key={roomsData[i].szam}
        roomsData={{
          szam: roomsData[i].szam,
          megnevezes: roomsData[i].megnevezes,
        }}
        setRoomsData={setRoomsData}
      />
    ));
  }

  function renderLocalcaller(roomsData, setRoomsData) {
    return Array.from({ length: roomsData.length }, (n, i) => (
      <Localcaller
        key={roomsData[i].szam}
        roomId={roomsData[i].szam}
        roomsData={{
          szam: roomsData[i].szam,
          megnevezes: roomsData[i].megnevezes,
        }}
        setRoomsData={setRoomsData}
      />
    ));
  }

  return (
    <>
      <Ticketpuller
        cueData={cueData}
        setCueData={setCueData}
        examsData={examsData}
        setExamsData={setExamsData}
        roomsData={roomsData}
      />
      <Maindisplay />
      {renderLocaldisplay(roomsData, setRoomsData)}
      {renderLocalcaller(roomsData, setRoomsData)}
    </>
  );
}
