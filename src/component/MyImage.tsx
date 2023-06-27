import React from 'react'
import { useState } from 'react';
const MyImage = ({ img = [{ url: "" }] }: { img: any }) => {
    // console.log("img",img);
    const [showmain, setmain] = useState(img[0]?.url);
    return (
        <div className='flex gap-5 '>

            <div className='flex flex-col gap-3'>
                {img.map((img: any,i:number) => {
                    return (
                        <img
                            key={i}
                            onMouseOver={() => setmain(img.url)}
                            src={img.url}
                            alt={img.filename}
                            width={200}
                            height={200}
                        />
                    )
                })}
            </div>

            <div className='self-center'>
                <img src={showmain} alt="" height={500} width={500} />
            </div>

        </div>
    )
}

export default MyImage