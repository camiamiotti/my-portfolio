import Header from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className=" text-gray-900 min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-24">
        <section id="about" className="snap-start min-h-screen flex items-center justify-center p-8">
          <About />
        </section>
        <section
          id="projects"
          className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50">
          <Experiences />
        </section>
        <section id="contact" className="snap-start min-h-screen flex flex-col justify-center items-center p-8">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
