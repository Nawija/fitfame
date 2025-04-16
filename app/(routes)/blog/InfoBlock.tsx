"use client";

import Link from "next/link";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    title: string;
    image: string;
    slug: string;
    content: string;
};

const InfoBlock: FC<Props> = ({ title, image, slug, content }) => {
    return (
        <section className="py-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full md:w-1/2 rounded-xl shadow"
                />
                <div className="w-full md:w-1/2 prose prose-blue max-w-none">
                    <h2>{title}</h2>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
                {slug ? (
                    <Link href={`/blog/${slug}`}>Zobacz</Link>
                ) : (
                    <p className="text-red-500">Brak linku</p>
                )}
            </div>
        </section>
    );
};

export default InfoBlock;
