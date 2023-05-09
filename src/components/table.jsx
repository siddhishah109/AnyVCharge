import React from 'react'
import '../css/table.css'
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
const arr=[{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
{fn:'Joule Point',m:'0000000000',e:'Joule@gmail.com',logo:''},
]
const TableData = () => {
  const [currentPage, setCurrentPage]=useState(1);
  const recoedsPerPage=5;
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
      <td><VisibilityOutlinedIcon/><DriveFileRenameOutlineOutlinedIcon/></td>
    </tr>
    )
    }
    )}
      
      </tbody>
    </Table>
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link' onClick={prePage}>Prev</a>

        </li>
        {
          numbers.map((n,i)=>(
            <li className={`page-items ${currentPage === n? 'active' :''}`} key={i}>
              <a href='#' className='page-link' onClick={()=>changeCPage(n)}>
                {n}
              </a>
            </li>
          ))
        }
         <li className='page-item'>
          <a href='#' className='page-link' onClick={nextPage}>Next</a>

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
