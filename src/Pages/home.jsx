import React from 'react'
import TableData from '../components/table'
import Menu from '../components/menu'
import ButtonBar from '../components/buttonbar'
import '../css/home.css'



const Home = () => {
  return (
    <>
   <div className='grid-container'>
  
  <div class="item2"><Menu/></div>
  <div class="item3"><ButtonBar/></div>  

  <div class="item5"><TableData/></div>
   </div>
    </>

    

  )
}

export default Home
