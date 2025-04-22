import { MainBtn } from "@/components/Buttons/MainBtn";
import Link from "next/link";

export default function page() {
    return (
        <div className="flex flex-col space-y-12 items-center justify-center h-[50vh] ">
            <p className="uppercase font-bold text-2xl">Sekcja Admin</p>
            <div className="flex items-center justify-center space-x-2">
                <Link href="/admin/przepisy">
                    <MainBtn>Przepisy</MainBtn>
                </Link>
                <Link href="/admin/blog">
                    <MainBtn>Blog</MainBtn>
                </Link>
            </div>
        </div>
    );
}
