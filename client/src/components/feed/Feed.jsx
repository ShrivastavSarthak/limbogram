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

  const [like, setLike] = useState([])
  const onClickLike = (items) => {
    let index = like.findIndex((x) => x === items.id)
    if (index >= 0) like.splice(index, 1);
    else like.push(items.id)
    setLike([...like])
  }
  // const width = { maxWidth: "800px" }






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
                <IconButton onClick={onClickLike.bind(this, person)}>
                  {like.findIndex((x) => x === person.id) >= 0 ? (
                    <FavoriteIcon />
                  ) :
                    (
                      <FavoriteBorderIcon />

                    )}
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