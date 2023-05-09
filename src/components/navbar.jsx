import '../css/navbar.css';
import { Link } from 'react-router-dom';
import React from 'react'
import DrawerNavigate from './drawer'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <DrawerNavigate/>
        <h1 className='name'>AnyVCharge</h1>
        <main>
            <Link to='/notification' className='navicon'><IconButton size='medium'  color='inherit' aria-label='logo'><NotificationsNoneOutlinedIcon/></IconButton></Link>
            <Link to='/profile' className='navicon'><IconButton  size='medium'  color='inherit' aria-label='logo'><AccountCircleOutlinedIcon/></IconButton></Link>
        </main>
    </nav>
  )
}

export default NavBar
