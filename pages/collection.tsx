import React from 'react'
import Image from 'next/image'
import NftMetaDataCard from '../components/collectionPage/NftMetaDataCard';
import TotalMinted from '../components/collectionPage/TotalMinted';
import TeamInfo from '../components/collectionPage/TeamInfo';

export default function Collection() {
  const bannerImage='/smallbrosbanner.png';
  return (
    <div className='p-4'>
    <div className='md:flex md:space-x-8'>
      
      <div className='md:w-1/2'  >
        <div className='p-32 md:p-64 ' style={{backgroundImage:`url(${bannerImage})`,backgroundSize:'cover'}}></div>
        <TotalMinted amountMinted={100} totalMinted={1000}/>
      </div>
       
      <div>
       <h2 className='text-brandpurple text-2xl md:text-5xl font-extrabold w-[10ch] my-6'>Small Bros Nft</h2>
              <p>Advised by the former Head of Twitter Gaming and Sport, we are 
        launching the worlds first ever NFTs as Esports Teams, allowing 
        holders to start and grow their own Esports teams, earn $USDC 
        from them and then auction them for a multiplier of the earning 
        potential just like a business.</p>
        <NftMetaDataCard/>

      </div>
     
    </div>
    <section className='md:flex  justify-between border-t-2 border-[#ccc] mt-12 pt-12'>
   
      <TeamInfo/>
      <div className='md:pr-15'>
        <h3 className='text-xl mt-2 md:text-3xl font-bold text-center'>Small Bros Nft</h3>
        <div className='flex justify-center space-x-4'>
          <button className='bg-brandpurple text-brandyellow uppercase py-2 px-8 font-semibold rounded-lg'>dozzed</button>
          <button className='bg-brandpurple text-brandyellow uppercase py-2 px-8 font-semibold rounded-lg'>escrow 7d</button>
        </div>
        <p className='md:w-[60ch] mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis at, dolorum accusantium sunt dolore architecto neque, asperiores natus, fuga deserunt quo voluptatibus rem in laboriosam atque debitis repellat commodi aut.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis at, dolorum accusantium sunt dolore architecto neque, asperiores natus, fuga deserunt quo voluptatibus rem in laboriosam atque debitis repellat commodi aut.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis at, dolorum accusantium sunt dolore architecto neque, asperiores natus, fuga deserunt quo voluptatibus rem in laboriosam atque debitis repellat commodi aut.
        </p>
      </div>
    </section>
    </div>
    
  )
}
