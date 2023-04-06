import React from 'react'
import Modaltemplate from '../../UI/Modaltemplate'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './Post.css'
import { Button, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
  const height = { minHeight:'100px',maxHeight: '200px' }
  return (
    <Modaltemplate title={<AddCircleRoundedIcon />}>
      <div className='layout1'>
        <form className='pt-4 InputArea'>
          <div className="form-floating">
            <textarea className="form-control textHere" style={height} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlfor="floatingTextarea2">Description</label>
          </div>
          <Button className='mt-4' variant="contained" component="label">
            Upload photo
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button size='medium' className='buttonSize' variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
        </form>
      </div>
    </Modaltemplate>
  )
}

export default Post