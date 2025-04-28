import { getProducktBySlug, getAllProducts } from "@/lib/getProducts";
import { Product } from "@/types/types";
import { LunchboxProduct } from "./LunchboxProduct";
import Navigation from "@/components/Navigation";
import { ProductCard } from "@/components/Porducts/ProductCard";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const awaitedParams = await Promise.resolve(params);
    const { slug } = awaitedParams;
    const product: Product | null = await getProducktBySlug(slug);

    if (!product) {
        return <div>Produkt nie został znaleziony.</div>;
    }
    const allProducts = await getAllProducts();
    
    const similarProducts = allProducts
        .filter((p) => {
            if (p.slug === product.slug) return false;

            const productTitleWords = product.title
                .split(" ")
                .slice(0, 2)
                .map((word) => word.toLowerCase());
            const productTitleLower = p.title.toLowerCase();
            return productTitleWords.some((word) =>
                productTitleLower.includes(word)
            );
        })
        .slice(0, 4);

    return (
        <>
            <div className="max-w-6xl mx-auto p-2 px-4">
                <Navigation
                    links={[
                        { name: "Sklep", href: "/sklep" },
                        {
                            name: product.title,
                            href: `/sklep/${product.slug}`,
                        },
                    ]}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 lg:py-10 py-4 anim-opacity">
                <LunchboxProduct
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    additionalImages={product.additionalImages}
                    sizesAndPrices={product.sizesAndPrices}
                    content={product.content}
                />
            </div>

            {/* Recommendations Section */}
            {similarProducts.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 lg:py-10 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Proponowane
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {similarProducts.map((product) => (
                            <ProductCard key={product.slug} produkt={product} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
