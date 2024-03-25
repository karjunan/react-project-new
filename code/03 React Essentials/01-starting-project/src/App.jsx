import reactImg from "./assets/react-core-concepts.png";
import imgs from "./assets/components.png";

const desc = ["Fundamental", "Core", "Crutial"];

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.imgs} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}

function Header() {
  const ran = desc[random(2)];
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />

      <h1>React Essentials</h1>
      <p>
        {ran} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
function App() {
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
      </main>
    </div>
  );
}

export default App;
