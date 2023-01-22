// import React, { useEffect, useState, useRef } from "react";

// TODO: az apról lekért szobaszámok alapján generálni a választási lehetőségeket
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
  // cueData,
  // setCueData,
  // examsData,
  // setExamsData,
  // examCode,
  // setExamCode,
  // room,
  // setRoom,
  roomId,
}) {
  // const cueRef1 = useRef([]);
  // const cueRef2 = useRef([]);
  // const cueRef3 = useRef([]);

  let cueArray = {};

  for (let i = 0; i < roomsData.length; i++) {
    cueArray[i] = [];
  }

  let tajTemp = "-";

  function RenderRow(roomId) {
    if (roomId === Number(localStorage.getItem("room"))) {
      cueArray[roomId - 1] = (
        <tr>
          <td>{localStorage.getItem("cueNumber")}</td>
          <td>{roomsData.megnevezes}</td>
          <td>{localStorage.getItem("cueInTime")}</td>
          <td>{tajTemp}</td>
          <td>{roomId}</td>
          <td>{localStorage.getItem("room")}</td>
        </tr>
      );

      // cueRef1.current = [...cueRef1.current, cueArray[0]];
      // cueRef2.current = [...cueRef2.current, cueArray[1]];
      // cueRef3.current = [...cueRef3.current, cueArray[2]];
    }
    // if (roomId == 1) return cueRef1.current;
    // if (roomId == 2) return cueRef2.current;
    // if (roomId == 3) return cueRef3.current;

    return cueArray[roomId - 1];
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
          <tbody>{RenderRow(roomId)}</tbody>
        </table>
        <button>Kérem a következőt</button>
      </div>
    </section>
  );
}

// const [rowContent, setRowContent] = useState([]);
//   const prevRowContent = useRef([]);
//   let exam = `${roomsData.megnevezes}`;

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

// {
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
// }
