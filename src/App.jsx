import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Nav from "./components/nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div id="top"></div>
      <Nav />
      <main className="flex justify-center w-full mb-5">
        <div className="2xl:w-2/5 xl:w-1/2 lg:w-3/5 md:w-3/5 sm:4/5 shadow-md rounded-md mt-4">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
