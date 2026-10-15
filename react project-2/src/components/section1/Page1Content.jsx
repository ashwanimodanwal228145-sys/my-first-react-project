import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  return (
    <div className='py-7 flex items-center gap-8 px-10 h-[90vh]' >
        <LeftContent />
        <RightContent  users={props.users}  />
    </div>
  )
}

export default Page1Content