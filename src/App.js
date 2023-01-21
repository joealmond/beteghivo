import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Ticketpage from "./ticketpage/Ticketpage";
import Mainpage from "./mainpage/Mainpage";

function App() {
  const [cueData, setCueData] = useState({});
  const [examsData, setExamsData] = useState({});
  const [examName, setExamName] = useState({});
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
              examName={examName}
              setExamName={setExamName}
              examCode={examCode}
              setExamCode={setExamCode}
              room={room}
              setRoom={setRoom}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
