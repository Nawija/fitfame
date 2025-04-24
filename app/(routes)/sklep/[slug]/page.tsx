import { getProducktBySlug } from "@/lib/getProducts";
import { Product } from "@/types/types";
import { LunchboxProduct } from "./LunchboxProduct";
import Navigation from "@/components/Navigation";


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
    return (
        <>
            <div className="max-w-5xl mx-auto p-2">
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
            <div className="max-w-5xl mx-auto px-4 lg:py-10 py-4">
                <LunchboxProduct
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    additionalImages={product.additionalImages}
                    sizesAndPrices={product.sizesAndPrices}
                />
            </div>
        </>
    );
}
