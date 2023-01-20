// TODO: get items from the real cueData:
// RESPONSE SCHEMA:
// {
//   "sorszam": 249,
//   "vizsgalatKod": "V00",
//   "taj": "",
//   "erkezesIdeje": "2023-01-20T08:53:54.889278837",
//   "varakozok": 12
// }
// TODO: make sure window opens also on first submission!
// TODO: UI: add the new items to the page
// TODO: styling: window size for print
export default function Ticketpage() {
  const cueData = { sorszam: localStorage.getItem("cueNumber") };
  return (
    <section>
      <div>
        <h2>Sorszám</h2>
        {cueData.sorszam && <p>{cueData.sorszam}</p>}
      </div>
    </section>
  );
}
