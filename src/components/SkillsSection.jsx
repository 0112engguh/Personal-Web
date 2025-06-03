import PhpPlain from 'devicons-react/icons/PhpPlain';
import LaravelOriginal from 'devicons-react/icons/LaravelOriginal';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import Html5Plain from 'devicons-react/icons/Html5Plain';
import Css3Plain from 'devicons-react/icons/Css3Plain';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import FigmaOriginal from 'devicons-react/icons/FigmaOriginal';
import MysqlOriginalWordmark from 'devicons-react/icons/MysqlOriginalWordmark';



const skills = [
  // Frontend
  { name: "HTML", icon: <Html5Plain/>, category: "frontend" },
  { name: "CSS", icon: <Css3Plain/>, category: "frontend" },
  { name: "JavaScript", icon: <JavascriptOriginal/>, category: "frontend" },
  { name: "React", icon: <ReactOriginal/>, category: "frontend" },
  { name: "Tailwind CSS", icon: <TailwindcssOriginal/>, category: "frontend" },

  // Backend
  { name: "PHP", icon: <PhpPlain/>, category: "backend" },
  { name: "Laravel", icon: <LaravelOriginal/>, category: "backend" },

  { name: "Git/GitHub", icon: <GithubOriginal/>, category: "tools" },
  { name: "Figma", icon: <FigmaOriginal/>, category: "tools" },
  { name: "MySQL", icon: <MysqlOriginalWordmark/>, category: "tools" },
];


export const SkillsSection = () => {
    return (
        <section id="skills" className="pt-0 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-start">
                    Tech Stack
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) =>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="flex flex-row justify-center">
                                <span className="me-4 mt-2 font-semibold text-lg">{skill.icon}</span>
                                <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}