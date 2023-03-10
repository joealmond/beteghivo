import React, { useEffect } from "react";

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
      try {
        const response = await fetch("/vizsgalat");
        const examsData = await response.json();
        if (!response.ok) {
          throw new Error(examsData.message);
        }
        setExamsData(examsData);
      } catch (error) {
        console.log(error);
      }
    }
    getExams();
  }, []);

  useEffect(() => {
    async function getRooms() {
      try {
        const response = await fetch("/szobak");
        const roomsData = await response.json();
        if (!response.ok) {
          throw new Error(roomsData.message);
        }

        if (roomsData[0]) {
          setRoomsData(roomsData);
        } else {
          setRoomsData([
            {
              szam: 1,
              megnevezes: "1.szoba",
            },
            {
              szam: 2,
              megnevezes: "2.szoba",
            },
            {
              szam: 3,
              megnevezes: "3.szoba",
            },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
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
      <Maindisplay roomsData={roomsData} />

      {renderLocaldisplay(roomsData, setRoomsData)}
      {renderLocalcaller(roomsData, setRoomsData)}
    </>
  );
}
