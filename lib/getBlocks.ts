import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Block = {
    type: string;
    slug: string
    title: string;
    image: string;
    content: string;
};

const blocksDir = path.join(process.cwd(), "/content/blocks");

export async function getBlocks(): Promise<Block[]> {
    const filenames = fs.readdirSync(blocksDir)
  
    const blocks = filenames.map((filename) => {
      const filePath = path.join(blocksDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
  
      return {
        type: data.type,
        title: data.title,
        slug: data.slug,
        image: data.image,
        content,
      }
    })
  
    return blocks
  }
  
