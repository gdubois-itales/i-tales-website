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

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="mx-auto w-full max-w-[1600px] flex h-[90px] items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-4 transition-opacity hover:opacity-90"
                >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo font-heading text-lg font-bold text-indigo shadow-[0_8px_20px_rgba(91,192,190,0.35)]">
                        <Image
                            src="images/logo.png"
                            alt="I-Tales"
                            width={40}
                            height={40}
                        />
                    </div>

                    <span className="font-heading text-[24px] font-bold tracking-[-0.5px] text-white">
                        I-Tales
                    </span>
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-10">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`
                                        relative text-[15px] font-medium transition duration-200
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
