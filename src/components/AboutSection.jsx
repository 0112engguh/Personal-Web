export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative mb-0">
            {""}
            <div className="container mx-auto max-w-3xl">
                <div className="items-center">
                    <div className="space-y-6">
                        <div className="text-justify ">
                            <p className="text-muted-foreground text-base">
                                Hi, i'm Bagus Wicaksana a front-end developer from Depok, Indonesia, studying at Universitas Indraprasta PGRI, Department of Informatics Engineering.
                                I work on various projects and I enjoy the variety of challenges each project offers.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}