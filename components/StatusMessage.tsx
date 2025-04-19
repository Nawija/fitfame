"use client";

import { useEffect, useState } from "react";

type StatusMessageProps = {
    status: string | null;
};

export default function StatusMessage({ status }: StatusMessageProps) {
    const [visible, setVisible] = useState(false);
    const isError = status?.toLowerCase().includes("error");

    useEffect(() => {
        if (status) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <div
            className={`transition-all duration-500 ease-in-out transform rounded-xl fixed right-2 top-2 z-50 h-20 w-80 flex items-center justify-center text-white
            ${isError ? "bg-red-500" : "bg-green-500"}
            ${
                visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-200"
            }`}
        >
            {visible && (
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center text-xl font-bold">{status}</p>
                    <p className="font-medium">
                        {isError ? "Gdzieś jest bład sprawdz to" : "Ładuje..."}
                    </p>
                </div>
            )}
        </div>
    );
}
