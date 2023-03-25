import { Fab, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Reg = (props) => {

  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false)


  const handleClinkShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }
  const showButton = useMediaQuery(theme.breakpoints.up("md"))


  return (
    <div>
      <div className='card'>
        <h1 className='Limbogram mt-2'>Limbogram</h1>

        <form className='mx-5'>
          <FormControl sx={{ m: 1, maxwidth: '25ch' }}  variant='standard' size="small">
            <InputLabel htmlFor="standard-adornment-text">
              Your name
            </InputLabel>
            <Input
              type='text'></Input>
          </FormControl>

          <FormControl sx={{ m: 1, maxwidth: '25ch' }}  variant='standard' className='mt-2' size="small">
            <InputLabel htmlFor="standard-adornment-email"> Email</InputLabel>
            <Input
              type='email'
            ></Input>
          </FormControl>

          <FormControl sx={{ m: 1, maxwidth: '25ch' }} variant='standard'className='mt-2' size="small">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            
            
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClinkShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></Input>
        </FormControl>



          <Fab 
          size={showButton ?'medium' : 'small'}
          variant='extended'
           color='primary' 
           type="button" 
           className="my-3 px-5 Login btn btn-primary">Signup</Fab>

        </form>

      </div>
      <div className='card mt-4'>
        <p className='py-2'>Don't have account <Link to="/">Click here</Link> </p>

      </div>
    </div>
  )
}

export default Reg