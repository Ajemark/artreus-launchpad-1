import React from 'react'
import FooterNav from './FooterNav'
import FooterSocialLinks from './FooterSocialLinks'

export default function Footer() {
    return (
        <footer className='w-full'>
            <div className="md:px-6 md:py-12 border-y border-[#2F2F2F1A] flex space-y-10 md:space-y-0 pb-10 flex-col md:items-start md:flex-row md:space-x-10 md:mt-16 text-black">
                <div className='w-full md:w-[400px]'>
                    <section className='flex flex-col'>
                        <h2 className='font-medium text-xl mb-6 text-center '>Get the latest Artreus updates</h2>
                        <div className='flex  w-full  justify-center'>
                            <div className=' flex justify-center  bg-[#2F2F2F1A] rounded'>
                                <input type="text" placeholder="Your email" className=' inline-block md:inline text-[#666] placeholder:text-[#2F2F2FB2] placeholder:font-bold py-2 pl-4 h-12 w-full  m-auto outline-none' />
                                <button className='whitespace-nowrap md:whitespace-normal bg-brandpurple py-1 px-4 text-white rounded w-fit m-1'>I'm in</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='flex justify-center md:justify-start space-x-16'>
        <FooterNav navHeader='Marketplace' navItems={['Explore','Blog','How it Works','Jobs','Help Center']}/>
       <FooterNav navHeader='Links' navItems={['Launchpad','Blog','How it Works','Jobs','Help Center']}/>

        </div>
      
       <section className='flex flex-col items-center md:block'>
           <h2 className='font-bold text-xl'>Join the Artreus Community</h2>
           <FooterSocialLinks/>
       </section>
            </div>
            <div className="flex justify-center">
                <div className='my-3 text-[10px] md:text-[14px] text-brandpurple flex gap-2'>
                    <span>Copyright 2022 Artreus.</span>
                    <a href="#">All right reserved</a>
                    <a href="#">Terms</a>
                    <a href="#">Policy</a>
                </div>
            </div>
        </footer>
    )
}
