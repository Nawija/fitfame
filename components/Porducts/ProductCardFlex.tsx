import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCardFlex({ produkt }: { produkt: Product }) {
    return (
        <Link
            href={`/sklep/${produkt.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden flex items-start justify-start hover:shadow-lg transition-shadow p-2 group"
        >
            <div className="relative w-32 h-32">
                <Image
                    src={produkt.image}
                    alt={produkt.title}
                    fill
                    className="object-contain rounded-xl transition-opacity duration-300 group-hover:opacity-0"
                />
                {produkt.additionalImages?.[0] && (
                    <Image
                        src={produkt.additionalImages[0]}
                        alt={produkt.title + " - podgląd"}
                        fill
                        className="object-cover rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                    />
                )}
            </div>
            <div className="p-4 w-52">
                <h2 className="text-base font-semibold">{produkt.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{produkt.category}</p>
                <div className="flex items-center justify-between w-full mt-3">
                    <div className="font-bold text-green-600">
                        {produkt.sizesAndPrices?.[0]?.price.toFixed(2)} zł
                    </div>
                </div>
            </div>
        </Link>
    );
}
