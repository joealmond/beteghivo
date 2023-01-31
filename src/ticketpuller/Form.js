import FormButton from "./FormButton.js";
import React, { useState } from "react";

export default function Form({ examsData, setExamsData, cueData, setCueData }) {
  const [tajInput, setTajInput] = useState("9db számjegy");
  const handleTajInput = (event) => {
    setTajInput(event.target.value);
  };

  function renderButton(exam, buttonId) {
    return (
      <li key={buttonId}>
        <FormButton
          cueData={cueData}
          setCueData={setCueData}
          examsData={examsData}
          setExamsData={setExamsData}
          exam={exam}
          buttonId={buttonId}
          tajInput={tajInput}
        />
      </li>
    );
  }

  return (
    <form action="/ticket" method="get" target="_blank">
      <div>
        <div className="inputWithLabel">
          <label htmlFor="name">Tajszám</label>
          <input
            type="text"
            value={tajInput}
            onChange={handleTajInput}
            id="name"
            name="name"
            minLength="9"
            maxLength="9"
            size="10"
          />
        </div>
      </div>
      <div>
        {examsData && (
          <ul>
            {examsData.map((exam, buttonId) =>
              renderButton(exam.megnevezes, buttonId)
            )}
          </ul>
        )}
      </div>
    </form>
  );
}
