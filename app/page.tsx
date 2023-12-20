import FoundersMessageSection from '@/components/FoundersMessageSection'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'

// const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
// const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false })
// const FoundersMessageSection = dynamic(() => import('@/components/FoundersMessageSection'), { ssr: false })
// const Team = dynamic(() => import('@/components/Team'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero/>
      <Portfolio/>
      <FoundersMessageSection/>
      {/* <Team/> */}
    </>
  )
}
