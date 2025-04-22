"use client";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="font-bold lg:mr-8 uppercase pb-3 tracking-widest text-xl lg:text-5xl ">
            <Link href="/" aria-label="Strona główna" >
                <div className="relative">
                    <p>FAME</p>
                    <span className="absolute right-0.5 -bottom-full -translate-y-[70%] text-base lg:text-3xl tracking-wide text-gray-700">
                        FIT
                    </span>
                </div>
            </Link>
        </div>
    );
}
