import Ticketpuller from "../ticketpuller/Ticketpuller.js";
import Maindisplay from "../maindisplay/Maindisplay";
import Localdisplay from "../localdisplay/Localdisplay";
import Localcaller from "../localcaller/Localcaller";

export default function Mainpage() {
  return (
    <>
      <Ticketpuller />
      <Maindisplay />
      <Localdisplay />
      <Localcaller />
    </>
  );
}
