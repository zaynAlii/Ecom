import React from 'react'
import Image from 'next/image'
const Trusted = () => {
  return (
    
        <section className='my-24 ' >
            <h1 className=' text-center text-sm text-purple-500  mb-10' >Trusted by 1000+ Companies</h1>
            <div className='flex justify-around w-4/5 mx-auto'>
                   <Image
                    src="/images/trusted/app.jpg"
                    alt='APP'
                    width={400}
                    height={400}
                    className='w-[70px] rounded-full h-[70px] object-cover
                     '
                  />  
                   <Image
                    src="/images/trusted/sam.jpg"
                    alt='APP'
                    width={400}
                    height={400}
                    className='w-[70px] rounded-full h-[70px] object-cover
                     '
                  />  
                   <Image
                    src="/images/trusted/oppo.jpeg"
                    alt='APP'
                    width={400}
                    height={400}
                    className='w-[70px] rounded-full h-[70px] object-cover
                     '
                  />  
                   <Image
                    src="/images/trusted/hawai.png"
                    alt='APP'
                    width={400}
                    height={400}
                    className='w-[70px] rounded-full h-[70px] object-cover
                     '
                  />  
            </div>
        </section>
    
  )
}

export default Trusted