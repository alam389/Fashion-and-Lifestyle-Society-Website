import Image from 'next/image'

type HeroCardProps = {
  src: string
  alt: string
  initialText: string
  hoverText: string
  className?: string
  href?: string
  textWrapperClassName?: string
  textSize?: string
  hoverFontClassName?: string
  cornerOverlaySrc?: string
  cornerOverlayAlt?: string
  cornerOverlayClassName?: string
}

function HeroCard({
  src,
  alt,
  initialText,
  hoverText,
  className,
  href,
  textWrapperClassName,
  textSize,
  hoverFontClassName,
  cornerOverlaySrc,
  cornerOverlayAlt,
  cornerOverlayClassName,
}: HeroCardProps) {
  const content = (
    <div
      className={[
        'group relative overflow-hidden bg-black/20',
        'shadow-[0px_10px_40px_rgba(0,0,0,0.55)]',
        className ?? '',
      ].join(' ')}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 420px"
        className="object-cover transition-opacity duration-300 ease-out group-hover:opacity-30"
        priority
      />

      {/* Optional corner overlay (e.g. up arrow) */}
      {cornerOverlaySrc ? (
        <div
          className={[
            'pointer-events-none absolute z-20 transition-opacity duration-300 ease-out group-hover:opacity-30',
            cornerOverlayClassName ?? 'right-4 top-4 h-10 w-10',
          ].join(' ')}
        >
          <Image
            src={cornerOverlaySrc}
            alt={cornerOverlayAlt ?? ''}
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>
      ) : null}

      {/* Existing container text (shown by default) */}
      <div className="absolute inset-0">
        <div className={['absolute', textWrapperClassName ?? 'left-4 top-4'].join(' ')}>
          {/* Ensure normal + hover text occupy the exact same position */}
          <div className="relative max-w-[340px]">
            <p
              className={[
                'absolute left-0 top-0',
                `text-white/90 ${textSize ?? 'text-sm'} tracking-wide font-helveticaBold`,
                'transition-opacity duration-200 ease-out',
                'group-hover:opacity-0',
              ].join(' ')}
            >
              {initialText}
            </p>

            <p
              className={[
                'absolute left-0 top-0',
                `${textSize ?? 'text-sm'} tracking-wide ${hoverFontClassName ?? 'font-helveticaLight text-white'}`,
                'opacity-0 transition-opacity duration-200 ease-out',
                'group-hover:opacity-100',
              ].join(' ')}
            >
              {hoverText}
            </p>

            {/* Spacer to give the absolutely-positioned text a layout box */}
            <span className={['invisible block tracking-wide', textSize ?? 'text-sm'].join(' ')}>
              {hoverText}
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  if (!href) return content

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className="block h-full w-full">
      {content}
    </a>
  )
}

const INSTAGRAM_URL = 'https://www.instagram.com/flsociety/?hl=en'

