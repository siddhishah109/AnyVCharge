import React from 'react'
import '../css/menu.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BatteryCharging80OutlinedIcon from '@mui/icons-material/BatteryCharging80Outlined';



const Menu = () => {
  return (
    <div>
      <ul>
      <li><PersonOutlineOutlinedIcon className='lo'/>  users</li>
      <li>< AirportShuttleOutlinedIcon className='lo'/> Vehicles </li>
      <li><BatteryCharging80OutlinedIcon className='lo' />  Charging Station</li>
      <li><PrecisionManufacturingOutlinedIcon className='lo' /> Machine </li>
      <li><LocalOfferOutlinedIcon className='lo' /> Offer </li>
      <li><AccountTreeOutlinedIcon className='lo' /> Amenity </li>
       
      </ul>
      
    </div>
  )
}

export default Menu
