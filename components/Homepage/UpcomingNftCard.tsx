import React from 'react'
import Image from 'next/image';
import LikeButton from './LikeButton';


type props={
    name:string,
    id:string,
    imageUrl:string,
    price:string
 }
export default function LiveNftCard(props:props) {
  return (
    <div className='w-[180px] md:w-[250px]  block '>
    <Image alt="nft" src={props.imageUrl} className='w-full rounded-t-lg' width={250} height={250}/>
    <div className='bg-brandpurple p-4   font-semibold text-white rounded-b-lg '>
      <div className='flex justify-between w-full'>
          <div>
          <h3 className='text-[#bebdbd] uppercase'>item {props.id}</h3>
          <h4>{props.name}</h4>
          </div>
        
          <LikeButton liked={false} />
     </div>

     <div className='flex justify-between items-center mt-4'>

       <p className='text-[#FE4794]'>13d 14hrs 30min</p>

        <h5>
            {props.price} NEAR
        </h5>

     </div>
     

      </div>
     
    
  </div>
  )
}

