import React from 'react'

export default function PublicMetaDataCard() {
  return (
    <>
   
    <div className='bg-[#ddd] mt-4 rounded-lg p-4'>
       <div className='flex items-center justify-between font-bold'>
         <span className='bg-[white] p-1 rounded-lg '>Public</span>
         <div className='flex items-center space-x-2'>
            <p className='text-[#DD3367]'>STARTS IN</p>
            <span className='bg-[white] p-1 rounded-lg text-[#DD3367]'>00:15:01:06</span>
         </div>
        

       </div>

       <ul className='mt-6 flex font-semibold space-x-8'>
           <li className='uppercase'>Unlimited.</li>
           <li className='uppercase'>Price 100 Near.</li>
       </ul>
       
    </div>
    </>
  )
}
