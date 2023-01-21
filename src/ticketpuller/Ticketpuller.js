// TODO: Tajszám integrálása, ellenőrzése
// TODO: időpont és egyéb adatok kírása séma alpján
// TODO: jó lenne a switch state helyett valami rugalmasabb megoldás ami követi az apit...

import React, { useEffect } from "react";
import Form from "./Form.js";

const Ticketpuller = ({
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
}) => {
  useEffect(() => {
    switch (examCode) {
      case "V01":
        setRoom("1");
        // console.log("1. Körzeti nővér");
        break;
      case "V02":
        setRoom("1");
        // console.log("1. Körzeti nővér");
        break;
      case "V00":
        setRoom("2");
        // console.log("2. Általános orvos");
        break;
      case "V03":
        setRoom("2");
        // console.log("2. Általános orvos");
        break;
      case "V04":
        setRoom("2");
        // console.log("2. Általános orvos");
        break;
      case "V05":
        setRoom("3");
        // console.log("3. Bőrgyógyász");
        break;
      default:
        setRoom("-");
      // console.log("Nincs ilyen szoba.");
    }
  }, [examCode, setRoom]);

  let time = new Date(Date.parse(cueData.erkezesIdeje)).toLocaleTimeString(
    "hu-HU"
  );

  return (
    <section>
      <h2>Sorszámosztó automata</h2>
      <div>
        <h3>Kérem válasszon vizsgálatot</h3>
        <p>
          Opcionálisan megadhatja tajszámát,
          <br />a gyorsabb ügyintézés érdekében.
        </p>
        <Form
          examsData={examsData}
          setExamsData={setExamsData}
          cueData={cueData}
          setCueData={setCueData}
          examName={examName}
          setExamName={setExamName}
          examCode={examCode}
          setExamCode={setExamCode}
        />

        {cueData.sorszam && (
          <p>
            {"Kiadott sorszám: " + cueData.sorszam}
            {" -  " + examName}
            {" -  " + room + ". szoba"}
          </p>
        )}
        {localStorage.setItem("cueNumber", cueData.sorszam)}
        {localStorage.setItem("cueRemain", cueData.varakozok)}
        {localStorage.setItem("cueInTime", time)}
        {localStorage.setItem("room", room)}
      </div>
    </section>
  );
};

export default Ticketpuller;
