import React, { useState } from 'react'
import "./Comment.css"
import Modaltemplate from '../../UI/Modaltemplate'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, IconButton } from '@mui/material';
import Data from '../../mock-data.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';



const Comment = (props) => {
  const width = { width: '95%' }
  const width2 ={width: '300px'}
  const [isTrue, setTrue] = useState(false)
  // const width = { maxWidth: "800px" }

  const handleTrue = () => {
    setTrue(!isTrue)
  }

  return (

    <Modaltemplate title={<ChatBubbleOutlineIcon />}>
      <div className='layout'>
        <h5 className='mt-2 ms-1 ' >Comment</h5>
        <hr/>
        <div className='card hideCard' style={width2} >
          {
            Data.map(person => {
              return (
                <div className='card CommentCard p-2 m-2' style={width}>
                  <Link className='ms-2 d-flex'>
                    <Avatar />
                    <h6 className='ms-1 mt-2'>sarthak</h6>
                  </Link>
                  <div className=' mt-1 d-flex'>
                    <input type='text' disabled placeholder='great' className='form-control mx-2' />
                    <IconButton className='like ' size='small' onClick={handleTrue}>
                      {isTrue ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                    </IconButton>
                  </div>
                </div>
              )
            })
          }


        </div>
        <div className=' fixed-bottom m-1'>
          <hr />
          <div className='d-flex'>
            <input type="text" class="form-control" placeholder="Comment here" aria-label="Username" aria-describedby="basic-addon1" />
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </div>


    </Modaltemplate>


  )
}

export default Comment