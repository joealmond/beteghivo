// TODO: javítani a form formátumát
// TODO: querryparaméterekkle továbbvinni az adatokat

import FormButton from "./FormButton.js";

export default function Form({ examsData, setExamsData, cueData, setCueData }) {
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
