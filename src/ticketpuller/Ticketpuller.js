import React, { useState, useEffect } from "react";

const Ticketpuller = () => {
  const [cueObj, setCueObj] = useState({});
  const [examsData, setExamsData] = useState({});

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

  const ExamButton = (props) => {
    const [examName, setExamName] = useState(props.exam);
    const { cueObj } = props;
    function handleClick() {
      let examCode = Object.values(examsData.examCodes)[
        Object.values(examsData.exams).indexOf(examName)
      ];
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
        const cue = await response.json();
        setCueObj(cue);
      }
      cueObj = getCueNumber();
    }

    return (
      <input
        type="submit"
        name="exam"
        value={props.exam}
        onClick={handleClick}
      />
    );
  };

  function renderExam(exam) {
    return (
      <li key={exam}>
        <ExamButton exam={exam} cueObj={cueObj} />
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
        {cueObj.sorszam && <p>{cueObj.sorszam}</p>}
      </div>
    </section>
  );
};

export default Ticketpuller;
