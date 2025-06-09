export const HeroSection = () => {
    return (
        <section id="hero" className="relative top-40 items-center justify-center px-4">
            <div className="container max-w-3xl mx-auto text-start z-10">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-4">
                        {/* Text Section */}
                        <div className="text-start">
                            <h1 className="text-2xl md:text-4xl mb-2 font-bold tracking-tight">
                                <span className="opacity-0 animate-fade-in-delay-1">Bagus</span>
                                <span className="opacity-0 animate-fade-in-delay-2"> Wicaksana</span>
                            </h1>
                            <p className="font-semibold">Front-End Developer</p>
                        </div>

                        {/* Image */}
                        <img
                            src="/profileC.jpeg"
                            className="w-20 h-20 rounded-full lg:w-32 lg:h-32"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
