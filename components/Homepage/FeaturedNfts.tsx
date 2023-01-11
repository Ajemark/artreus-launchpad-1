import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'
export type FeaturedNft={
  name:string,
  description:string,
  imageUrl:string,
  littleImageUrl:string,
}
type props ={
  featuredNfts:FeaturedNft[]
}
export default function FeaturedNfts({featuredNfts}:props) {
  const size=useWindowSize()
  
  const router=useRouter();
  const current=React.useRef(0)
  const [currentIndex,setCurrentIndex]=React.useState(0)
  
  
  React.useEffect(()=>{

  const interval=  setInterval(function(){
      
    
    
    
    if(current.current >= featuredNfts.length){
     
     current.current =0
     setCurrentIndex(current.current)
     
    }
  
    
    
    current.current=current.current + 1 
    setCurrentIndex(current.current + 1)

    
    
       
    },4500)
    
    return ()=> clearInterval(interval)

  },[])
  return (
    <>
  
   {featuredNfts.map(({name,imageUrl,description,littleImageUrl},index)=>(
      <div key={index} className={`flex justify-center  md:space-x-6  ${!(index === (currentIndex -2))?'hidden':'visible'} '`}>
     
      {size.width&&size.width>765&&<div className=' w-8/12 md:relative p-4 mb-10 '>
    

    <img  src={`${imageUrl}`} className='opacity-90 md:absolute -z-10 w-full h-full rounded-t-2xl '/>
    <div className='p-6 pl-16'>
    <h1 className="text-2xl md:text-4xl font-extrabold  mb-5 md:w-[10ch]">{name}</h1>
    <p className=' md:w-[50ch]'>{description}</p>
<button className='  bg-brandyellow text-brandpurple font-extrabold py-2 px-6 rounded mt-10' >Go to Launchpad</button>
  </div>
  </div>}
        
       
        <img src={`${littleImageUrl}`} className='ml-4   h-full rounded-t-2xl object-cover '/>
      
       
  </div>  
   ))}
  <div className='invisible md:visible my-5 flex space-x-2 justify-center'>
   
    {featuredNfts.map((_,index)=>(<div key={index} className={`w-[50px] p-1 ${!(index === (currentIndex -2))?'bg-[#6F6F6F]':'bg-[#eee]'}  `}></div>))}
  </div>
  </>
  )
}
