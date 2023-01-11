import React from 'react'

type props={
    title:string,
    listOfActivities:string[],
}
export default function RoadMap(props:props) {
  return (
    <div className='pt-5'>
        <h3 className='font-semibold text-2xl uppercase'>{props.title}</h3>
        <ul className="list-disc list-inside">
            {props.listOfActivities.map((activity,index)=>(
                <li key={index}>{activity}</li>
            ))}
        </ul>
    </div>
  )
}
