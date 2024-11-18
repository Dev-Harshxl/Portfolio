import React from "react";
import Nav from "./parts/Nav";
import Mine from "./parts/Mine";
import About from "./parts/About";
import Projects from "./parts/Projects";
import WorkExperience from "./parts/Experience";
import Contact from "./parts/Contact";
import Footer from "./parts/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Nav />
      <Mine />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
