export default function Ticketpage() {
  const cueObj = { sorszam: "123" };
  return (
    <section>
      <div>
        <h2>Sorszám</h2>
        {cueObj.sorszam && <p>{cueObj.sorszam}</p>}
      </div>
    </section>
  );
}
