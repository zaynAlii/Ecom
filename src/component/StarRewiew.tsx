import React from 'react'
import { FaStar } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"
const StarRewiew = ({ star }: { star: any }) => {
  const { stars, reviews } = star;
  // let StarArray: string[] = ["", "", "", "", ""]
  let StarArray;
  StarArray=Array.from({length:5},(ele,i)=>
  {
    let number=i+0.5;
    return (
        <span key={i}>
              {stars >= i + 1 ? ( <FaStar/>) : stars >=number ? (<BsStarHalf/>) :( <AiOutlineStar/> )}
        </span>
    )

  })

  // let newStars;
  // if (stars >= 1 && stars < 1.5) {
  //   StarArray.map((star, i) => {

  //     if (i == 0) {
  //       return <FaStar  key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 1 && stars == 1.5) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i == 0) {
  //       return <FaStar key={i}/>
  //     }
  //     else if (i == 1) {
  //       return <BsStarHalf  key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar />
  //     }
  //   })
  // }
  // if (stars >= 2 && stars < 2.5) {
  //   newStars = StarArray.map((star, i) => {

  //     if (i <= 1) {
  //       return <FaStar key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar  key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 2 && stars == 2.5) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i <= 1) {
  //       return <FaStar key={i}/>
  //     }
  //     else if (i == 2) {
  //       return <BsStarHalf key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 2.5 && stars < 3) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i <= 1) {
  //       return <FaStar key={i}/>
  //     }
  //     else if (i == 2) {
  //       return <BsStarHalf key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 3 && stars < 3.5) {
  //   newStars = StarArray.map((star, i) => {

  //     if (i <= 2) {
  //       return <FaStar key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 3 && stars == 3.5) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i <= 2) {
  //       return <FaStar key={i}/>
  //     }
  //     else if (i == 3) {
  //       return <BsStarHalf key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 3.5 && stars < 4) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i <= 2) {
  //       return <FaStar />
  //     }
  //     else if (i == 3) {
  //       return <BsStarHalf key={i}/>
  //     }
  //     else {
  //       return <AiOutlineStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 4 && stars < 4.5) {
  //   newStars = StarArray.map((star, i) => {

  //     if (i == 4) {
  //       return <AiOutlineStar key={i}/>
  //     }
  //     else {
  //       return <FaStar key={i}/>
  //     }
  //   })
  // }
  // if (stars >= 4 && stars == 4.5) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i <= 3) {
  //       return <FaStar key={i}/>
  //     }
  //     else {
  //       return <BsStarHalf key={i}/>
  //     }

  //   })
  // }
  // if (stars >= 4.5 && stars < 5) {
  //   newStars = StarArray.map((star, i) => {
  //     if (i <= 3) {
  //       return <FaStar key={i}/>
  //     }
  //     else {
  //       return <BsStarHalf key={i}/>
  //     }

  //   })
  // }

  // if (stars == 5) {
  //   newStars = StarArray.map((star, i) => <FaStar key={i}/>
  //   )
  // }
  return (
    <div
      className=''>
      <div className='flex gap-2 my-4 text-yellow-400' >{StarArray}</div>
      <h1>
        ({reviews} Customer Rewiews)
      </h1>
    </div>
  )
}

export default StarRewiew