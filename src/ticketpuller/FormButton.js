// TODO: javítani a form submit megoldást
export default function FormButton({ setCueData, examsData, exam, buttonId }) {
  async function getCueNumber() {
    const response = await fetch("/sorszam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vizsgalatKod: examsData[buttonId].kod,
        taj: "",
      }),
    });
    const cueData = await response.json();
    setCueData(cueData);
  }

  return <input type="submit" name="" value={exam} onClick={getCueNumber} />;
}
