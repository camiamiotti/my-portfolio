export default function Contact() {
  const items = [
    { emoji: "💌", label: "Email", href: "mailto:camiamiotti@gmail.com" },
    { emoji: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/camiamiotti" },
    { emoji: "⚫", label: "GitHub", href: "https://github.com/camiamiotti" },
  ];

  return (
    <div className="text-center max-w-5xl mx-auto">
      <h2 className="heading-main">Contact</h2>

      <div className="flex justify-center gap-28">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-700 hover:text-black transition-all group"
          >
            <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
              {item.emoji}
            </span>
            <span className="text-sm font-light tracking-wide">
              {item.label}
            </span>
            <span className="block w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </div>
  );
}
