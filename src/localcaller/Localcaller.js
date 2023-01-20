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

export default function Localcaller({ roomsData }) {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>___</td>
              <td>Vizsgálat</td>
              <td>12:00</td>
              <td>12345678</td>
            </tr>
          </tbody>
        </table>
        <button>Kérem a következőt</button>
      </div>
    </section>
  );
}
