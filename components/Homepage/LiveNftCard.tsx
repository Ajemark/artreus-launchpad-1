import React from 'react'
import Image from 'next/image';
import LikeButton from './LikeButton';

const Circle=()=>{
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        viewBox="0 0 12 12"
        className='ml-2'
      >
        <circle cx="6" cy="6" r="6" fill="#33DD58"></circle>
      </svg>
    )
}
type props={
    name:string,
    id:string,
    imageUrl:string,
    price:string
 }
export default function LiveNftCard(props:props) {
  return (
    <div className='w-[170px] md:w-[250px]  block '>
    <img alt="nft" src={props.imageUrl} className='w-full rounded-t-lg' />
    <div className='bg-brandpurple p-4   font-semibold text-white rounded-b-lg '>
      <div className='flex justify-between w-full'>
          <div>
          <h3 className='text-[#bebdbd] uppercase'>item {props.id}</h3>
          <h4>{props.name}</h4>
          </div>
        
          <LikeButton liked={false} />
     </div>

     <div className='flex justify-between items-center mt-4'>

        <div className='flex items-center '>
            <p className='text-[#33DD58]'>LIVE</p>
            <Circle/>
            
        </div>

        <h5>
            {props.price} NEAR
        </h5>

     </div>
     

      </div>
     
    
  </div>
  )
}
