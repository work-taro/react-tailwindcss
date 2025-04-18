import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 md:pl-64">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        {/* <section id="about">
          <About />
        </section> */}
        <section id="experience">
          <Experience />
        </section>
      </div>
    </div>
  );
};

export default App;
