import Filament from "@/components/ui/Filament";
import ContactForm from "@/components/forms/ContactForm";

const contactInfo = [
    {
        label: "Email",
        value: "gilles.dubois@i-tales.be",
        href: "mailto:gilles.dubois@i-tales.be",
    },
    {
        label: "Location",
        value: "Belgium",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/company/i-tales",
        href: "https://www.linkedin.com/company/i-tales",
    },
];

export default function ContactSection() {
    return (
        <section className="px-5 pb-[90px] pt-[60px] md:px-8">
            <div className="mx-auto max-w-[1100px]">
                <div className="relative">
                    <div className="grid overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(28,37,65,0.15)] md:grid-cols-[1fr_1.1fr]">
                        {/* Panneau info */}
                        <div className="relative overflow-hidden bg-indigo p-11">
                            <Filament path="M 0 1000 C 220 850, 320 500, 560 520 C 760 536, 860 220, 1000 40" />
                            <div className="micro-dot right-6 top-5" />
                            <div className="pointer-events-none absolute -bottom-[60px] -right-[60px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(91,192,190,0.35),transparent_70%)]" />

                            <div className="relative">
                                <div className="eyebrow on-dark">Contact</div>
                                <div className="thread-top pt-4">
                                    <h1 className="text-[30px] font-bold text-white">
                                        Let&apos;s talk about your project
                                    </h1>
                                    <p className="mt-3.5 max-w-[320px] text-[15px] text-[#C7D0DD]">
                                        A question, a project in mind? We reply quickly.
                                    </p>
                                </div>

                                <div className="mt-10">
                                    {contactInfo.map((item) => (
                                        <div key={item.label} className="mb-6">
                                            <div className="eyebrow on-dark">{item.label}</div>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="text-base font-medium text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                                                >
                                                    {item.value}
                                                </a>
                                                ) : (
                                                <div className="text-base font-medium text-white">
                                            {item.value}
                                        </div>
                                    )}
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Panneau formulaire */}
                    <div className="bg-white p-11">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
</section>
);
}