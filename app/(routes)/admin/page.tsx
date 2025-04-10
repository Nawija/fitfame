import { MainBtn } from "@/components/Buttons/MainBtn";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="py-48 flex items-center justify-center flex-col">
            <Link href="/admin/przepisy">
                <MainBtn>Dodaj Przepis</MainBtn>
            </Link>
        </div>
    );
}
