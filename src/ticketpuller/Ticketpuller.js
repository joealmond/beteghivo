// TODO: Form külün modul komponensbe rakása és működésének javítása
// TODO: Form szerver POST javítása - valmiért blokkolja a szerver
// TODO: Sorszámozni a gombokat
// TODO: Tajszám integrálása, ellenőrzése
// TODO: időpont és egyéb adatok kírása séma alpján

import React, { useState, useEffect } from "react";

const Ticketpuller = ({
  cueData,
  setCueData,
  examsData,
  setExamsData,
  examName,
  setExamName,
  examCode,
  setExamCode,
  // room,
  // setRoom,
}) => {
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

  const ExamButton = ({
    cueData,
    setCueData,
    examsData,
    setExamsData,
    examName,
    setExamName,
    examCode,
    setExamCode,
    exam,
  }) => {
    function handleClick() {
      console.log("hihi");
      let examCode = Object.values(examsData.examCodes)[
        Object.values(examsData.exams).indexOf(examName)
      ];
      setExamName(exam);
      // setExamCode(examCode);

      let taj = "";
      const sendObj = {
        vizsgalatKod: examCode,
        taj: taj,
      };

      async function getCueNumber() {
        console.log("Mennyi?");
        const response = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendObj),
        });
        const cueData = await response.json();
        // RESPONSE SCHEMA:
        // {
        //   "sorszam": 249,
        //   "vizsgalatKod": "V00",
        //   "taj": "",
        //   "erkezesIdeje": "2023-01-20T08:53:54.889278837",
        //   "varakozok": 12
        // }
        setCueData(cueData);
      }
      getCueNumber();
    }

    return (
      <input type="submit" name="exam" value={exam} onClick={handleClick} />
    );
  };

  function renderExam(exam) {
    return (
      <li key={exam}>
        <ExamButton
          exam={exam}
          cueData={cueData}
          setCueData={setCueData}
          examsData={examsData}
          setExamsData={setExamsData}
          examName={examName}
          setExamName={setExamName}
          examCode={examCode}
          setExamCode={setExamCode}
        />
      </li>
    );
  }

  return (
    <section>
      <h2>Sorszámosztó automata</h2>
      <div>
        <h3>Kérem válasszon vizsgálatot</h3>
        <form action="/sorszam" method="get" target="_blank">
          <div>
            <p>
              Opcionálisan megadhatja tajszámát a gyorsabb ügyintézés érdekében.
            </p>
            <div className="inputWithLabel">
              <label htmlFor="name">Tajszám</label>
              <input
                type="text"
                id="name"
                name="name"
                minLength="8"
                maxLength="8"
                size="10"
              />
            </div>
          </div>
          <div>
            {examsData.exams && (
              <ul>{examsData.exams.map((exam) => renderExam(exam))}</ul>
            )}
          </div>
        </form>
        {cueData.sorszam && (
          <p>
            {"Kiadott sorszám: " + cueData.sorszam}
            {" - Vizsgálat: " + examName}
            {/* {" - Szoba: " + room} */}
          </p>
        )}
        {localStorage.setItem("cueNumber", cueData.sorszam)}
      </div>
    </section>
  );
};

export default Ticketpuller;
