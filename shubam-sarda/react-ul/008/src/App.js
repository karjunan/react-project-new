import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {
  const name = "krishna";
  return (
    <>
      <Header />
      <div>
        <h1>{name}</h1>
      </div>
      <Footer />
    </>
  );
}
