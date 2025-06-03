import { ArrowDown } from "lucide-react"
export const HeroSection = () => {
    return (
        <section id="hero" className="relative top-40 items-center justify-center px-4">
            <div className="container max-w-3xl mx-auto text-start z-10">
                <div className="space-y-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="left-text">
                        <h1 className="text-2xl md:text-4xl mb-2 font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in-delay-1"> Bagus</span>
                            <span className="opacity-0 animate-fade-in-delay-2"> Wicaksana</span>
                        </h1>
                        <p className="font-semibold">Front-End Developer</p>

                        {/* <p className="text-md md:text-md text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            I create stellar web experiences with modern technologies.
                            Specializing in front-end development, I build interfaces that are
                            both beautiful and functional.
                        </p> */}
                    </div>
                    <div className="right-text lg:ml-55">
                        <img src="/profileC.jpeg" className="w-32 h-32 rounded-full lg:w-32 h-32 rounded-full" />
                    </div>


                    {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div> */}
                </div>

                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div> */}
            </div>
        </section>
    )
}