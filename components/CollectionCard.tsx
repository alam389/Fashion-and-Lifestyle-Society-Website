import Link from 'next/link'
import Image from 'next/image'

interface CollectionCardProps {
  image: string
  title: string
  season: string
  href: string
  alt: string
}

export default function CollectionCard({
  image,
  title,
  season,
  href,
  alt,
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block w-full max-w-[24rem] sm:w-96 mx-auto sm:mx-0">
      <div className="relative w-full aspect-[384/661] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-all duration-300 group-hover:blur-md"
          sizes="(max-width: 640px) 100vw, 384px"
        />
        {/* Title Overlay - anchored to bottom-left (title above season) */}
        <div className="absolute bottom-16 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-normal block" style={{ fontFamily: 'var(--font-didot)' }}>
            <br/>
          </span>
          <span className="text-white text-3xl sm:text-4xl font-normal block" style={{ fontFamily: 'var(--font-didot-title)' }}>
            {title}
          </span>
        </div>
        {/* Season Overlay */}
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-2xl sm:text-3xl font-normal tracking-wider z-10" style={{ fontFamily: 'var(--font-didot)' }}>
          {season}
        </div>
      </div>
    </Link>
  )
}
