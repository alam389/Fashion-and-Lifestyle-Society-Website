import Image from 'next/image'
import LatestArticlesSidebar from './LatestArticlesSidebar'

export interface ArticleContent {
  type: 'paragraph' | 'subheading'
  text: string
}

export interface Article {
  slug: string
  title: string
  category: 'CULTURE' | 'FASHION' | 'BEAUTY' | 'MUSIC' | 'ZINE'
  author: string
  date: string
  heroImage: string
  heroImageCaption?: string
  content: ArticleContent[]
}

interface LatestArticle {
  slug: string
  image: string
  category: string
  title: string
  author: string
  alt: string
}

interface ArticleLayoutProps {
  article: Article
  latestArticles: LatestArticle[]
}

export default function ArticleLayout({ article, latestArticles }: ArticleLayoutProps) {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[83px] pt-[50px] pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[88px]">
          {/* Main Article Content - Left Column */}
          <div className="flex-1 max-w-[776px]">
            {/* Breadcrumb */}
            <p
              className="text-white text-3xl font-light mb-2"
              style={{ fontFamily: 'var(--font-helvetica-light)' }}
            >
              VOLTA / {article.category}
            </p>
            
            {/* Title */}
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4"
              style={{ fontFamily: 'var(--font-didot)' }}
            >
              {article.title}
            </h1>
            
            {/* Author */}
            <p
              className="text-white text-xl font-light mb-2"
              style={{ fontFamily: 'var(--font-helvetica-light)' }}
            >
              By {article.author}
            </p>
            
            {/* Date */}
            <p
              className="text-white text-base font-light mb-6"
              style={{ fontFamily: 'var(--font-helvetica-light)' }}
            >
              {article.date}
            </p>
            
            {/* Hero Image */}
            <div className="relative w-full aspect-[776/578] mb-4">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 776px"
              />
            </div>
            
            {/* Hero Image Caption */}
            {article.heroImageCaption && (
              <p
                className="text-white text-base font-light leading-9 mb-8"
                style={{ fontFamily: 'var(--font-helvetica-oblique)' }}
              >
                {article.heroImageCaption}
              </p>
            )}
            
            {/* Article Content */}
            <div className="space-y-6">
              {article.content.map((item, index) => {
                if (item.type === 'subheading') {
                  return (
                    <h2
                      key={index}
                      className="text-white text-3xl font-bold leading-9"
                      style={{ fontFamily: 'var(--font-helvetica-bold)' }}
                    >
                      {item.text}
                    </h2>
                  )
                }
                return (
                  <p
                    key={index}
                    className="text-white text-xl font-light leading-9"
                    style={{ fontFamily: 'var(--font-helvetica-light)' }}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                )
              })}
            </div>
          </div>
          
          {/* Sidebar - Right Column - sticky so it stays visible while scrolling */}
          <div className="lg:w-[384px] lg:flex-shrink-0 lg:self-start lg:sticky lg:top-[50px]">
            <LatestArticlesSidebar articles={latestArticles} />
          </div>
        </div>
      </div>
    </div>
  )
}
