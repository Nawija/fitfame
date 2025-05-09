"use client";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="lg:mr-8 uppercase tracking-tight text-xl lg:text-4xl font-extrabold">
            <Link href="/" aria-label="Strona główna">
                <div className="relative">
                    <p>FITFAME</p>
                </div>
            </Link>
        </div>
    );
}
