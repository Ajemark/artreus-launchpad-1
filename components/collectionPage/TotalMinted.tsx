import React from 'react'
const PercentageBar=({percent}:{percent:number})=>{
  return(
    <div className='w-full p-1 rounded-full ' style={{background:`linear-gradient(to right,#FFB300 ${percent}%,#5D50C6 ${percent}%)`}}></div>
  )
}

export default function TotalMinted({amountMinted,totalMinted}:{amountMinted:number,totalMinted:number}) {
  const percent=(amountMinted / totalMinted) * 100;
  return (
    <div className='border-2 border-[#ccc] p-2  mt-4 rounded-lg'>
        <div className='flex uppercase justify-between font-bold'>
            <h3> Total Minted</h3><h3>{percent}% ({amountMinted}/{totalMinted})</h3>
           

           
        </div>
       <PercentageBar percent={10}/>
        <div className='bg-brandpurple px-2 md:px-4 py-4 md:py-10 mt-6 md:mt-12 rounded-lg flex space-x-2 md:space-x-0 md:justify-between'>
            <button className='bg-brandyellow  whitespace-nowrap p4 text-brandpurple font-bold py-2 px-2 md:px-6 rounded-lg'>Wallet not Connected</button>
            <button className='bg-white/70 p4  whitespace-nowrap  font-bold py-2 px-2 md:px-6 rounded-lg'>Buy With  NEAR</button>

        </div>
       
    </div>
  )
}
