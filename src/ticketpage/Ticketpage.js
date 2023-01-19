// { cueObj, setCueObj }
export default function Ticketpage() {
  const cueObj = { sorszam: localStorage.getItem("cueNumber") };
  return (
    <section>
      <div>
        <h2>Sorszám</h2>
        {/* {console.log(localStorage.getItem("cueNumber"))} */}
        {cueObj.sorszam && <p>{cueObj.sorszam}</p>}
      </div>
    </section>
  );
}
