type TeamCardProps = {
    initials: string;
    name: string;
    role: string;
    bio: string;
    skills: string[];
    linkedin: string;
    variant: "indigo" | "teal";
};

export default function TeamCard({
                                     initials,
                                     name,
                                     role,
                                     bio,
                                     skills,
                                     linkedin,
                                     variant,
}: TeamCardProps) {
const isTeal = variant === "teal";
return (
        <div className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-[0_0_0_2px_var(--color-teal-dark),0_16px_32px_rgba(28,37,65,0.12)]">
            <div
                className={`relative h-[90px] ${
                    isTeal
                        ? "bg-[linear-gradient(120deg,var(--color-teal-dark),var(--color-teal))]"
                        : "bg-[linear-gradient(120deg,var(--color-indigo),var(--color-indigo-soft))]"
                }`}
            >
                <div
                    className={`absolute -bottom-9 left-7 flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-white font-heading text-2xl font-bold shadow-[0_8px_20px_rgba(0,0,0,0.15)] ${
                        isTeal ? "bg-indigo text-teal-light" : "bg-teal text-indigo"
                    }`}
                >
                    {initials}
                </div>
            </div>

            <div className="px-7 pb-7 pt-12">
                <h3 className="text-xl font-bold text-indigo">{name}</h3>
                <div className="my-1.5 font-mono text-[12.5px] text-teal-dark">
                    {role}
                </div>
                <p className="mb-[18px] text-[14.5px] text-dusk">{bio}</p>

                <div className="mb-[22px] flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold text-white ${
                                isTeal ? "bg-teal-dark" : "bg-indigo"
                            }`}
                        >
                          {skill}
                        </span>
                    ))}
                </div>
                <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-indigo px-[18px] py-[9px] text-[13.5px] font-semibold text-indigo transition hover:-translate-y-0.5 hover:bg-indigo hover:text-white"
                >
                In LinkedIn
                </a>
            </div>
        </div>
    );
}