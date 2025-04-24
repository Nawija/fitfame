import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Product } from "@/types/types";

const recipesDir = path.join(process.cwd(), "content/produkty");

export async function getProducktBySlug(slug: string): Promise<Product | null> {
    const filePath = path.join(recipesDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        title: data.title,
        slug,
        image: data.image,
        additionalImages: data.additionalImages,
        category: data.category,
        price: data.price,
        description: data.description,
        sizesAndPrices: data.sizesAndPrices,
        content,
    } as Product;
}

export function getAllProducts(): Product[] {
    const dir = path.join(process.cwd(), "content", "produkty");
    const files = fs.readdirSync(dir);

    const products = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => parseProduct(path.join(dir, file)));

    return products;
}

export function parseProduct(filePath: string): Product {
    const file = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(file);
    const slug = path.basename(filePath, ".md");

    return {
        title: data.title,
        slug,
        image: data.image,
        additionalImages: data.additionalImages,
        category: data.category,
        price: data.price,
        description: data.description,
        sizesAndPrices: data.sizesAndPrices,
        content,
    };
}

export function getSimilarProducts(currentProductSlug: string): Product[] {
    // Fetch all products
    const allProducts = getAllProducts();

    // Find the current product
    const currentProduct = allProducts.find(
        (product) => product.slug === currentProductSlug
    );

    if (!currentProduct) {
        return []; // If the product isn't found, return an empty array
    }

    // Filter products by category, excluding the current product
    const similarProducts = allProducts.filter(
        (product) =>
            product.category === currentProduct.category &&
            product.slug !== currentProductSlug
    );

    return similarProducts;
}
