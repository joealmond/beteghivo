// TODO: styling: window size for print

export default function Ticketpage() {
  const url = window.location.href.match(/\?(.*)/)[1];
  const queryData = new URLSearchParams(url);

  return (
    <section>
      <div>
        <h3>Sorszám</h3>
        {<p>{queryData.get("sorszam")}</p>}
      </div>
      <div>
        <h3>Vizsgálat kód</h3>
        {<p>{queryData.get("vizsgalatKod")}</p>}
      </div>
      <div>
        <h3>Varakozok</h3>
        {<p>{queryData.get("varakozok")}</p>}
      </div>
      <div>
        <h3>Tajszám</h3>
        {<p>{queryData.get("taj")}</p>}
      </div>
      <div>
        <h3>Érkezes Időpontja</h3>
        {
          <p>
            {new Date(
              Date.parse(queryData.get("erkezesIdeje"))
            ).toLocaleTimeString("hu-HU")}
          </p>
        }
      </div>
    </section>
  );
}
