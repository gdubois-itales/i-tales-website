const services = [
    {
        tag: "DEVOPS",
        title: "DevOps",
        description: "Automation and bridges between dev and ops.",
        size: "dark",
    },
    {
        tag: "JAVA",
        title: "Java Development",
        description:
            "Robust and maintainable backend applications, clean architecture, solid tests. The foundation everything else builds on.",
        size: "sm",
    },
    {
        tag: "CI/CD",
        title: "Continuous Integration",
        description: "Reliable pipelines, frequent deployments.",
        size: "sm",
    },
    {
        tag: "OPENSHIFT",
        title: "OpenShift & containerization",
        description:
            "Containerization of existing applications and cluster optimization, tailored to your production constraints.",
        size: "full",
    },
];

export default function ExpertiseSection() {
    return (
        <section className="px-8 py-10">
            <div className="mx-auto max-w-[1100px]">
                <div className="eyebrow">Our expertise</div>
                <div className="thread-top mb-2 max-w-[640px] pt-4">
                    <h2 className="text-[36px] font-bold tracking-[-0.5px] text-indigo">
                        Four domains, one single team
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-4 sm:grid-rows-2">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={[
                                "relative overflow-hidden rounded-[14px] border border-border p-[30px]",
                                service.size === "dark"
                                    ? "bg-indigo text-[#C7D0DD] sm:col-span-2 sm:row-span-2"
                                    : "bg-bg-tint text-dusk",
                                service.size === "sm" ? "sm:col-span-2" : "",
                                service.size === "full" ? "sm:col-span-4" : "",
                            ].join(" ")}
                        >
              <span
                  className={[
                      "mb-4 inline-block rounded-[5px] px-2.5 py-1 font-mono text-xs",
                      service.size === "dark"
                          ? "bg-teal/[0.18] text-teal-light"
                          : "bg-teal/[0.15] text-teal-dark",
                  ].join(" ")}
              >
                {service.tag}
              </span>
                            <h3
                                className={[
                                    "mb-2.5 text-xl",
                                    service.size === "dark" ? "text-white" : "text-indigo",
                                ].join(" ")}
                            >
                                {service.title}
                            </h3>
                            <p className="text-[14.5px]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}