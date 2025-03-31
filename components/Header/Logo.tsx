"use client";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="font-bold lg:mr-8 uppercase tracking-widest text-2xl lg:text-5xl relative">
            <Link href="/" aria-label="Strona główna">
                FAME
                <span className="absolute right-0 -bottom-full -translate-y-[60%] text-xl lg:text-3xl">
                    FIT
                </span>
            </Link>
        </div>
    );
}
