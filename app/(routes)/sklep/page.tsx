import Image from "next/image";
import { Product } from "@/types/types";
import { getAllProducts } from "@/lib/getProducts";

export default function ProduktyPage() {
    const products: Product[] = getAllProducts();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Nasze Produkty</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.map((produkt) => (
                    <div
                        key={produkt.slug}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <Image
                            src={`/images/produkty/${produkt.image}`}
                            alt={produkt.title}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">
                                {produkt.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">
                                {produkt.category}
                            </p>
                            <p className="text-sm text-gray-700 line-clamp-2">
                                {produkt.description}
                            </p>
                            <div className="mt-3 font-bold text-green-600">
                                {produkt.price.toFixed(2)} zł
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
