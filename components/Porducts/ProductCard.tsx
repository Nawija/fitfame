import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "../Cart/AddToCartButton";

export function ProductCard({ produkt }: { produkt: Product }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2 group flex flex-col items-stretch justify-start">
            <Link href={`/sklep/${produkt.slug}`}>
                <div className="relative h-52 w-full">
                    {/* Pierwsze zdjęcie */}
                    <Image
                        src={produkt.image}
                        alt={produkt.title}
                        fill
                        className="object-contain rounded-xl transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Drugie zdjęcie, które pokaże się na hover */}
                    {produkt.additionalImages?.[0] && (
                        <Image
                            src={produkt.additionalImages[0]}
                            alt={produkt.title + " - podgląd"}
                            fill
                            className="object-contain rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                        />
                    )}
                </div>
                <div className="p-2 flex items-stretch justify-between flex-col h-72 relative">
                    <div>
                        <h2 className="text-lg font-semibold line-clamp-4">
                            {produkt.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">
                            {produkt.category}
                        </p>
                        <p className="text-sm text-gray-700 line-clamp-2">
                            {produkt.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="font-bold text-green-600">
                            {produkt.sizesAndPrices?.[0]?.price.toFixed(2)} zł
                        </div>
                    </div>
                </div>
            </Link>
            <AddToCartButton
                produkt={{
                    title: produkt.title,
                    slug: produkt.slug,
                    category: "",
                    image:
                        typeof produkt.image === "string" ? produkt.image : "",
                    additionalImages: produkt.additionalImages ?? [],
                    sizesAndPrices: produkt.sizesAndPrices ?? [],
                    price: produkt.sizesAndPrices[0].price,
                    description: produkt.description,
                    content: produkt.content ?? "",
                }}
            />
        </div>
    );
}
