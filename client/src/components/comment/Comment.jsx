
import React from 'react'
import "./Comment.css"
import Modaltemplate from '../../UI/Modaltemplate'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Comment = (props) => {


  return (
  
      <Modaltemplate title={<ChatBubbleOutlineIcon/>}>
        <div className='style'>
            <h1>hello</h1>
        </div>
      
      </Modaltemplate>

   
  )
}

export default Comment