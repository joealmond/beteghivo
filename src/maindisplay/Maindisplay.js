// TODO: az összes behívott sorszám kijelzése
// EXAMPLE SCHEMA:
// [
//   {
//     "sorszam": 0,
//     "szoba": 0,
//     "behívasIdeje": "2023-01-20T09:55:44.015Z"
//   }
// ]
export default function Maindisplay() {
  return (
    <section>
      <h2>Központi kijelző</h2>
      <div>
        <div>
          <h3>Sorszám</h3>
          <h3>Helység</h3>
        </div>
        <div>
          <p>---</p>
          <p>-</p>
        </div>
        <div>
          <p>___</p>
          <p>_</p>
        </div>
      </div>
    </section>
  );
}
