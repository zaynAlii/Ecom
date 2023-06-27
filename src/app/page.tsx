import Image from 'next/image'
import Hero from '@/component/Hero'
import Services from '@/component/Services'
import Trusted from '@/component/Trusted'
import FeaturedProducts from '@/component/FeaturedProducts'
export default function Home() {
  return (
       <div>
              <Hero name={"Z@!N Store"}/>
              <FeaturedProducts/>
              <Services/>
              <Trusted/>
       </div>
  )
}
