import React, { Fragment } from 'react'
import "./Rightbar.css"
import { Avatar, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Rightbar = () => {


  const users = [1, 2, 3, 4, 5,6]

  const width = { maxWidth: "400px" }
  return (
    <Fragment >
      <div className='setvisibility card mx-5 friendCard p-2' style={width}>
        <div className='d-flex'>
          <Link className='d-flex'>
            <Avatar />
            <h6 className='mt-2 ms-1'>Name</h6>
          </Link>
          <Button id='setButton'>Logout</Button>
        </div>
      </div>

      <div className=' setvisibility card mx-5 mt-2 friendCard p-2' style={width}>
        <h6>Friend request</h6>
        {
          users.map(person => {
            return (
              <div className='d-flex mt-2'>
                <Link className='d-flex'>
                  <Avatar />
                  <h6 className='mt-2 ms-1'>Name</h6>
                </Link>
                <IconButton id='setButton' className='me-2'><PersonAddIcon /></IconButton>
              </div>
            )
          })
        }
        {
          users.length>5 ? <Link to="/addfriends" >show more</Link>: null
        }

      </div>

    </Fragment>
  )
}

export default Rightbar