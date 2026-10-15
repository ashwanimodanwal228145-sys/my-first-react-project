import React from 'react'
import RightCard from './rightcard'

const RightContent = (props) => {
  console.log(props);

  return (
    <div  className='h-full w-2/3 p-6 flex overflow-x-auto flex-nowrap gap-4 ' >

        {props.users.map(function(elem,idx){

          return <RightCard key={idx} id={idx} img={elem.img} tag1={elem.tag1} intro={elem.intro} tag2={elem.tag2} />
        })}
       

    </div>
  )
}

export default RightContent