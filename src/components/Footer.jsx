import Logo from "./Logo.jsx";

const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const SOCIALS = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium text-slate-600">
              {SOCIALS.map((social) => (
                <a key={social} href={`#${social.toLowerCase()}`} className="hover:text-slate-900">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-slate-500">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-slate-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
