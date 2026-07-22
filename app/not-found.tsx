import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center bg-indigo text-center py-10 md:px-8">

            <Image
                src={`${basePath}/images/404.png`}
                alt="Cracked I-Tales logo symbolizing a broken page"
                width={250}
                height={250}
                priority
            />

            <div className="eyebrow on-dark text-[40px]">404</div>

            <h1 className="font-heading text-[36px] font-bold text-white">
                Page not found
            </h1>
            <p className="mt-3.5 max-w-md text-[15.5px] text-[#C7D0DD]">
                The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <Link
                href="/"
                className="mt-8 inline-block rounded-lg bg-teal px-7 py-3.5 text-[14.5px] font-semibold text-indigo shadow-[0_8px_24px_rgba(91,192,190,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(91,192,190,0.4)]"
            >
                Back to home
            </Link>
        </section>
    );
}