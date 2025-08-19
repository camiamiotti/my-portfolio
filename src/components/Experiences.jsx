export default function Experiences() {
  const experiences = [
    {
      company: "Globant",
      role: ".NET Developer",
      date: "May 2022 - Present",
      description:
        "Contributing to financial systems for a Big Four client. Participated in three projects, implementing features and maintaining core applications.",
      bullets: [
        "Backend development with C#, .NET, Entity Framework.",
        "Database design and optimization with SQL Server.",
        "RESTful API design and implementation.",
        "CI/CD pipelines and version control (Azure DevOps, Git).",
        "Agile team collaboration.",
        "Frontend development with Angular/TypeScript."
      ]
    },
    {
      company: "Intuit",
      role: ".NET Developer",
      date: "August 2021 - May 2022",
      description:
        "Worked on a healthcare management system with desktop and web applications, handling backend/frontend integrations.",
      bullets: [
        "Backend development with VB.NET and SQL Server (database design and queries).",
        "SOAP/REST services integration.",
        "Agile methodology with Jira.",
        "Close collaboration with analysts and stakeholders."
      ]
    },
    {
      company: "doTech",
      role: ".NET Developer",
      date: "November 2020 - August 2021",
      description:
        "Contributed to custom software projects, participating in microservices-based development with .NET and Angular.",
      bullets: [
        "C#, .NET Core/Framework, Entity Framework.",
        "RESTful API integration and consumption.",
        "Angular development (TypeScript, HTML, CSS).",
        "Participation in microservices architecture.",
        "Team collaboration with stakeholders."
      ]
    },
    {
      company: "Freelance",
      role: "Freelance Developer",
      date: "September 2019 - September 2020",
      description:
        "Developed CMS applications for news portals, implementing new features and maintaining databases.",
      bullets: [
        "Backend development with PHP and SQL."
      ]
    }
  ];

  return (
  <div className="section-container">
    <h2 className="heading-main">Experience</h2>
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-4 border-gray-200 pl-4 hover:border-gray-400 transition-colors relative">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="heading-company">{exp.company}</h2>
              <p className="role-text">{exp.role}</p>
            </div>
            <p className="date-text">{exp.date}</p>
          </div>
          <p className="mt-2 text-gray-600">{exp.description}</p>
          {exp.bullets.length > 0 && (
            <ul className="list-bullets">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
);
}
