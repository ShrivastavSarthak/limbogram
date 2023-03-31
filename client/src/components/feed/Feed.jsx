import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Profile from "../../assets/profile.png"
import "./Feed.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import Data from "../../mock-data.json"

const Feed = () => {

  const [isTrue, setTrue] = useState(false)
  // const width = { maxWidth: "800px" }
  
  const handleTrue = () => {
    setTrue(!isTrue)
  }




  return (
    <div className='cardArea' >

      {Data.map(person => {
        return (
          <center className='cardbox mb-5'  key={person.id}>
            <div >
              <Link to="/profile" className='d-flex m-2 '>
                <Avatar alt='sarthak' src={person.image} />
                <h6 className='pt-2 ps-3'>{person.first_name}</h6>
              </Link>

              <img className='ImageBox' alt='imag' src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
              <div className='d-flex m-1'>
                <IconButton onClick={handleTrue}>
                  {isTrue ? <FavoriteBorderIcon  /> : <FavoriteIcon  />}
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton>
                  <SendIcon />
                </IconButton>
              </div>
            </div>
          </center>
        )
      })}

    </div>


  )
}

export default Feed