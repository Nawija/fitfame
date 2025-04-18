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
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <div
            className={`transition-all duration-500 ease-in-out transform rounded-xl fixed right-0 bottom-20 z-50 h-20 w-52 flex items-center justify-center text-white
            ${isError ? "bg-red-500" : "bg-green-500"}
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
            {visible && (
                <p className="text-center text-base font-bold">
                    {status}
                </p>
            )}
        </div>
    );
}
