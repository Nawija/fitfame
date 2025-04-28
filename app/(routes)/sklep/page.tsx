import { Product } from "@/types/types";
import { getAllProducts } from "@/lib/getProducts";
import { ProductCard } from "@/components/Porducts/ProductCard";
import { ProductCardFlex } from "@/components/Porducts/ProductCardFlex";

export default function ProduktyPage() {
    const products: Product[] = getAllProducts();
    const lunchBoxyProducts = products
        .filter((p) => {
            if (p.category === "Pojemniki") return true;
        })
        .slice(0, 5);

    const akcesoriaProducts = products
        .filter((p) => {
            if (p.category === "Akcesoria") return true;
        })
        .slice(0, 5);

    const tshirtProducts = products
        .filter((p) => {
            if (p.category === "TShirt") return true;
        })
        .slice(0, 5);

    return (
        <div className="p-3 py-8 max-w-7xl mx-auto anim-opacity">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Polecane</h1>
            <div className="relative w-full overflow-x-scroll py-4">
                <div className="w-max flex items-stretch justify-start space-x-3">
                    {products.slice(0, 10).map((produkt) => (
                        <ProductCardFlex key={produkt.slug} produkt={produkt} />
                    ))}
                </div>
            </div>
            {lunchBoxyProducts.length > 0 && (
                <>
                    <h2 className="text-3xl font-bold my-6 text-gray-800">
                        Pojemniki
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {lunchBoxyProducts.map((produkt) => (
                            <ProductCard key={produkt.slug} produkt={produkt} />
                        ))}
                    </div>
                </>
            )}
            {akcesoriaProducts.length > 0 && (
                <>
                    <h2 className="text-3xl font-bold my-6 text-gray-800">
                        Akcesoria
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                        {akcesoriaProducts.map((produkt) => (
                            <ProductCard key={produkt.slug} produkt={produkt} />
                        ))}
                    </div>
                </>
            )}

            {tshirtProducts.length > 0 && (
                <>
                    <h2 className="text-3xl font-bold my-6 text-gray-800">
                        T-Shirt
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                        {tshirtProducts.map((produkt) => (
                            <ProductCard key={produkt.slug} produkt={produkt} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
