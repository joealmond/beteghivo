import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticketpage from "./ticketpage/Ticketpage";
import Mainpage from "./mainpage/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sorszam" element={<Ticketpage />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
