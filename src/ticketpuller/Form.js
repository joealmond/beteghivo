// import { useEffect } from "react";
import FormButton from "./FormButton.js";

export default function Form({
  examsData,
  setExamsData,
  cueData,
  setCueData,
  setExamName,
  examCode,
  setExamCode,
}) {
  function renderButton(examName) {
    return (
      <li key={examName}>
        <FormButton
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
    <form action="/sorszam" method="get" target="_blank">
      <div>
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
          <ul>{examsData.exams.map((examName) => renderButton(examName))}</ul>
        )}
      </div>
    </form>
  );
}
