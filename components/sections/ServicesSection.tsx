const services = [
    {
        num: "01",
        tag: "JAVA",
        title: "Java Development",
        description:
            "Design and development of robust backend applications, in Java and Spring Boot, with particular attention to maintainability and test coverage.",
    },
    {
        num: "02",
        tag: "DEVOPS",
        title: "DevOps Culture",
        description:
            "Implementation of practices and tools to reduce friction between development and operations, with change support that's both technical and human.",
    },
    {
        num: "03",
        tag: "CI/CD",
        title: "Continuous Integration & Deployment",
        description:
            "Design of reliable pipelines (build, tests, deployment) to enable frequent, low-stress releases, tailored to your existing stack.",
    },
    {
        num: "04",
        tag: "OPENSHIFT",
        title: "OpenShift & Containerization",
        description:
            "Support for containerizing existing applications and setting up or optimizing OpenShift clusters.",
    },
];

export default function ServicesSection() {
    return (
        <section className="px-5 pb-[90px] pt-[60px] md:px-8">
            <div className="mx-auto max-w-[1100px]">
                <div className="eyebrow">Our services</div>

                <div className="thread-top max-w-[560px] pt-4">
                    <h1 className="text-[36px] font-bold tracking-[-0.5px] text-indigo">
                        How we can help
                    </h1>
                    <p className="mt-3.5 text-[15.5px] text-dusk/85">
                        Four areas of expertise, available separately or combined
                        depending on your needs.
                    </p>
                </div>

                <div className="mt-2.5">
                    {services.map((service, index) => (
                        <div
                            key={service.num}
                            className={`grid grid-cols-1 items-start gap-x-8 gap-y-3 border-border py-9 sm:grid-cols-[1fr_2fr] ${
                                index === 0 ? "pt-0" : ""
                            } ${index === services.length - 1 ? "" : "border-b"}`}
                        >
                            <div>
                <span className="block font-heading text-[42px] font-bold text-teal">
                  {service.num}
                </span>
                                <span className="font-mono text-xs text-teal-dark">
                  {service.tag}
                </span>
                                <h3 className="mt-2 text-[22px] font-bold text-indigo">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="max-w-[520px] text-[14.5px] text-dusk">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}