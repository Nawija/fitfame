import { getBlocks, type Block } from "@/lib/getBlocks";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blocks: Block[] = await getBlocks();
    const block = blocks.find((b) => b.slug === slug);

    if (!block) return notFound();

    return (
        <section className="mx-auto py-12 px-4 prose max-w-prose">
            <img
                src={block.image}
                alt={block.title}
                className="w-full rounded-xl shadow mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{block.title}</h1>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {block.content}
            </ReactMarkdown>
        </section>
    );
}
