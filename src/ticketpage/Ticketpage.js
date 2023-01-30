// TODO: styling: window size for print
// TODO: megjelenített értékek felülvizsgálása
// TODO: queryparamétereken átadni az adatokat localstorage helyett

export default function Ticketpage() {
  return (
    <section>
      <div>
        <h3>Sorszám</h3>
        {<p>{localStorage.getItem("cueNumber")}</p>}
      </div>
      <div>
        <h3>Varakozok</h3>
        {<p>{localStorage.getItem("cueRemain")}</p>}
      </div>
      <div>
        <h3>Érkezes Időpontja</h3>
        {<p>{localStorage.getItem("cueInTime")}</p>}
      </div>
    </section>
  );
}
