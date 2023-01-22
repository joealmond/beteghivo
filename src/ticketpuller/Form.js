// import { useEffect } from "react";
import FormButton from "./FormButton.js";

export default function Form({
  examsData,
  setExamsData,
  cueData,
  setCueData,
  examCode,
  setExamCode,
}) {
  function renderButton(exam) {
    return (
      <li key={exam}>
        <FormButton
          cueData={cueData}
          setCueData={setCueData}
          examsData={examsData}
          setExamsData={setExamsData}
          exam={exam}
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
          <ul>{examsData.exams.map((exam) => renderButton(exam))}</ul>
        )}
      </div>
    </form>
  );
}
