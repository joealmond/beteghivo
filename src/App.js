import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Ticketpage from "./ticketpage/Ticketpage";
import Mainpage from "./mainpage/Mainpage";

function App() {
  const [cueObj, setCueObj] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sorszam"
          element={<Ticketpage cueObj={cueObj} setCueObj={setCueObj} />}
        />
        <Route
          path="/"
          element={<Mainpage cueObj={cueObj} setCueObj={setCueObj} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
