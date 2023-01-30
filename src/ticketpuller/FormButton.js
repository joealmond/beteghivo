// TODO: javítani a form submit megoldást
export default function FormButton({ setCueData, examsData, exam, buttonId }) {
  async function getCueNumber() {
    try {
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
      if (!response.ok) {
        throw new Error(cueData.message);
      }
      setCueData(cueData);
    } catch (error) {
      console.log(error);
    }
  }

  return <input type="submit" name="" value={exam} onClick={getCueNumber} />;
}
