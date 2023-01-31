export default function FormButton({
  setCueData,
  examsData,
  exam,
  buttonId,
  tajInput,
}) {
  async function getCueNumber(event) {
    event.preventDefault();

    try {
      const response = await fetch("/sorszam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vizsgalatKod: examsData[buttonId].kod,
          taj: tajInput,
        }),
      });
      const cueData = await response.json();
      if (!response.ok) {
        throw new Error(cueData.message);
      }

      window.open(`/ticket?${new URLSearchParams(cueData)}`, "_blank");

      setCueData(cueData);
    } catch (error) {
      console.log(error);
    }
  }

  return <input type="submit" name="" value={exam} onClick={getCueNumber} />;
}
