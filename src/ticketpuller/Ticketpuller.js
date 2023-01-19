import React, { useState, useEffect } from "react";

const Ticketpuller = ({
  cueObj,
  setCueObj,
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
    async function getExams() {
      const response = await fetch("/vizsgalat");
      const examsObj = await response.json();
      const exams = examsObj.map((exam) => exam.megnevezes);
      const examCodes = examsObj.map((exam) => exam.kod);
      setExamsData({ exams, examCodes });
    }
    getExams();
  }, []);

  const ExamButton = ({
    cueObj,
    setCueObj,
    examsData,
    setExamsData,
    examName,
    setExamName,
    examCode,
    setExamCode,
    exam,
  }) => {
    function handleClick() {
      let examCode = Object.values(examsData.examCodes)[
        Object.values(examsData.exams).indexOf(examName)
      ];
      setExamName(exam);
      setExamCode(examCode);

      let taj = "";
      const sendObj = {
        vizsgalatKod: examCode,
        taj: taj,
      };

      async function getCueNumber() {
        const response = await fetch("/sorszam", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendObj),
        });
        const cueNumber = await response.json();
        setCueObj(cueNumber);
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
          cueObj={cueObj}
          setCueObj={setCueObj}
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
        {cueObj.sorszam && (
          <p>
            {"Kiadott sorszám: " + cueObj.sorszam}
            {" - Vizsgálat: " + examName}
            {" - Szoba: " + room}
          </p>
        )}
        {localStorage.setItem("cueNumber", cueObj.sorszam)}
      </div>
    </section>
  );
};

export default Ticketpuller;
