import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechnologyGrid from "./components/TechnologyGrid.jsx";
import YourStack from "./components/YourStack.jsx";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);

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

  const stackIds = new Set(stack.map((tech) => tech.id));

  const handleAdd = (tech) => {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const removed = stack.find((tech) => tech.id === id);

    setStack((current) => current.filter((tech) => tech.id !== id));

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

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

            <p className="mt-2 text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <TechnologyGrid
              technologies={technologies}
              stackIds={stackIds}
              onAdd={handleAdd}
            />

            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
      />
    </>
  );
}