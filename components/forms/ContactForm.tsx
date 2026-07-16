"use client";

import { useState, type FormEvent } from "react";

// ⚠️ À remplacer une fois le vrai Google Form créé
const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/REPLACE_WITH_REAL_FORM_ID/formResponse";

const FORM_FIELDS = {
    name: "entry.REPLACE_ME_1",
    email: "entry.REPLACE_ME_2",
    message: "entry.REPLACE_ME_3",
};

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
        "idle"
    );

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData();
        formData.append(FORM_FIELDS.name, name);
        formData.append(FORM_FIELDS.email, email);
        formData.append(FORM_FIELDS.message, message);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                mode: "no-cors",
                body: formData,
            });
            setStatus("submitted");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("idle");
        }
    }

    if (status === "submitted") {
        return (
            <div className="rounded-lg border border-teal bg-teal/10 px-6 py-8 text-center">
                <p className="font-heading text-lg font-bold text-indigo">
                    Message sent!
                </p>
                <p className="mt-2 text-[14.5px] text-dusk">
                    We&apos;ll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-[18px]">
                <label className="mb-1.5 block text-[13px] font-semibold text-indigo">
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-border px-3.5 py-3 text-sm text-dusk"
                />
            </div>

            <div className="mb-[18px]">
                <label className="mb-1.5 block text-[13px] font-semibold text-indigo">
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-lg border border-border px-3.5 py-3 text-sm text-dusk"
                />
            </div>

            <div className="mb-[18px]">
                <label className="mb-1.5 block text-[13px] font-semibold text-indigo">
                    Message
                </label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe what you need in a few words..."
                    required
                    rows={4}
                    style={{ minHeight: "100px" }}
                    className="w-full resize-y rounded-lg border border-border px-3.5 py-3 text-sm text-dusk"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-teal px-7 py-3.5 text-[14.5px] font-semibold text-indigo shadow-[0_8px_24px_rgba(91,192,190,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(91,192,190,0.4)] disabled:opacity-60"
            >
                {status === "submitting" ? "Sending..." : "Send"}
            </button>
        </form>
    );
}