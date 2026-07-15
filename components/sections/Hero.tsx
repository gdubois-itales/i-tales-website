import Filament from "@/components/ui/Filament";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-indigo px-5 md:px-8 [clip-path:polygon(0_0,100%_0,100%_92%,0_100%)]">

            <Filament path="M -18 760 C 164 640, 236 360, 436 420 C 636 480, 691 120, 927 80" />

            <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 pb-[90px] md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="eyebrow on-dark">I-Tales --init</div>

                    <div className="thread-top pt-[18px]">
                        <h1 className="font-heading text-[42px] font-bold leading-[1.08] tracking-[-1px] text-white sm:text-[58px]">
                            From code to<br />
                            deployment,<br />
                            <span className="text-teal">without breaking</span> the story.
                        </h1>
                    </div>

                    <p className="mt-5 max-w-[480px] text-[17px] text-[#C7D0DD]">
                        IT consulting studio based in Belgium, specialized in Java, DevOps,
                        CI/CD and OpenShift. We embed with your teams to ship reliable
                        software.
                    </p>
                    <div className="mt-8 flex gap-3.5">
                        <Link
                            href="/contact"
                            className="rounded-lg bg-teal px-7 py-3.5 text-[14.5px] font-semibold text-indigo shadow-[0_8px_24px_rgba(91,192,190,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(91,192,190,0.4)]"
                        >
                            Discuss a project
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-lg border border-white/30 px-7 py-3.5 text-[14.5px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                        >
                            View services
                        </Link>
                    </div>
                </div>

                <div className="relative h-[380px]">
                    <div className="absolute inset-0 rotate-[-6deg] rounded-[32px] bg-gradient-to-br from-teal via-teal-dark to-indigo-soft shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />
                    <div className="micro-dot -top-2.5 left-10" />
                    <div className="absolute right-[-18px] top-6 rounded-lg border border-teal bg-indigo px-3.5 py-2 font-mono text-xs text-teal-light shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
                        build: passing
                    </div>

                    <div className="absolute bottom-[-24px] left-[-30px] w-[230px] rounded-xl bg-white px-5 py-4 font-mono text-[12.5px] text-indigo shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                        <div className="mb-2 flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#3CCB6E]" />
                            code → customer
                        </div>
                        <div className="mb-2 opacity-60">3 services · 0 errors</div>
                        <div className="opacity-60">uptime 99.9%</div>
                    </div>
                </div>
            </div>

            <div className="-mx-5 overflow-hidden border-y border-white/10 bg-black/15 py-4 md:-mx-8">
                <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-mono text-[13px] text-teal-light">
                    {[0, 1].map((i) => (
                        <span key={i} className="flex gap-12">
                <span>$ java --version</span>
                <span>$ oc get pods</span>
                <span>$ ci/cd pipeline: passing</span>
                <span>$ kubectl apply -f deploy.yaml</span>
                <span>$ openshift build: success</span>
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}