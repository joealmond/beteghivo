import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Ticketpage from "./ticketpage/Ticketpage";
import Mainpage from "./mainpage/Mainpage";

function App() {
  const [cueObj, setCueObj] = useState({});
  const [examsData, setExamsData] = useState({});
  const [examName, setExamName] = useState({});
  const [examCode, setExamCode] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sorszam"
          element={<Ticketpage cueObj={cueObj} setCueObj={setCueObj} />}
        />
        <Route
          path="/"
          element={
            <Mainpage
              cueObj={cueObj}
              setCueObj={setCueObj}
              examsData={examsData}
              setExamsData={setExamsData}
              examName={examName}
              setExamName={setExamName}
              examCode={examCode}
              setExamCode={setExamCode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
