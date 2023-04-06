import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Profile from "../../assets/profile.png"
import "./Feed.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import Data from "../../mock-data.json"
import Comment from '../comment/Comment';

const Feed = () => {

  const [isTrue, setTrue] = useState(false)
  // const width = { maxWidth: "800px" }

  const handleTrue = () => {
    setTrue(!isTrue)
  }




  return (
    <div className='cardArea mb-5' >

      {Data.map(person => {
        return (
          <center className='cardbox  ' key={person.id}>
            <div >
              <Link to={'/profile/' + person.id} className='d-flex m-2 '>
                <Avatar alt='sarthak' src={person.image} />
                <h6 className='pt-2 ps-3'>{person.first_name}</h6>
              </Link>
              <div >
                <img className='ImageBox' alt='imag' src={person.Url_Image} />
              </div>

              <div className='d-flex m-1'>
                <IconButton onClick={handleTrue} key={person.id}>
                  {isTrue ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </IconButton>
                <Comment />
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