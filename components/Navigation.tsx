"use client";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const Navigation = ({ links }: { links: { name: string; href: string }[] }) => {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="flex items-center text-xs w-full">
            <button
                onClick={handleBack}
                className="flex items-center justify-center cursor-pointer font-semibold text-gray-800 hover:text-gray-900 mr-6"
            >
                <IoArrowBack className="mr-2" />
                <span>Powrót</span>
            </button>
            {links.map((link, index) => (
                <span key={index} className="flex items-center justify-center uppercase">
                    <Link
                        href={link.href}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        {link.name}
                    </Link>
                    {/* Separator | lub / */}
                    {index < links.length - 1 && (
                        <span className="mx-2 text-gray-700 font-medium">/</span>
                    )}
                </span>
            ))}
        </div>
    );
};

export default Navigation;
