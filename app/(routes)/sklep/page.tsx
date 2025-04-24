import { Product } from "@/types/types";
import { getAllProducts } from "@/lib/getProducts";
import { ProductCard } from "@/components/Porducts/ProductCard";
import { ProductCardFlex } from "@/components/Porducts/ProductCardFlex";

export default function ProduktyPage() {
    const products: Product[] = getAllProducts();
    const similarProducts = products
        .filter((p) => {
            if (p.slug === products.slug) return false; // Pomijamy bieżący produkt

            // Sprawdzamy, czy produkt należy do kategorii "promo"
            if (p.category !== "Tshirt") return false;
        })
        .slice(0, 4);

    return (
        <div className="p-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Nasze Produkty
            </h1>
            <div className="flex items-stretch justify-start space-x-4 lg:space-y-0 space-y-4 flex-wrap w-full">
                {products.map((produkt) => (
                    <ProductCardFlex produkt={produkt} />
                ))}
            </div>
            <h2 className="text-3xl font-bold my-6 text-gray-800">Koszuli</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.map((produkt) => (
                    <ProductCard produkt={produkt} />
                ))}
            </div>
        </div>
    );
}
