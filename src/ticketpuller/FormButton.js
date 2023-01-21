export default function FormButton({
  //   cueData,
  setCueData,
  examsData,
  //   setExamsData,
  examName,
  setExamName,
  //   examCode,
  setExamCode,
}) {
  let examCode = Object.values(examsData.examCodes)[
    Object.values(examsData.exams).indexOf(examName)
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
    setExamName(examName);
    setCueData(cueData);
  }

  return (
    <input
      type="submit"
      name=""
      value={examName}
      onClick={() => getCueNumber()}
    />
  );
}
