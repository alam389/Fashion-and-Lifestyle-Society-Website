import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  image: string
}

// Placeholder data - replace with actual team member data
const creativeTeam: TeamMember[] = [
  { name: 'Erika Smithson', role: 'VP Creative', image: '/images/meet-the-team/photos/ErikaSmithson.png' },
  { name: 'Aarushi Gupta', role: 'President', image: '/images/meet-the-team/photos/AarushiGupta.png' },
  { name: 'Sebastian Glen', role: 'VP Admin', image: '/images/meet-the-team/photos/SebastianGlen.png' },
  { name: 'Chelsea Ngungu', role: 'Fall Show Director', image: '/images/meet-the-team/photos/ChelseaNgungu.png' },
  { name: 'Emma Felske', role: 'Spring Show Director', image: '/images/meet-the-team/photos/EmmaFelske.png' },
  { name: 'Fionn Carter', role: 'Head Designer', image: '/images/meet-the-team/photos/FionnCarter.png' },
  { name: 'Vivian Shen', role: 'Head Womenswear Stylist', image: '/images/meet-the-team/photos/VivianShen.png' },
  { name: 'Sammy Suarez', role: 'Head Menswear Stylist', image: '/images/meet-the-team/photos/SammySuarez.png' },
  { name: 'Alexis Sutherland', role: 'Model Manager', image: '/images/meet-the-team/photos/AlexisSutherland.png' },
  { name: 'Munahid Shakil', role: 'Model Manager', image: '/images/meet-the-team/photos/MunahidShakil.png' },
  { name: 'Laura Clavijo', role: 'Hair and Makeup', image: '/images/meet-the-team/photos/LauraClavijo.png' },
  { name: 'Kendra Jackson', role: 'Photos and Videos', image: '/images/meet-the-team/photos/KendraJackson.png' },
  { name: 'Alexia Boyagian', role: 'VOLTA Co-editor in Chief', image: '/images/meet-the-team/photos/AlexiaBoyagian.png' },
  { name: 'Maya Jangin', role: 'VOLTA Co-editor in Chief', image: '/images/meet-the-team/photos/MayaJangin.png' },
]

const adminTeam: TeamMember[] = [
  { name: 'Bridget Shin', role: 'VP Communications', image: '/images/meet-the-team/photos/BridgetShin.png' },
  { name: 'Faez Yousuf', role: 'VP Events', image: '/images/meet-the-team/photos/FaezYousuf.png' },
  { name: 'Urvaan Saher', role: 'VP Finance', image: '/images/meet-the-team/photos/UrvaanSaher.png' },
  { name: 'Anthony Lam', role: 'IT Manager', image: '/images/meet-the-team/photos/AnthonyLam.png' },
  { name: 'Kamraan Ahmad', role: 'VP Sponsorship', image: '/images/meet-the-team/photos/KamraanAhmad.png' },
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="group border border-black relative w-full aspect-[480/555] overflow-hidden @container"
      style={{ containerType: 'inline-size' }}
    >
      {/* Photo */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      
      {/* Gradient band anchored at bottom; height grows on hover */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none transition-[height] duration-500 ease-out h-[22.5%] group-hover:h-[30%]"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.95) 100%)`
        }}
      />

      {/* Content: text and icons, icons fade/slide in on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center pt-4 px-4"
        style={{ paddingBottom: 'clamp(0.5rem, 1.5vw, 1.5rem)' }}
      >
        <div className=" transition-transform duration-300 ease-out group-hover:-translate-y-[12cqw]">
          <p
            className="text-white font-helveticaBold tracking-wide -mb-2"
            style={{ fontSize: 'clamp(0.875rem, 9cqw, 2.25rem)' }}
          >
            {member.name}
          </p>
          <p
            className="text-white font-helvetica -mb-2"
            style={{ fontSize: 'clamp(0.75rem, 4cqw, 1.625rem)' }}
          >
            {member.role}
          </p>
        </div>

        {/* Icons - absolute so they don't add space below text; scale with card (cqw) like text; slide up on hover */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-[min(4rem,8cqw)] translate-y-[120%] transition-transform duration-300 ease-out group-hover:translate-y-0 pb-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="relative flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            style={{ width: 'clamp(1.5rem, 10cqw, 3.5rem)', height: 'clamp(1.5rem, 10cqw, 3.5rem)' }}
          >
            <Image
              src="/images/meet-the-team/icons/InBug-White.png"
              alt="LinkedIn"
              fill
              className="object-contain"
              sizes="48px"
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="relative flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
            style={{ width: 'clamp(1.5rem, 10cqw, 3.5rem)', height: 'clamp(1.5rem, 10cqw, 3.5rem)' }}
          >
            <Image
              src="/images/meet-the-team/icons/Instagram_Glyph_White.png"
              alt="Instagram"
              fill
              className="object-contain"
              sizes="48px"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MeetTheTeam() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Hero Banner - Fixed and fills viewport */}
      <section className="fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center text-center z-[5] pointer-events-none">
        <div className="w-full px-[1.875rem]">
          <div className="w-full">
            <span
              className="block w-full font-bold text-white leading-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-helvetica-bold)', fontSize: 'clamp(4rem, 15vw, 16rem)' }}
            >
              THE TEAM
            </span>
            <span
              className="block w-full font-bold text-white leading-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-helvetica-bold)', fontSize: 'clamp(4rem, 15vw, 16rem)' }}
            >
              BEHIND FLS
            </span>
          </div>
        </div>
      </section>

      {/* Content Sections - Scroll over banner */}
      <div className="relative z-10">
        {/* Spacer to push content below viewport initially */}
        <div className="h-screen" />
        
        {/* First three team member cards */}
        <section className="px-[1.875rem] pt-0 pb-0 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {creativeTeam.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
        
        {/* Creative Team Section */}
        <section className="px-[1.875rem] pt-0 pb-0 bg-black">
          <h2
            className="font-bold text-center mb-2 text-white tracking-normal"
            style={{ fontFamily: 'var(--font-helvetica-bold)', fontSize: 'clamp(2.5rem, 6vw, 10rem)' }}
          >
            Creative Team
          </h2>
          
          {/* Remaining Team Member Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {creativeTeam.slice(3).map((member, index) => (
              <TeamMemberCard key={index + 3} member={member} />
            ))}
          </div>
        </section>

        {/* Admin Team Section */}
        <section className="px-[1.875rem] pt-0 pb-0 bg-black">
          <h2
            className="font-bold text-center mb-2 text-white tracking-normal"
            style={{ fontFamily: 'var(--font-helvetica-bold)', fontSize: 'clamp(2.5rem, 6vw, 10rem)' }}
          >
            Admin Team
          </h2>
          
          {/* Team Member Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {adminTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}