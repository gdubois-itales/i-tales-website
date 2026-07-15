"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {

    const pathname = usePathname();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/";

    return (

        <header className="sticky top-0 z-50 bg-indigo">
            <div className="mx-auto flex h-[90px] w-full max-w-[1600px] items-center justify-between px-5 md:px-8">

                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90 md:gap-4"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo font-heading text-lg font-bold text-indigo shadow-[0_8px_20px_rgba(91,192,190,0.35)]">
                        <Image src={`${basePath}images/logo.png`} alt="I-Tales" width={40} height={40} />
                    </div>

                    <span className="whitespace-nowrap font-heading text-lg font-bold tracking-[-0.5px] text-white md:text-[24px]">
        I-Tales
    </span>
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-4 sm:gap-6 md:gap-10">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`
                        relative whitespace-nowrap text-[13px] font-medium transition duration-200 md:text-[15px]
                        after:absolute after:bottom-[-6px] after:left-0
                        after:h-[2px] after:bg-teal
                        after:transition-all after:duration-300
                        ${
                                        pathname === link.href
                                            ? "text-teal after:w-full"
                                            : "text-white/90 after:w-0 hover:text-teal hover:after:w-full"
                                    }
                    `}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
}
