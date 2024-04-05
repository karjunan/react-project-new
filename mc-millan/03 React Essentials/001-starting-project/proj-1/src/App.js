import logo from "./logo.svg";
import Header from "./components/Header/Header";
import imgs from "./assets/components.png";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabMenu from "./components/menu/TabMenu";

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState();

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
            <TabMenu
              isSelected={selectedValue == "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabMenu>
            <TabMenu
              isSelected={selectedValue == "Jsx"}
              onSelect={() => handleSelect("Jsx")}
            >
              Jsx
            </TabMenu>
            <TabMenu
              isSelected={selectedValue == "Props"}
              onSelect={() => handleSelect("Props")}
            >
              Props
            </TabMenu>
            <TabMenu
              isSelected={selectedValue == "State"}
              onSelect={() => handleSelect("State")}
            >
              State
            </TabMenu>
          </menu>
          <div id="tab-content">
            {!selectedValue ? <p> Select a value </p> : selectedValue}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
