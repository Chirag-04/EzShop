"use client"
import { url } from 'inspector'
import Image from 'next/image'
import React, { useState } from 'react'
 
// const images = [
//   {
//     id:1,
//     url:"https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },

//   {
//     id:2,
//     url:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600"
//   },


//   {
//     id:3,
//     url:"https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },


//   {
//     id:4,
//     url:"https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&w=600"
//   },
// ]
const ProductImages = ({items} : {items : any}) => {
  const [index ,setIndex] = useState(0);
  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
        src={items[index].image?.url}
        alt=''
        fill
        sizes='50vw'
        className='object-cover rounded-md'
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
         {items.map((item : any, i:number)=>(
          <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id}
          onClick={() => setIndex(i)}>
            <Image
            src={item.image?.url}
            alt=''
            fill
            sizes='30vw'
            className='object-cover rounded-md'
            />
          </div>
         ))}
      </div>
    </div>
  )
}

export default ProductImages
 