"use client";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="font-bold lg:mr-8 uppercase pb-3 tracking-widest text-2xl lg:text-5xl ">
            <Link href="/" aria-label="Strona główna" className="relative">
                <p >FAME</p>
                <span className="absolute right-0 -bottom-full -translate-y-[60%] text-xl lg:text-3xl">
                    FIT
                </span>
            </Link>
        </div>
    );
}
