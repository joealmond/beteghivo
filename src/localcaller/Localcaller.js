export default function Localcaller({ roomsData }) {
  return (
    <section>
      <h2>Behívó</h2>
      <div>
        <div>
          <h3>Vizsgáló {roomsData}</h3>
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
