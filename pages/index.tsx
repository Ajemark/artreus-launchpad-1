import Head from 'next/head'
import Image from 'next/image'
import { Inter, Tapestry } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LikeButton from '../components/Homepage/LikeButton'
import LiveNftCard from '../components/Homepage/LiveNftCard'
import EndedNftCard from '../components/Homepage/EndedNftCard'
import Title from '../components/Homepage/Title'
import UpcomingNftCard from '../components/Homepage/UpcomingNftCard'
import {Tab} from '@headlessui/react'
import FeaturedNfts from '../components/Homepage/FeaturedNfts'
import React from 'react'
export default function Home() {
  const nfts= [0,0,0,0]
  
  const featuredNfts:FeaturedNft[]=[
    {
      name:"Super Cool World",
      description:`Nina Chanel’s Super Cool World is a collection of 5,080 NFTs (non-fungible tokens) that are made up of hundreds of traits designed by Nina
       Chanel Abney that reflect her frenetic collage-like approach to visual media.`,
      imageUrl:"https://openseauserdata.com/files/8d9f9dc8ed913e52052301f0d59515e8.png",
      littleImageUrl:"https://looksrare.mo.cloudinary.net/0xB852c6b5892256C264Cc2C888eA462189154D8d7/0xd2327da5643a4d18e7e46942576e4378f4c0066b3394c139bdc2ffac26640940?resource_type=image&f=auto&c=limit&w=360&q=auto"
    },
    {
      name:"MNLTHRVLD",
      description:`TFKT, together with Nike, introduces the first RTFKT x NIKE CRYPTOKICKS NFT: 
      The RTFKT X NIKE DUNK GENESIS CRYPTOKICKS Sneaker Powered by DRM OS and Skin Vial Tech.`,
      littleImageUrl:"https://looksrare.mo.cloudinary.net/0x7f2E7C52217C8c333f24e2fe2EB371D5eE9669a3/0x08fc33e7f75839ab315c16d85a229f5b16391a6f56b649cfe31eed7c3f4721fc?resource_type=image&f=auto&c=limit&w=360&q=auto",
      imageUrl:"https://lh3.googleusercontent.com/bb9Z1Ldv6zTgZI1wI962RE_M_k7-595wr3a1Jgjsw1jx2MZf0FvV4uO4eEcA7LnDvLM-hAnazAgJIzAPMDo7sPKFIMvGOxpQ3mMEzmA=s2500"
    },
    {
      name:"Factura by Mathias Isaksen",
      description:`gm. studio presents 'Factura' by Mathias Isaksen, a generative series exploring the monolithic and minute.`,
      imageUrl:"https://openseauserdata.com/files/89eef3a48ea1a2c54158bcd7c97bdd4f.png",
      littleImageUrl:"https://looksrare.mo.cloudinary.net/0x4Ef3D9EaB34783995bc394d569845585aC805Ef8/0x4f59e19a0a20536044279f58ad0f44e9e3a2b9fb733c6b811219b9ce9f84fd13?resource_type=image&f=auto&c=limit&w=360&q=auto"
    },
    {
      name:"The Currency",
      description:`ENI is delighted to present The Currency, the first NFT collection by Damien Hirst. Reimagining the way NFTs are used, The Currency is a collection of 10,000 NFTs which correspond to 10,000 unique physical artworks which are stored in a secure vault in the UK. 
      The works are now brought to life through their launch on the blockchain.`,
      littleImageUrl:"https://looksrare.mo.cloudinary.net/0x9efAe25f19a633BEca03C799aB6Fb5Da1766559C/0x4240f4576b1a50417f882d1a769a094f77e96168f71e44af41b21622de118e58?resource_type=image&f=auto&c=limit&w=360&q=auto",
      imageUrl:"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa/avatar/QmaKSftwoc9mh29RK2Z8QrX8fEostfghuYojvaMe2A1Cck"
    }
  ]
  return (
    <>
    <FeaturedNfts featuredNfts={featuredNfts}/>
  <Tab.Group>
    <Tab.List as="div" className='flex font-extrabold text-xl p-2 md:text-5xl  my-4  md:my-6 space-x-4 md:space-x-10'>
      <Tab as={React.Fragment}>
      {({selected})=>(
        <button className={selected?'text-brandyellow border-b-4 border-brandpurple':"text-[#ccc]"}>Live</button>
      )}</Tab>
      <Tab as={React.Fragment}>
      {({selected})=>(
        <button className={selected?'text-brandyellow border-b-4 border-brandpurple':"text-[#ccc]"}>Free Mint</button>
      )}</Tab>
     
    </Tab.List>
    <Tab.Panels>
     <Tab.Panel className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4  p-2'>
       {Array(5).fill(0).map((_,index)=>(
        <LiveNftCard key={index} imageUrl="/nft.png" name="SmallBrosNft" id="3033" price="300"/>
        ))}</Tab.Panel>
        <Tab.Panel className='grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4  p-2'>
       {Array(4).fill(0).map((_,index)=>(
        <LiveNftCard key={index} imageUrl="/nft.png" name="SmallBrosNft" id="3033" price="300"/>
        ))}</Tab.Panel>
   </Tab.Panels>
  </Tab.Group>
   
    
    <Title>Ended</Title>
    <div className='flex flex-wrap justify-center gap-x-1 gap-2 md:gap-y-8'>
        {Array(10).fill(0).map((_,index)=>(
        <EndedNftCard key={index} imageUrl="/nft.png" name="SmallBrosNft"  />
        ))}
    </div>

    <Title>Upcoming Nfts</Title>
    <div className='flex flex-wrap justify-center gap-x-1 gap-y-4 md:gap-y-8'>
        {Array(5).fill(0).map((_,index)=>(
        <UpcomingNftCard key={index} imageUrl="/nft.png" name="SmallBrosNft" id="3033" price="300"/>
        ))}
    </div>
    
    </>
  )
}
