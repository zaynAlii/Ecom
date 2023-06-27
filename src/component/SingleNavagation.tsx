import React from 'react'
import Link from 'next/link'
const SingleNavagation = ({tittle}:{tittle:string}) => {
  return (
    <div className=' bg-slate-900 text-white p-5 mb-4 text-xl '>
          <Link className='hover:underline text-lime-400 ' href="/">Home  </Link> / <span className='text-[10px]'> {tittle}</span>      
    </div>
  )
}

export default SingleNavagation