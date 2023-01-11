import React from 'react'
import SocialLinks from '../SoclaLinks'
import PublicMetaDataCard from './PublicMetaDataCard'
export default function NftMetaDataCard() {
  return (
      <>
    <div className='bg-[#ddd] mt-4 rounded-lg p-4'>
       <div className='flex items-center justify-between font-bold'>
         <span className='bg-[#666] p-1 rounded-lg '>whitelist 1</span>
        <p className='text-[#DD3367]'>ENDED</p>

       </div>

       <ul className='mt-6 flex font-semibold space-x-8'>
           <li className='uppercase'>WhiteList 789.</li>
           <li className='uppercase'>Max Token 100.</li>
           <li className='uppercase'>Price 267 NEAR</li>
       </ul>
       
    </div>
    <div className='bg-[#ddd] mt-4 rounded-lg p-4'>
       <div className='flex items-center justify-between font-bold'>
         <span className='bg-[white] p-1 rounded-lg '>whitelist 2</span>
         <div className='flex items-center space-x-2'>
            <p className='text-[#DD3367]'>ENDS IN</p>
            <span className='bg-[white] p-1 rounded-lg text-[#DD3367]'>00:15:01:06</span>
         </div>
        

       </div>

       <ul className='mt-6 flex font-semibold space-x-8'>
           <li className='uppercase'>WhiteList 789.</li>
           <li className='uppercase'>Max Token 100.</li>
           <li className='uppercase'>Price 267 NEAR</li>
       </ul>
       
    </div>
    <PublicMetaDataCard/>
    <SocialLinks twitter={{link:"",likes:"42k"}} website="" discord='' watchCount='21k'/>
    <button className='bg-[#ccc] w-full text-center mt-16 py-4 font-semibold rounded-lg'>See Collection <svg
    className='inline ml-2'
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#2F2F2F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.7"
        strokeWidth="2"
        d="M19 12v5a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h5m3.5 7.5L19 1l-7.5 7.5zM14 1h5v5l-5-5z"
      ></path>
    </svg></button>
    </>
  )
}
