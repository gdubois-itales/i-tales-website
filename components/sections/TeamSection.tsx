import TeamCard from "@/components/ui/TeamCard";

const teamMembers = [
    {
        initials: "AM",
        name: "Alex Moreau",
        role: "Java Developer · Co-founder",
        bio: "Java backend developer for several years, focused on clean architecture and code that stays maintainable over time.",
        skills: ["Java", "Spring Boot", "CI/CD", "SQL"],
        linkedin: "#",
    },
    {
        initials: "SD",
        name: "Sam Dupont",
        role: "DevOps Engineer · Co-founder",
        bio: "Infrastructure and automation specialist, passionate about pipelines that don't wake anyone up at night.",
        skills: ["OpenShift", "Kubernetes", "CI/CD", "Linux"],
        linkedin: "#",
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

                <div className="mt-8 inline-block rounded-md border border-dashed border-teal-dark bg-teal/10 px-4 py-2.5 font-mono text-xs text-teal-dark">
                    {"// names, photos, bios and LinkedIn links to be replaced with the real team information"}
                </div>
            </div>
        </section>
    );
}