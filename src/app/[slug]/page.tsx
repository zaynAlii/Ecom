import React from 'react'
import Link from 'next/link'
type pro={
   slug:string;
}
const error = ({params}:{params:pro}) => {
  return (
    <div>


      <section className='p-28 bg-slate-600 my-10'>
        <h1 className='text-2xl mb-8'> 404  Error No page Found</h1>
        <h1 className='text-2xl mb-8 text-gray-200'> Did you Mean {params.slug}</h1>
        <Link href="/" className="inline-flex text-white  bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Home
        </Link>



      </section>


    </div>
  )
}

export default error