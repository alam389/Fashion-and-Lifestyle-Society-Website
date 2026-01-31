export default function BehindTheScenes() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-start relative">
        <div className="px-4 sm:px-6 lg:px-[1.875rem] pt-16 sm:pt-20 lg:pt-[7rem] w-full">
          <div className="w-full max-w-[52rem]">
            <span
              className="block text-5xl sm:text-7xl md:text-8xl md:text-9xl font-bold"
              style={{ fontFamily: 'var(--font-helvetica-bold)' }}
            >
              BEHIND
            </span>
            <span
              className="block text-5xl sm:text-7xl md:text-8xl md:text-9xl font-bold"
              style={{ fontFamily: 'var(--font-helvetica-bold-oblique)' }}
            >
              THE SCENES
            </span>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[48rem] h-0 outline outline-1 outline-white mt-4" />

          {/* Intro */}
          <p
            className="mt-6 sm:mt-8 max-w-3xl text-lg sm:text-xl md:text-2xl tracking-wide"
            style={{ fontFamily: 'var(--font-didot)' }}
          >
            A closer look at the creative process behind the runway — from makeup
            chairs and fittings to hair styling and late-night production meetings.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 md:bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p
            className="text-[0.9375rem] text-center"
            style={{ fontFamily: 'var(--font-helvetica-light)' }}
          >
            SCROLL
          </p>
          <svg
            className="animate-bounce w-6 h-6"
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

      {/* BTS Sections */}
      <section className="px-4 sm:px-6 lg:px-[1.875rem] py-12 md:py-24 space-y-16 md:space-y-32">
        <BTSBlock
          title="MAKEUP"
          subtitle="Skin, texture, and expression"
          description="Each look began with extensive testing and refinement. Makeup was designed to enhance the garments while preserving individuality, adapting under runway lighting and movement."
          images={[
            "/images/behind-the-scenes/makeup/1.jpg",
            "/images/behind-the-scenes/makeup/2.jpg",
            "/images/behind-the-scenes/makeup/3.jpg",
            "/images/behind-the-scenes/makeup/4.jpg",
            "/images/behind-the-scenes/makeup/5.jpg",
            "/images/behind-the-scenes/makeup/6.jpg",
            "/images/behind-the-scenes/makeup/7.jpg",
            "/images/behind-the-scenes/makeup/8.jpg",
            "/images/behind-the-scenes/makeup/9.jpg",
          ]}
        />

        <BTSBlock
          title="HAIR"
          subtitle="Structure and motion"
          description="Hair styling shaped the silhouette of every look — from controlled finishes to raw textures that amplified the mood of the collection."
          reverse
          images={[
            "/images/behind-the-scenes/hair/1.jpg",
            "/images/behind-the-scenes/hair/2.jpg",
            "/images/behind-the-scenes/hair/3.jpg",
          ]}
        />

        <BTSBlock
          title="CLOTHING & FITTINGS"
          subtitle="Where ideas become form"
          description="Fittings were an ongoing dialogue between designers and models. Adjustments, pinning, and tailoring ensured every piece moved intentionally on the runway."
          images={[
            "/images/behind-the-scenes/fittings/1.jpg",
            "/images/behind-the-scenes/fittings/2.jpg",
            "/images/behind-the-scenes/fittings/3.jpg",
            "/images/behind-the-scenes/fittings/4.jpg",
            "/images/behind-the-scenes/fittings/5.jpg",
            "/images/behind-the-scenes/fittings/6.jpg",
            "/images/behind-the-scenes/fittings/7.jpg",
            "/images/behind-the-scenes/fittings/8.jpg",    
            "/images/behind-the-scenes/fittings/9.jpg",
          ]}
        />

        <BTSBlock
          title="TEAM MEETINGS"
          subtitle="Creative alignment"
          description="Production meetings aligned vision, logistics, and execution — turning concepts into a cohesive runway experience through collaboration."
          reverse
          images={[
            "/images/behind-the-scenes/teams/1.jpg",
            "/images/behind-the-scenes/teams/2.jpg",
            "/images/behind-the-scenes/teams/3.jpg",
            "/images/behind-the-scenes/teams/4.jpg",
            "/images/behind-the-scenes/teams/5.jpg",
            "/images/behind-the-scenes/teams/6.jpg",
          ]}
        />
      </section>

      {/* Closing */}
      <section className="px-4 sm:px-6 lg:px-[1.875rem] pb-16 md:pb-32">
        <p
          className="max-w-3xl text-xl text-gray-300"
          style={{ fontFamily: 'var(--font-didot)' }}
        >
          Behind the scenes is where the collection truly takes shape —
          collaborative, chaotic, and deeply intentional.
        </p>
      </section>
    </div>
  )
}

function BTSBlock({
  title,
  subtitle,
  description,
  images = [],
  reverse = false,
}: {
  title: string
  subtitle: string
  description: string
  images?: string[]
  reverse?: boolean
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-16 items-center`}
    >
      {/* Images */}
      <div className="w-full md:w-2/3">
        {images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="aspect-[4/5] overflow-hidden bg-neutral-900"
              >
                <img
                  src={src}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="aspect-[4/5] bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
            IMAGE / VIDEO
          </div>
        )}
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2
          className="text-4xl mb-2"
          style={{ fontFamily: 'var(--font-helvetica-bold)' }}
        >
          {title}
        </h2>

        <p
          className="uppercase tracking-widest text-sm text-gray-400 mb-6"
          style={{ fontFamily: 'var(--font-helvetica-light)' }}
        >
          {subtitle}
        </p>

        <p
          className="text-lg leading-relaxed text-gray-300"
          style={{ fontFamily: 'var(--font-didot)' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}