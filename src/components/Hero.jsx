import heroIllustration from "../assets/hero-illustration.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="bg-gradient-brand rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] sm:text-base"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroIllustration}
            alt="Isometric illustration of a layered technology stack"
            className="w-64 sm:w-80 lg:w-96"
            width={520}
            height={520}
          />
        </div>
      </div>
    </section>
  );
}