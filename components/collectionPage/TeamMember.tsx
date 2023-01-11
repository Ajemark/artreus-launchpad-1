import React from 'react'
import Link from 'next/link'
type props={
    name:string,
    teamMemberComment:string,
    linkedinLink:string,
    twitterLink:string,
}
export default function TeamMember(props:props) {
  return (
    <div className='pt-5'>
        <ul className='flex space-x-2'><li className='font-bold text-2xl'>{props.name}</li> 
        <li>
           <Link href={`${props.linkedinLink}`}>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <rect
        width="29"
        height="29"
        fill="#2F2F2F"
        fillOpacity="0.1"
        rx="5"
      ></rect>
      <path
        fill="#2F2F2F"
        fillRule="evenodd"
        d="M3.5 5.338A1.838 1.838 0 015.338 3.5H23.66a1.837 1.837 0 011.84 1.838V23.66a1.838 1.838 0 01-1.839 1.84H5.338A1.839 1.839 0 013.5 23.661V5.338zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106h-3.208v-10.54zm-5.5 10.403h3.208V11.75H6.708V22.291zm3.667-13.979a2.063 2.063 0 11-4.124.09 2.063 2.063 0 014.124-.09z"
        clipRule="evenodd"
      ></path>
    </svg>
           </Link>
        </li>
    <li>
       <Link href={`${props.twitterLink}`}>
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <rect
        width="29"
        height="29"
        fill="#2F2F2F"
        fillOpacity="0.1"
        rx="5"
      ></rect>
      <path
        fill="#2F2F2F"
        d="M25.853 7.46c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.23 13.23 0 01-9.602-4.868 4.66 4.66 0 001.442 6.22 4.648 4.648 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.693 4.693 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.176 13.176 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41l.002-.003z"
      ></path>
    </svg>
       </Link>
    </li>

    </ul>
    <p className='md:w-[50ch]'> {props.teamMemberComment}</p>
     
    </div>
  )
}
