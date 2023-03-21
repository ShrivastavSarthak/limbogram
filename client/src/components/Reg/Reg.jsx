import { Fab } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../UI/Input'
const Reg = (props) => {

  
  return (
    <div>
      <div className='card'>
        <h1 className='Limbogram mt-2'>Limbogram</h1>

        <form className='mx-5'>
          <Input
            
            input={{
              type: "text",
              placeholder: "Please enter your name",
              name: "name"
            }}
          />
          <Input
            input={{
              id: "email_" + props.id,
              name: "email",
              type: "email",
              placeholder: "Please enter your Email"

            }} />

          <Input
            input={{
              type: "password",
              placeholder: "Please enter your Password",
              name: "password"

            }} />
          <Fab variant='extended' color='primary' type="button" className="my-3 px-5 Login btn btn-primary">Signup</Fab>

          <hr />
          
        </form>

      </div>
      <div className='card mt-4'>
        <p className='py-2'>Don't have account <Link to="/">Click here</Link> </p>

      </div>
    </div>
  )
}

export default Reg