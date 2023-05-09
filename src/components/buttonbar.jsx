import React from 'react'
import '../css/buttonbar.css'
import DropdownTag from './dropdown'
import CreatButton from './creatbutton'

const ButtonBar = () => {
  return (
    <div className='bar' >
      <div className='bu'>
        <DropdownTag/>
        <CreatButton/>


      </div>
      
    </div>
  )
}

export default ButtonBar
