import { getBlocks, type Block } from '@/lib/getBlocks'
import InfoBlock from './InfoBlock'

export default async function Page() {
  const blocks: Block[] = await getBlocks()

  return (
    <main>
      {blocks.map((block, i) =>
        block.type === 'info' ? (
          <InfoBlock
            key={i}
            title={block.title}
            image={block.image}
            slug={block.slug}
            content={block.content}
          />
        ) : null
      )}
    </main>
  )
}
