import Filament from "@/components/ui/Filament";

const stats = [
    { value: "2", label: "consultants" },
    { value: "100%", label: "direct involvement" },
    { value: "4", label: "areas of expertise" },
];

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-bg-tint px-8 py-10">
            <Filament path="M -18 100 C 200 200, 273 433, 509 367 C 746 300, 818 667, 1018 767" />

            <div className="relative mx-auto max-w-[1100px]">
                <div className="grid overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(28,37,65,0.15)] md:grid-cols-2">
                    {/* Panneau sombre - About */}
                    <div className="bg-indigo p-11 text-white">
                        <div className="eyebrow on-dark">About</div>
                        <div className="thread-top pt-4">
                            <h2 className="text-[32px] font-bold text-white">
                                A small team, a real standard
                            </h2>
                            <p className="mt-4 text-[15px] text-[#C7D0DD]">
                                No cascading subcontracting, no junior profile shipped
                                without support. Every engagement is carried directly by the
                                people delivering it.
                            </p>
                            <div className="mt-[30px] flex gap-10">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <b className="block font-heading text-[36px] text-teal">
                                            {stat.value}
                                        </b>
                                        <span className="text-[13px] text-[#B8C2D4]">
                      {stat.label}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Panneau clair - Why I-Tales */}
                    <div className="flex flex-col justify-center bg-bg-tint p-11">
                        <div className="eyebrow">Why I-Tales</div>
                        <div className="thread-top pt-4">
                            <p className="mt-2.5 text-[15px] text-dusk">
                                We keep the team deliberately small so every client talks
                                directly to the people who write the code and ship it — not
                                to a middleman project manager.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}