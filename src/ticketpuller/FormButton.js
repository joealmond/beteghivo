export default function FormButton({
  //   cueData,
  setCueData,
  examsData,
  //   setExamsData,
  exam,
  //   examCode,
  setExamCode,
}) {
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

    setExamCode(examCode);
    setCueData(cueData);
  }

  return (
    <input type="submit" name="" value={exam} onClick={() => getCueNumber()} />
  );
}
