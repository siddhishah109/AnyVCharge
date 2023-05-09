import {Drawer,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';

import React from 'react'

const DrawerNavigate = () => {
    const[isDrawerOpen,setDrawerOpen]=useState(false);
  return (

    <>
    <IconButton  size='medium' edge='start' color='inherit' aria-label='logo' onClick={()=>setDrawerOpen(true)}><MenuIcon className='drawericon'/></IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setDrawerOpen(false)}>
        hi


</Drawer>
    </>
  )
}

export default DrawerNavigate
