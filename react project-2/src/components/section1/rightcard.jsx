import React from 'react'
import RightCardcontent from './rightCardcontent'


const rightcard = (props) => {
    return (
        <div className='h-full w-70 bg-blue-800 rounded-4xl shrink-0 overflow-hidden relative ' >
            <img className='h-full w-full object-cover ' src={props.img} alt="img1" />
           <RightCardcontent tag1={props.tag1} intro={props.intro} tag2={props.tag2}/>
        </div>
    )
}

export default rightcard