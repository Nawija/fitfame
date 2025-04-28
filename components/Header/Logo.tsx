"use client";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="font-bold lg:mr-8 uppercase tracking-tight text-xl lg:text-4xl ">
            <Link href="/" aria-label="Strona główna">
                <div className="relative">
                    <p>GRAMFIT</p>
                </div>
            </Link>
        </div>
    );
}
