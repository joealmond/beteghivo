// TODO: javítani a form submit megoldást
export default function FormButton({ setCueData, examsData, exam }) {
  let examCode = Object.values(examsData.examCodes)[
    Object.values(examsData.exams).indexOf(exam)
  ];
  async function getCueNumber() {
    const response = await fetch("/sorszam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vizsgalatKod: examCode,
        taj: "",
      }),
    });
    const cueData = await response.json();
    setCueData(cueData);
  }

  return (
    <input type="submit" name="" value={exam} onClick={() => getCueNumber()} />
  );
}
