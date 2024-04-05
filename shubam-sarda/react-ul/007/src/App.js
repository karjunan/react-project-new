// import React from 'react';
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  const username = "Krishna";

  return (
    <>
      <Header />
      <h1 className="active">{username}</h1>
      <p>Lorem ipsum dolor, placeat.</p>
      <Footer />
    </>
  );

  // return React.createElement("h1", {className: "active"}, "Shubham")
}
