"use client";

import { useEffect, useState } from "react";
import { FaShare } from "react-icons/fa";

function ShareButton({ title }: { title: string }) {
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        setCanShare(typeof window !== "undefined" && !!navigator.share);
    }, []);

    const handleShare = async () => {
        try {
            await navigator.share({
                title: `${title} – Przepis`,
                text: `Zobacz ten przepis: ${title}`,
                url: window.location.href,
            });
        } catch (error) {
            console.error("Błąd podczas udostępniania:", error);
        }
    };

    if (!canShare) return null;

    return (
        <button
            onClick={handleShare}
            className="relative tracking-wide bg-gradient-to-bl from-violet-500 to-blue-500 rounded-lg duration-300 cursor-pointer transition-all px-3 py-1.5 text-[11px] font-medium text-white flex items-center justify-center"
        >
            Udostępnij <FaShare className="ml-2" />
        </button>
    );
}

export default ShareButton;
