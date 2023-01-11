import React from 'react'
import {Tab} from '@headlessui/react'
import TeamMember from './TeamMember'
import RoadMap from './RoadMap'

export default function TeamInfo() {
  return (

    <Tab.Group as="div">
      <Tab.List className='flex font-extrabold text-2xl space-x-12'>
       <Tab as={React.Fragment}>
         {({selected})=>(
          <button className={`border-b-4 pb-2 pr-4 ${selected?'border-brandyellow':"border-white"}`}>Team</button>
         )}
       </Tab>
       <Tab as={React.Fragment}>
         {({selected})=>(
          <button className={`pb-2 pr-4 border-b-4  ${selected?'  border-brandyellow':"border-white"}`}>Roadmap</button>
         )}
       </Tab>

      
      </Tab.List>
      <Tab.Panels>
       
        <Tab.Panel>
          {Array(4).fill(0).map((_,index)=>(
             <TeamMember key={index} name='Mona' twitterLink='' linkedinLink='' teamMemberComment=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis a impedit amet at quas placeat cum iure quasi culpa natus, delectus dignissimos esse labore. Minima vero rerum voluptatum iur'/>
          ))}
         
        </Tab.Panel>
        <Tab.Panel>
          <RoadMap title='Pre-Mint' listOfActivities={Array(5).fill('Hidden Talent Contest (Winner feautured in Modern Drummer + gets ')}/>
          <RoadMap title='MetaPass' listOfActivities={Array(5).fill('Hidden Talent Contest (Winner feautured in Modern Drummer + gets ')}/>
          <RoadMap title='Post-Mint' listOfActivities={Array(5).fill('Hidden Talent Contest (Winner feautured in Modern Drummer + gets ')}/>
        </Tab.Panel>

      </Tab.Panels>
      
    </Tab.Group>
  )
}
