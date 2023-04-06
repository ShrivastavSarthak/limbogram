import React, { Fragment } from 'react'
import './Add.css'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material'
import Footer from '../../components/footer/footer';
const Add = () => {
  return (
    <Fragment>
      <center className='mt-3 '>
        <form>
          <h6>Description</h6>
          <textarea class="form-control length" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <h6 className='pt-3'>wanna add photo</h6>
          <Button className='mt-4' variant="contained" component="label">
            Upload here
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <hr />
          <Button size='medium' variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>

        </form>
      </center>
      <div className='mt-5'>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Add