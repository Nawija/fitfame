import { Product } from "@/types/types";
import { getAllProducts } from "@/lib/getProducts";
import { ProductCard } from "@/components/Porducts/ProductCard";

export default function ProduktyPage() {
    const products: Product[] = getAllProducts();

    return (
        <div className="p-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Nasze Produkty
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((produkt) => (
                    <ProductCard produkt={produkt} />
                ))}
            </div>
        </div>
    );
}
