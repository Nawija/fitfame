import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ produkt }: { produkt: Product }) {
    return (
        <Link
            className="flex flex-col items-start justify-between h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group p-2"
            href={`/sklep/${produkt.slug}`}
        >
            <div>
                <div className="relative h-52 w-full z-0 overflow-hidden">
                    {/* Pierwsze zdjęcie */}
                    <Image
                        src={produkt.image}
                        alt={produkt.title}
                        fill
                        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Drugie zdjęcie, które pokaże się na hover */}
                    {produkt.additionalImages?.[0] && (
                        <Image
                            src={produkt.additionalImages[0]}
                            alt={produkt.title + " - podgląd"}
                            fill
                            className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                        />
                    )}
                </div>

                <div className="flex items-stretch justify-between flex-col px-2 py-2">
                    <h2 className="text-sm lg:text-base font-semibold line-clamp-4">
                        {produkt.title}
                    </h2>
                    <p className="text-sm text-gray-700 line-clamp-2 mt-2">
                        {produkt.description}
                    </p>
                </div>
            </div>
            <div className="font-bold text-lg text-green-600 ml-auto py-1 px-2">
                {produkt.sizesAndPrices?.[0]?.price.toFixed(2)} zł
            </div>
        </Link>
    );
}
