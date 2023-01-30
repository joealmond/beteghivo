import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Ticketpage from "./ticketpage/Ticketpage";
import Mainpage from "./mainpage/Mainpage";

function App() {
  const [roomsData, setRoomsData] = useState([]);
  const [cueData, setCueData] = useState({});
  const [examsData, setExamsData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sorszam" element={<Ticketpage />} />
        <Route
          path="/"
          element={
            <Mainpage
              cueData={cueData}
              setCueData={setCueData}
              examsData={examsData}
              setExamsData={setExamsData}
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
