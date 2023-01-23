// TODO: az összes state átnézése és kidobálni ami nem kell
// TODO: a state-ket megoldani objektumokkal
// TODO: üres objektumértékek elé "?"! default értékek beírogatása
// TODO: esetleg queryparamétereken átadni az értékeket local storge helyett
// TODO: try-chatch blokkok async kódokhoz és egyéb helyekre!!!
// TODO: globális változókat egy helyre tenni!

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Ticketpage from "./ticketpage/Ticketpage";
import Mainpage from "./mainpage/Mainpage";

function App() {
  const [roomsData, setRoomsData] = useState({});
  const [cueData, setCueData] = useState({});
  const [examsData, setExamsData] = useState({});
  const [examCode, setExamCode] = useState({});
  const [room, setRoom] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sorszam"
          element={
            <Ticketpage
              cueData={cueData}
              setCueData={setCueData}
              room={room}
              setRoom={setRoom}
            />
          }
        />
        <Route
          path="/"
          element={
            <Mainpage
              cueData={cueData}
              setCueData={setCueData}
              examsData={examsData}
              setExamsData={setExamsData}
              examCode={examCode}
              setExamCode={setExamCode}
              room={room}
              setRoom={setRoom}
              roomsData={roomsData}
              setRoomsData={setRoomsData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
