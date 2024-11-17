import React from "react";
import Nav from "./parts/Nav";
import Mine from "./parts/Mine";
import About from "./parts/About";
import Projects from "./parts/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Nav />
      <Mine />
      <About />
      <Projects />

    </main>
  );
};

export default App;
