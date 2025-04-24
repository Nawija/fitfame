import { getProducktBySlug } from "@/lib/getProducts";
import { Product } from "@/types/types";
import { Metadata } from "next";
import { LunchboxProduct } from "./LunchboxProduct";
import Navigation from "@/components/Navigation";
// import { LunchboxProduct } from "./LunchboxProduct";

export const metadata: Metadata = {
    title: "Lunchbox premium",
    description:
        "Stylowy i praktyczny lunchbox do pracy, szkoły lub natrening. Trzyma temperaturę i wygląda świetnie",
    openGraph: {
        title: "Lunchbox premium",
        description:
            " Stylowy i praktyczny lunchbox do pracy, szkoły lub natrening. Trzyma temperaturę i wygląda świetnie",
        images: "/images/sklep/lunchbox1.avif",
    },
};

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
                    image={product.image}
                />
            </div>
        </>
    );
}