export default function Home() {

  const stickers = [
    { src: '/images/landing/clover.png', alt: 'Clover', className: 'left-[520px] top-[-20px] h-5 w-5 opacity-90' },
    { src: '/images/landing/clover.png', alt: 'Clover', className: 'left-[540px] top-[0px] h-5 w-5 opacity-90' },
    { src: '/images/landing/clover.png', alt: 'Clover', className: 'left-[350px] top-[200px] h-5 w-5 opacity-90' },
    { src: '/images/landing/clover.png', alt: 'Clover', className: 'left-[340px] top-[220px] h-5 w-5 opacity-90' },
    { src: '/images/landing/star.png', alt: 'Star', className: 'left-[420px] top-[520px] h-7 w-7 opacity-90' },
    { src: '/images/landing/star.png', alt: 'Star', className: 'left-[450px] top-[540px] h-7 w-7 opacity-90' },
    { src: '/images/landing/star.png', alt: 'Star', className: 'left-[480px] top-[560px] h-7 w-7 opacity-90' },
    { src: '/images/landing/star.png', alt: 'Star', className: 'left-[400px] top-[1170px] h-7 w-7 opacity-90' },
    { src: '/images/landing/star.png', alt: 'Star', className: 'left-[360px] top-[1150px] h-7 w-7 opacity-90' },
    { src: '/images/landing/star.png', alt: 'Star', className: 'left-[370px] top-[1120px] h-7 w-7 opacity-90' },
    { src: '/images/landing/flower.png', alt: 'Flower', className: 'left-[-160px] top-[360px] h-12 w-12 opacity-90' },
    { src: '/images/landing/flower.png', alt: 'Flower', className: 'left-[-100px] top-[340px] h-12 w-12 opacity-90' },
    { src: '/images/landing/flower.png', alt: 'Flower', className: 'right-[-160px] top-[800px] h-12 w-12 opacity-90' },
    { src: '/images/landing/flower.png', alt: 'Flower', className: 'right-[-100px] top-[860px] h-12 w-12 opacity-90' },
  ]
  const heroCards: HeroCardProps[] = [
    {
      src: '/images/landing/welcome.png',
      alt: 'Hero image 1',
      initialText: 'welcome',
      hoverText:
        'welcome to the Fashion & Lifestyle Society! We are a fashion society at the University of Western Ontario, Canada. Our mission is to explore the art of fashion through a variety of expressions, including but not limited to styling, photography, videography, creative directing, and journalism.',
      className: 'absolute left-[-170px] top-0 h-[380px] w-[496px]',
    },
    {
      src: '/images/landing/each-year.png',
      alt: 'Hero image 2',
      initialText: 'each year,',
      hoverText:
        'each year, F&LS hosts two charity fashion shows—one in the fall semester and another in the spring semester. The fall show features curated looks from our stylists, and the spring show features handmade clothing, created by our designers.',
      className: 'absolute left-[715px] top-[-380px] h-[834px] w-[525px]',
      textWrapperClassName: 'left-10 top-1/2 -translate-y-1/2',
    },
    {
      src: '/images/landing/we-are.png',
      alt: 'Hero image 3',
      initialText: 'we are',
      hoverText:
        'we are a fashion society at the University of Western Ontario, Canada. Our mission is to explore the art of fashion through a variety of expressions, including but not limited to styling, photography, videography, creative directing, and journalism.',
      className:
        'absolute left-[71px] top-[-550px] h-[516px] w-[324px]',
      textWrapperClassName: 'left-4 top-10',
    },
    {
      src: '/images/landing/join-our-community.JPG',
      alt: 'Join our community',
      initialText: 'join our community',
      hoverText: 'join our community',
      href: INSTAGRAM_URL,
      className:
        'absolute left-[800px] top-[-800px] h-[459px] w-[266px]',
      textSize: 'text-4xl',
      textWrapperClassName: 'left-4 top-20',
      hoverFontClassName: 'font-helveticaBold text-white/50',
      cornerOverlaySrc: '/images/landing/ArrowUpRight.png',
      cornerOverlayAlt: 'Arrow up right',
      cornerOverlayClassName: 'right-3 top-3 h-10 w-10',
    },
  ]

  const galleryImages = [
    '/images/landing/1.jpg',
    '/images/landing/2.jpg',
    '/images/landing/3.jpg',
    '/images/landing/4.jpg',
    '/images/landing/5.jpg',
    '/images/landing/6.jpg',
    '/images/landing/7.jpg',
    '/images/landing/8.jpg',
    '/images/landing/9.JPG',
    '/images/landing/10.jpg',
    '/images/landing/11.JPG',
    '/images/landing/12.JPG',
    '/images/landing/13.JPG',
    '/images/landing/14.JPG',
    '/images/landing/15.JPG',
    '/images/landing/16.JPG',
    '/images/landing/17.JPG',
  ]

  return (
    <div className="bg-black text-white">
      {/* HERO / TOP COLLAGE */}
      <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-10 pt-10">
        {/* Mobile: stacked hero cards */}
        <div className="lg:hidden flex flex-col gap-6">
          {heroCards.map((card) => (
            <div key={card.src} className="relative w-full aspect-[4/5] max-h-[420px] overflow-hidden rounded-sm">
              <HeroCard
                src={card.src}
                alt={card.alt}
                initialText={card.initialText}
                hoverText={card.hoverText}
                href={card.href}
                className="!absolute inset-0 h-full w-full"
                textWrapperClassName={card.textWrapperClassName}
                textSize={card.textSize}
                hoverFontClassName={card.hoverFontClassName}
                cornerOverlaySrc={card.cornerOverlaySrc}
                cornerOverlayAlt={card.cornerOverlayAlt}
                cornerOverlayClassName={card.cornerOverlayClassName}
              />
            </div>
          ))}
          <a
            href="#explore"
            className="inline-flex items-center justify-center gap-2 font-helveticaBold text-sm sm:text-base tracking-[0.2em] text-white/90 transition-colors hover:text-white py-4"
          >
            WE INVITE YOU TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Desktop: absolute-positioned collage */}
        <div className="hidden lg:block relative h-[1500px] w-full">
          {stickers.map((d, idx) => (
            <div key={`${d.src}-${idx}`} className={['pointer-events-none absolute z-10', d.className].join(' ')}>
              <Image src={d.src} alt={d.alt} fill sizes="64px" className="object-contain" />
            </div>
          ))}
          {heroCards.map((card) => (
            <HeroCard
              key={card.src}
              src={card.src}
              alt={card.alt}
              initialText={card.initialText}
              hoverText={card.hoverText}
              href={card.href}
              className={card.className}
              textWrapperClassName={card.textWrapperClassName}
              textSize={card.textSize}
              hoverFontClassName={card.hoverFontClassName}
              cornerOverlaySrc={card.cornerOverlaySrc}
              cornerOverlayAlt={card.cornerOverlayAlt}
              cornerOverlayClassName={card.cornerOverlayClassName}
            />
          ))}
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 pb-2 text-center">
            <a
              href="#explore"
              className="inline-flex items-center gap-3 font-helveticaBold text-base tracking-[0.25em] text-white/90 transition-colors hover:text-white"
            >
              WE INVITE YOU TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION (anchor target) */}
      <section id="explore" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 pb-16 pt-2">
        <div className="mb-6 sm:mb-10 text-center">
          <h2
            className="inline-flex items-center gap-3 font-helveticaBold text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.25em] text-white/90"
          >
          </h2>
        </div>

        {/* Mobile gallery: 2-column grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden bg-black/20 shadow-[0px_10px_40px_rgba(0,0,0,0.35)]"
            >
              <Image
                src={src}
                alt="Gallery image"
                fill
                sizes="50vw"
                className="object-cover opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Desktop/tablet collage */}
        <div className="relative hidden sm:block min-h-[1100px] w-full">
          {[
            { src: '/images/landing/1.jpg', className: 'left-[2%] top-[0%] w-[22%]' },
            { src: '/images/landing/2.jpg', className: 'left-[28%] top-[6%] w-[26%]' },
            { src: '/images/landing/3.jpg', className: 'left-[58%] top-[2%] w-[20%]' },
            { src: '/images/landing/4.jpg', className: 'left-[80%] top-[10%] w-[18%]' },
            { src: '/images/landing/5.jpg', className: 'left-[10%] top-[28%] w-[28%]' },
            { src: '/images/landing/6.jpg', className: 'left-[42%] top-[30%] w-[22%]' },
            { src: '/images/landing/7.jpg', className: 'left-[68%] top-[34%] w-[24%]' },
            { src: '/images/landing/8.jpg', className: 'left-[4%] top-[68%] w-[24%]' },
            { src: '/images/landing/9.JPG', className: 'left-[26%] top-[58%] w-[30%]' },
            { src: '/images/landing/10.jpg', className: 'left-[60%] top-[60%] w-[22%]' },
            { src: '/images/landing/11.JPG', className: 'left-[8%] top-[80%] w-[26%]' },
            { src: '/images/landing/12.JPG', className: 'left-[0%] top-[25%] w-[22%]' },
            { src: '/images/landing/13.JPG', className: 'left-[75%] top-[55%] w-[24%]' },
            { src: '/images/landing/14.JPG', className: 'left-[82%] top-[85%] w-[24%]' },
            { src: '/images/landing/15.JPG', className: 'left-[10%] top-[10%] w-[24%]' },
            { src: '/images/landing/16.JPG', className: 'left-[25%] top-[45%] w-[24%]' },
            { src: '/images/landing/17.JPG', className: 'left-[50%] top-[50%] w-[24%]' },
          ].map(({ src, className }) => (
            <div
              key={src}
              className={[
                'absolute overflow-hidden bg-black/20 shadow-[0px_10px_40px_rgba(0,0,0,0.35)]',
                className,
              ].join(' ')}
            >
              <Image src={src} alt="Gallery image" width={900} height={1200} className="h-auto w-full object-cover opacity-50" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

