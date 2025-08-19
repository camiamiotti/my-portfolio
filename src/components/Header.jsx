import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Nombre alineado verticalmente con los links */}
        <h1 className="text-2xl font-title uppercase tracking-widest">
          Camila Amiotti
        </h1>

        <ul className="flex space-x-8 font-title text-sm uppercase tracking-wide text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  const section = document.querySelector(link.href);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-gray-900 transition-colors focus:outline-none focus:text-gray-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
