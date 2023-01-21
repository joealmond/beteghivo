import React, { useEffect, useState, useRef } from "react";
// TODO: táblázat a várakozók adataival
// EXAMPLE SCHEMA:
// [
//   {
//     "sorszam": 0,
//     "vizsgalatKod": "string",
//     "taj": "string",
//     "erkezesIdeje": "2023-01-20T09:50:11.397Z",
//     "varakozok": 0
//   }
// ]

// TODO: Következő behívása gomb
// EXAMPLE SCHEMA:
// {
//   "sorszam": 0,
//   "szoba": 0,
//   "behívasIdeje": "2023-01-20T09:52:33.018Z"
// }

export default function Localcaller({
  roomsData,
  cueData,
  setCueData,
  examsData,
  setExamsData,
  examName,
  setExamName,
  examCode,
  setExamCode,
  room,
  setRoom,
  roomId,
  nRoomsRef,
}) {
  const cueRef = useRef([]);

  let cueArray = {};

  for (let i = 0; i < nRoomsRef.current; i++) {
    cueArray[i] = [];
  }
  let nRoomsArr = Array.from({ length: nRoomsRef.current }, (n, i) => i + 1);

  let tajTemp = "-";

  if (nRoomsArr.indexOf(roomId) == roomId - 1) {
    if (roomId == localStorage.getItem("room")) {
      cueArray[roomId - 1] = (
        <tr>
          <td>{localStorage.getItem("cueNumber")}</td>
          <td>{`${examName}`}</td>
          <td>{localStorage.getItem("cueInTime")}</td>
          <td>{tajTemp}</td>
          <td>{roomId}</td>
        </tr>
      );

      cueRef.current = cueArray[roomId - 1];
    }
  }

  function RenderRow() {
    return cueRef.current;
  }

  return (
    <section>
      <h2>Behívó</h2>
      <div>
        <div>
          <h3>Rendelő {roomsData.szam + ".  - " + roomsData.megnevezes}</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Sorszám</th>
              <th>Vizsgálat</th>
              <th>Időpont</th>
              <th>TAJ</th>
              <th>Szoba</th>
            </tr>
          </thead>
          <tbody>
            {RenderRow()}
            {/* <tr>
              <td>{cueNumberTemp}</td>
              <td>{examTemp}</td>
              <td>{cueInTimeTemp}</td>
              <td>{tajTemp}</td>
              <td>{roomTemp}</td>
            </tr>
            {rowContent.map((content, index) => (
              <React.Fragment key={index}>{content}</React.Fragment>
            ))} */}
          </tbody>
        </table>
        <button>Kérem a következőt</button>
      </div>
    </section>
  );
}

// const [rowContent, setRowContent] = useState([]);
//   const prevRowContent = useRef([]);
//   let exam = `${examName}`;

//   let roomTemp = "";
//   let examTemp = "";
//   let tajTemp = "";
//   let cueNumberTemp = "";
//   let cueInTimeTemp = "";
//   const cueArray = [
//     {
//       roomTemp: "",
//       examTemp: "",
//       tajTemp: "",
//       cueNumberTemp: "",
//       cueInTimeTemp: "",
//     },
//   ];
//   if (roomId == localStorage.getItem("room")) {
//     roomTemp = localStorage.getItem("room");
//     examTemp = exam;
//     tajTemp = "---";
//     cueNumberTemp = localStorage.getItem("cueNumber");
//     cueInTimeTemp = localStorage.getItem("cueInTime");
//     cueArray.push({
//       roomTemp: localStorage.getItem("room"),
//       examTemp: exam,
//       tajTemp: "---",
//       cueNumberTemp: localStorage.getItem("cueNumber"),
//       cueInTimeTemp: localStorage.getItem("cueInTime"),
//     });
//   }
//   console.log(cueArray);
//   function RenderRow() {
//     setRowContent([
//       ...rowContent,
//       <tr>
//         <td>{cueNumberTemp}</td>
//         <td>{examTemp}</td>
//         <td>{cueInTimeTemp}</td>
//         <td>{tajTemp}</td>
//         <td>{roomTemp}</td>
//       </tr>,
//     ]);
//   }

//   useEffect(() => {
//     setInterval(() => {
//       if (prevRowContent.current !== rowContent) {
//         prevRowContent.current = rowContent;
//         if (roomTemp != localStorage.getItem("room")) {
//           RenderRow();
//         }
//       }
//     }, 10000);
//   }, [rowContent]);

{
  /* <tr>
<td>{cueNumberTemp}</td>
<td>{examTemp}</td>
<td>{cueInTimeTemp}</td>
<td>{tajTemp}</td>
<td>{roomTemp}</td>
</tr>
{rowContent.map((content, index) => (
<React.Fragment key={index}>{content}</React.Fragment>
))}
</tbody> */
}
