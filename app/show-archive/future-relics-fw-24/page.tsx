import Image from 'next/image'

const runwayImages = [
  '/images/show/future-relics/IMG_3966.JPG',
  '/images/show/future-relics/IMG_3970.JPG',
  '/images/show/future-relics/IMG_3976.JPG',
  '/images/show/future-relics/IMG_3982.JPG',
  '/images/show/future-relics/IMG_4041.JPG',
  '/images/show/future-relics/IMG_4051.JPG',
  '/images/show/future-relics/IMG_4058.JPG',
  '/images/show/future-relics/IMG_4065.JPG',
  '/images/show/future-relics/IMG_4072.JPG',
  '/images/show/future-relics/IMG_4092.JPG',
  '/images/show/future-relics/IMG_4104.JPG',
  '/images/show/future-relics/IMG_4110.JPG',
  '/images/show/future-relics/IMG_4120.JPG',
  '/images/show/future-relics/IMG_4132.JPG',
  '/images/show/future-relics/IMG_4134.JPG',
  '/images/show/future-relics/IMG_4145.JPG',
  '/images/show/future-relics/IMG_4157.JPG',
  '/images/show/future-relics/IMG_4165.JPG',
  '/images/show/future-relics/IMG_4174.JPG',
  '/images/show/future-relics/IMG_4192.JPG',
  '/images/show/future-relics/IMG_4194.JPG',
  '/images/show/future-relics/IMG_4197.JPG',
]

export default function FutureRelics() {
  return (
    <div className="bg-black min-h-screen relative">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 pt-[2rem] pb-16">
        {/* Header Section */}
        <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-[5rem] flex flex-col items-center">
          {/* Season */}
          <div className="flex flex-col items-center">
            <p
              className="text-white text-sm sm:text-base md:text-lg lg:text-[1rem] font-bold"
              style={{ fontFamily: 'var(--font-helvetica-bold)' }}
            >
              FALL/WINTER 2024
            </p>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-[1.5rem] w-full px-4">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-normal leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[116px] text-center"
              style={{ fontFamily: 'var(--font-didot-title)' }}
            >
              Future Relics
            </h1>
            

            {/* Byline */}
            <p
              className="text-white text-sm sm:text-base md:text-lg lg:text-[1.25rem] italic text-center mt-2 sm:mt-3 md:mt-4"
              style={{ fontFamily: 'var(--font-didot-italic)' }}
            >
              Directed by Claire Francis
            </p>
          </div>

          {/* Divider Line */}
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-[2.5rem] h-px w-full max-w-[85.0625rem] bg-white mx-auto"></div>
        </div>

        {/* Runway Images Grid - 3 columns matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {runwayImages.map((src, index) => (
            <div key={index} className="relative w-full aspect-[440/661]">
              <Image
                src={src}
                alt={`Runway look ${index + 1} from Future Relics collection`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 440px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
