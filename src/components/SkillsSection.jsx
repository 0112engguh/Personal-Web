const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "PHP", level: 80, category: "backend" },
  { name: "Laravel", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];


export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span> Skills </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) =>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}