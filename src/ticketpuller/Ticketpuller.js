// TODO: Tajszám integrálása, ellenőrzése
// TODO: kiírt adatok felülvizsgálása, esetleg óra megjelenítése
// TODO: a kiadott sorszámnál meg lehetne jeleníteni több adatot

import Form from "./Form.js";

const Ticketpuller = ({ cueData, setCueData, examsData, setExamsData }) => {
  return (
    <section>
      <h2>Sorszámosztó automata</h2>
      <div>
        <h3>Kérem válasszon vizsgálatot</h3>
        <p>
          Opcionálisan megadhatja tajszámát,
          <br />a gyorsabb ügyintézés érdekében.
        </p>
        <Form
          examsData={examsData}
          setExamsData={setExamsData}
          cueData={cueData}
          setCueData={setCueData}
        />

        {cueData.sorszam && <p>{"Kiadott sorszám: " + cueData.sorszam}</p>}
      </div>
    </section>
  );
};

export default Ticketpuller;
