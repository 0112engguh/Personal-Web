import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "PENMAS",
        description: "Website untuk masyarakat mengadu ",
        image: "/projects/Login.png",
        tags: ["Laravel", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/0112engguh/Web-Pengaduan-Laporan-Masyarakt-PENMAS",
    },
    {
        id: 2,
        title: "Personal Website",
        description: "Portofolio",
        image: "/projects/personalWeb.PNG",
        tags: ["React", "Tailwind"],
        demoUrl: "#",
        githubUrl: "https://github.com/0112engguh/Personal-Web.git",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="pt-0 pb-8 px-4 relative ">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-2xl md:text-2xl font-semibold mb-12 text-start">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, key)=>(
                        <div key={key} className="group bg-card border rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6 pb-3">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="px-5">
                                <h3 className="text-xl text-justify font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-justify text-sm mb-4">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex justify-end items-center">
                                <div className="flex space-x-3 px-5 py-4">
                                    <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                    <ExternalLink size={20} />
                                    </a>
                                    <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                    <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}