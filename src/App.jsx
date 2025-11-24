import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";
import { Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      Í
      <Terminal />
    </main>
  );
};

export default App;
