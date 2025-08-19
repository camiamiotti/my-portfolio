export default function About() {
  const items = [
    { emoji: "💻", text: "Backend-focused developer (C#, .NET, SQL Server)" },
    { emoji: "🚀", text: "Exploring frontend development to bring creative, user-focused solutions" },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen max-w-xl mx-auto text-center px-4 mt-24">
      <h2 className="heading-main mb-6">About</h2>
      <ul className="space-y-2 text-gray-700 text-lg leading-snug">
        {items.map((item, index) => (
          <li key={index} className="flex items-start justify-center gap-2">
            <span className="text-xl">{item.emoji}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
