
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechnologyGrid from "./components/TechnologyGrid.jsx";

export default function App() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="technologies"
          className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore the{" "}
              <span className="text-gradient-brand">Technologies</span>
            </h2>

            
          </div>

          <p className="mb-4 text-red-500">
            Technologies loaded: {technologies.length}
          </p>

          <TechnologyGrid
            technologies={technologies}
            stackIds={new Set()}
            onAdd={() => {}}
          />
        </section>
      </main>
    </>
  );
}

