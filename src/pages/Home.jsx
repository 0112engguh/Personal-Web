import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar/>

            <div className="container mx-auto px-6 md:px-8 space-y-24">
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
            </div>

        </div>
    );
};