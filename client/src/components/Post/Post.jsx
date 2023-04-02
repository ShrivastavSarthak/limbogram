import React from 'react'
import Modaltemplate from '../../UI/Modaltemplate'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './Post.css'
import { Button, Fab, IconButton } from '@mui/material';


const Post = () => {
  const height = { minHeight:'100px',maxHeight: '200px' }
  const pos ={position: 'absolute', top:'21rem', left:'20rem'}
  return (
    <Modaltemplate title={<AddCircleRoundedIcon />}>
      <div className='style'>
        <form className='pt-4 InputArea'>
          <div className="form-floating">
            <textarea className="form-control textHere" style={height} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlfor="floatingTextarea2">Description</label>
          </div>
          <Button className='mt-4' variant="contained" component="label">
            Upload photo
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Fab size='small' style={pos} className='mt-2 setPos'>
            <IconButton>
              <AddCircleRoundedIcon/>
            </IconButton>
          </Fab>
        </form>
      </div>
    </Modaltemplate>
  )
}

export default Post