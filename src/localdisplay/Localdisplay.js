// TODO: a szobába behívott sorszám kijelzése
// EXAMPLE SCHEMA:
// {
//   "sorszam": 0,
//   "szoba": 0,
//   "behívasIdeje": "2023-01-20T09:54:24.803Z"
// }
export default function Localdisplay({ roomsData }) {
  return (
    <section>
      <h2>Helység kijelző</h2>
      <div>
        <div>
          <h3>Rendelő {roomsData.szam + ".  - " + roomsData.megnevezes}</h3>
        </div>
      </div>
    </section>
  );
}
