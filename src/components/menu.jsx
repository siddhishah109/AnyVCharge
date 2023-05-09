import React from 'react'
import '../css/menu.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BatteryCharging80OutlinedIcon from '@mui/icons-material/BatteryCharging80Outlined';

// const menudata=[{l:'PersonOutlineOutlinedIcon',d:'users'},
// {l:'AirportShuttleOutlinedIcon',d:'Vehicles'},
// {l:'BatteryCharging80OutlinedIcon',d:'Charging Station'},
// {l:'PrecisionManufacturingOutlinedIcon',d:'Machine'},
// {l:'LocalOfferOutlinedIcon',d:'Offer'},
// {l:'AccountTreeOutlinedIcon',d:'Amenity'},
// ]



const Menu = () => {
  return (
    <div>
      <ul>
      <li><PersonOutlineOutlinedIcon/>  users</li>
      <li>< AirportShuttleOutlinedIcon/> Vehicles </li>
      <li><BatteryCharging80OutlinedIcon />  Charging Station</li>
      <li><PrecisionManufacturingOutlinedIcon /> Machine </li>
      <li><LocalOfferOutlinedIcon /> Offer </li>
      <li><AccountTreeOutlinedIcon /> Amenity </li>
       
      </ul>
      
    </div>
  )
}

export default Menu
