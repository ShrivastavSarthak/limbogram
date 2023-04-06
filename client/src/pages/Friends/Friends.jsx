import React, { Fragment } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import { Avatar, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './Friends.css'

const Friends = () => {
  const width = { width: '70%' }
  return (
    <Fragment>
      <Navbar />
      <center className='mt-4'>
        <h6>Friend request</h6>
        <div className='card p-2 ' style={width}>
          <div className='d-flex'>
            <Link className='d-flex'>
              <Avatar />
              <p className='ms-2 mt-2'>Name</p>
            </Link>
            <IconButton className='float-end'>
              <PersonAddIcon />
            </IconButton>
          </div>
        </div>
      </center>
    </Fragment>
  )
}

export default Friends