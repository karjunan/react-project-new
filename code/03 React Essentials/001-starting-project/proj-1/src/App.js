import logo from "./logo.svg";
import Header from "./components/Header/Header";
import imgs from "./assets/components.png";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabMenu from "./components/menu/TabMenu";

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState("please click me");

  function handleSelect(selected) {
    setSelectedValue(selected);
    console.log(selectedValue);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title="Components" desc="Hello" imgs={imgs} />
            <CoreConcepts title="Components -1" desc="Hai" imgs={imgs} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabMenu onSelect={() => handleSelect("components")}>
              Components
            </TabMenu>
            <TabMenu onSelect={() => handleSelect("Jsx")}> Jsx </TabMenu>
            <TabMenu onSelect={() => handleSelect("Props")}> Props </TabMenu>
            <TabMenu onSelect={() => handleSelect("State")}> State </TabMenu>
          </menu>
          {selectedValue}
        </section>
      </main>
    </div>
  );
}

export default App;
