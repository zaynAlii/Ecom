import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = ({ name }: { name: string }) => {
  return (
    <div>
      <section className="  text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-sm text-purple-500   ">
              Welcome to
            </h1>
            <h1 className="title-font text-2xl  tracking-[1px] font-extrabold mt-5 ">
              {name}
            </h1>
            <p className="mb-8 leading-relaxed mt-3 ">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
              chambray.
            </p>
            <div className="flex justify-center">
              <Link href="./Product/"> <button className="inline-flex text-white  bg-purple-500 border-0 py-2 px-7 focus:outline-none hover:bg-purple-600 rounded text-lg">
                shop Now
              </button> </Link>

            </div>
            {/* <div className='  lg:self-start lg:left-[890px] top-20  lg:w-[20%]    lg:z-[-1] lg:h-[30%] lg:bg-purple-500 lg:absolute'>
                </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/hero/hero.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>


    </div>
  )
}

export default Hero