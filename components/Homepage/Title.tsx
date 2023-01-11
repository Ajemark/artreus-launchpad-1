import React from 'react'

export default function Title({children}:{children:string}) {
  return (
    <h2 className='text-brandpurple p-2 font-extrabold text-3xl md:text-5xl my-6 md:my-8 '>{children}</h2>
  )
}
