import React from 'react'
import Image from 'next/image';
import LikeButton from './LikeButton';

type props={
    name:string,
    imageUrl:string,
 }
export default function EndedNftCard(props:props) {
  return (
    <div className='w-[180px] md:w-[250px]  block '>
    <Image alt="nft" src={props.imageUrl} className='w-full rounded-t-lg' width={250} height={250}/>
    <div className='bg-brandpurple p-4   font-semibold text-white rounded-b-lg '>
      <div className='flex justify-between w-full'>
          <div>
          <h3 className='text-[#bebdbd] font-bold'>{props.name}</h3>
          <h4 className='text-[#FE4794]'>SOLD OUT</h4>
          </div>
        
          <LikeButton liked={false} />
     </div>

     <div className=' mt-4 md:inline-flex justify-between items-center '>

       <button className='font-normal rounded-lg inline-flex items-center  whitespace-nowrap text-brandyellow p-1 border-2 border-brandyellow'>secondary market <svg
       className='ml-2 '
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      fill="none"
      viewBox="0 0 18 17"
    >
      <path
        fill="#FACD49"
        d="M1.125 9.642h13.342l-4.083 4.982a1.149 1.149 0 00-.256.837c.028.302.172.58.402.775a1.115 1.115 0 001.586-.149l5.625-6.856c.038-.055.072-.112.102-.172 0-.057.056-.091.078-.148A1.16 1.16 0 0018 8.499a1.16 1.16 0 00-.079-.411c0-.057-.056-.092-.078-.149a1.374 1.374 0 00-.102-.171L12.116.91A1.128 1.128 0 0011.25.5a1.114 1.114 0 00-.997.61 1.157 1.157 0 00.13 1.264l4.085 4.983H1.124c-.298 0-.585.12-.795.334a1.152 1.152 0 000 1.616c.21.215.497.335.795.335z"
      ></path>
    </svg></button>

        <span className='block'>
           NEAR
        </span>

     </div>
     

      </div>
     
    
  </div>
  )
}
