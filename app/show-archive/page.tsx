import CollectionCard from '@/components/CollectionCard'

interface Collection {
  image: string
  title: string
  season: string
  href: string
  alt: string
}

export default function Show() {
  const collections: Collection[] = [
    {
      image: '/images/show/revelations/cover-relevations.JPG',
      title: 'REVELATIONS',
      season: 'FW 2025',
      href: '/show-archive/revelations',
      alt: 'Revelations collection',
    },
    {
      image: '/images/show/haus_of_horror.png',
      title: 'HAUS OF HORROR',
      season: 'FW 2025',
      href: '/show-archive/show-pages',
      alt: 'Haus of Horror collection',
    },
    {
      image: '/images/show/pangea/IMG_9371.jpeg',
      title: 'PANGEA',
      season: 'SS 2024',
      href: '/show-archive/pangea',
      alt: 'Pangea collection',
    },
    {
      image: '/images/show/future-relics/IMG_4120.JPG',
      title: 'FUTURE RELICS',
      season: 'FW 2024',
      href: '/show-archive/future-relics-fw-24',
      alt: 'Future Relics collection',
    },
  ]

  return (
    <div className="bg-black">
      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen relative flex items-start">
        <div className="px-4 sm:px-6 md:px-8 lg:px-[1.875rem] pt-16 sm:pt-20 md:pt-24 lg:pt-[7rem] w-full">
          <div className="w-full max-w-[46.3125rem]">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold block" style={{ fontFamily: 'var(--font-helvetica-bold)' }}>
              RUNWAY
            </span>
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold block" style={{ fontFamily: 'var(--font-helvetica-bold-oblique)' }}>
              ARCHIVE
            </span>
          </div>
          <div className="w-full max-w-[48.25rem] h-0 outline outline-1 outline-offset-[-0.03125rem] outline-white mt-4"></div>
          
          <div className="w-full max-w-[38.4375rem] mt-4 sm:mt-6 md:mt-8 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide" style={{ fontFamily: 'var(--font-didot)' }}>
            Explore past and present collections from our talented designers at FLS!
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p 
            className="font-normal leading-normal not-italic text-xs sm:text-sm text-center text-white"
            style={{ fontFamily: 'var(--font-helvetica-light)' }}
            data-node-id="210:100"
          >
            SCROLL
          </p>
          {/* Down Arrow */}
          <svg 
            className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-[1.875rem] py-8 sm:py-12 md:py-16">
        

        {/* Collection Cards Grid */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.href}
              image={collection.image}
              title={collection.title}
              season={collection.season}
              href={collection.href}
              alt={collection.alt}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

