import { MainBtn } from "@/components/Buttons/MainBtn";
import Link from "next/link";

export default function page() {
    return (
        <div className="flex flex-col space-y-12 items-center justify-center h-[50vh] ">
            <p className="uppercase font-bold text-2xl">Sekcja Produkty</p>
            <div className="flex items-center justify-center space-x-2">

                <Link href="/admin/produkty/dodaj-produkt">
                    <MainBtn>Dodaj Produkty</MainBtn>
                </Link>

            </div>
        </div>
    );
}
