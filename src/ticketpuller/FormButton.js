// TODO: javítani a form submit megoldást
import React, { useState } from "react";
export default function FormButton({ setCueData, examsData, exam, buttonId }) {
  const [error, setError] = useState(null);

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
      setError(error.message);
    }
    console.log(error);
  }

  return <input type="submit" name="" value={exam} onClick={getCueNumber} />;
}
