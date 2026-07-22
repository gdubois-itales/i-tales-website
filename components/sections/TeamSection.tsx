import TeamCard from "@/components/ui/TeamCard";

const teamMembers = [
    {
        initials: "GD",
        name: "Gilles Dubois",
        role: "DevOps Engineer · Founder of I-Tales",
        bio: "DevOps Engineer with 5+ years of experience designing and scaling CI/CD platforms on Kubernetes/OpenShift. Specialized in platform engineering, automation, and secure software delivery (SAST/DAST). Strong experience in onboarding teams and defining engineering standards across organizations.",
        skills: ["OpenShift", "Java", "Spring Boot", "CI/CD", "Kubernetes"],
        email: "gilles.dubois@i-tales.be",
        linkedin: "https://www.linkedin.com/in/gilles-devops/",
    },
    {
        initials: "TT",
        name: "Tatiana Tshinkulu",
        role: "Developer Junior",
        bio: "3rd-year IT student at EPHEC with a hybrid business and technical background. Contributing to the development of web solutions while continuously learning new technologies and growing through real-world projects.",
        skills: ["Java", "Next.js", "React", "Tailwind CSS", "Git"],
        linkedin: "https://www.linkedin.com/in/tatiana-tshinkulu/",
    },
];

export default function TeamSection() {
    return (
        <section className="px-5 pb-[90px] pt-[60px] md:px-8">
            <div className="mx-auto max-w-[1100px]">
                <div className="eyebrow">Our team</div>

                <div className="thread-top max-w-[560px] pt-4">
                    <h1 className="text-[36px] font-bold tracking-[-0.5px] text-indigo">
                        The people behind I-Tales
                    </h1>
                    <p className="mt-3.5 text-[15.5px] text-dusk/85">
                        A small team, directly involved in every engagement.
                    </p>
                </div>

                <div className="mt-11 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={member.name}
                            {...member}
                            variant={index % 2 === 1 ? "teal" : "indigo"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}