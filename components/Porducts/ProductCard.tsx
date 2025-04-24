import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { MainBtn } from "../Buttons/MainBtn";

export function ProductCard({ produkt }: { produkt: Product }) {
    return (
        <Link
            href={`/sklep/${produkt.slug}`}
            key={produkt.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2"
        >
            <div className="relative h-52 w-full">
                <Image
                    src={produkt.image}
                    alt={produkt.title}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{produkt.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{produkt.category}</p>
                <p className="text-sm text-gray-700 line-clamp-2">
                    {produkt.description}
                </p>
                <div className="flex items-center justify-between w-full mt-3">
                    <div className="font-bold text-green-600">
                        {produkt.sizesAndPrices?.[0]?.price.toFixed(2)} zł
                    </div>
                    <MainBtn>Zobacz</MainBtn>
                </div>
            </div>
        </Link>
    );
}
