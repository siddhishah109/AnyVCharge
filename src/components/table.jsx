import React from 'react'
import '../css/table.css'
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';


import { IconButton } from '@mui/material';
const arr=[{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000001',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'000000002',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000040',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000030',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000050',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000006',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000007',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000009',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'00000000010',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000011',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000013',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'00000023523',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'000000023535',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'00000000235',e:'Joule@gmail.com',logo:''},
]
const TableData = () => {
  const [currentPage, setCurrentPage]=useState(1);
  const recoedsPerPage=8;
  const lastIndex=currentPage * recoedsPerPage;
  const firstIndex=lastIndex - recoedsPerPage;
  const records = arr.slice(firstIndex,lastIndex);
  const npage = Math.ceil(arr.length / recoedsPerPage);
  const numbers = [...Array(npage +1).keys()].slice(1);

  return (
<div>
<Table striped className='tab'>
      <thead>
        <tr>
          <th>Franchise Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Logo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {records.map((arrayData,i)=>{
    return(
    <tr>
      <td>{arrayData.fn}</td>
      <td>{arrayData.m}</td>
      <td>{arrayData.e}</td>
      <td>{arrayData.logo}</td>
      <td><VisibilityOutlinedIcon/>    <DriveFileRenameOutlineOutlinedIcon/></td>
    </tr>
    )
    }
    )}
      
      </tbody>
    </Table>
    <nav className='page'>
      <ul className='pagination'>
        <li className='page-item'>
          {/* <a href='#' className='page-link' onClick={prePage}>Prev</a> */}
          <IconButton onClick={prePage}><KeyboardDoubleArrowLeftOutlinedIcon/></IconButton>

        </li>
        {
          numbers.map((n,i)=>(
            <li className={`page-items ${currentPage === n? 'active' :''}`} key={i}>
              {/* <a href='#' className='page-link' onClick={()=>changeCPage(n)}>
                {n}
              </a> */}
              <IconButton size='small' onClick={()=>changeCPage(n)}>{n}</IconButton>
            </li>
          ))
        }
         <li className='page-item'>
          {/* <a href='#' className='page-link' onClick={nextPage}>Next</a> */}
          <IconButton onClick={nextPage}><KeyboardDoubleArrowRightOutlinedIcon/></IconButton>

        </li>
      </ul>
    </nav>
</div>
  )
  function nextPage(){
    if(currentPage !==npage){
      setCurrentPage(currentPage+1)
    }
  }
  function changeCPage(id){
    setCurrentPage(id)

  }
  function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage -1)
    }

  }
}

export default TableData
