import { Fab, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Logincomp = (props) => {

  const navigate = useNavigate()
  const [takeInput, setTakeInput] = useState("")
  const [takePassword, setTakePassword] = useState("")
  const [login, setLogin] = useState(false)

  const theme = useTheme();
  const showButton = useMediaQuery(theme.breakpoints.up("md"))

  const [showPassword, setShowPassword] = useState(false)

  const handleClinkShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setTakeInput(e.target.value)
  }


  const handlePassword = (e) => {
    setTakePassword(e.target.value)
  }

  const handleSubmit = () => {
    if (takeInput !== "" && takePassword !== "") {
      setLogin(true)
      navigate("/home")
    } else {
      setLogin(false)
    }
  }

  return (
    <div>
      <div className='card'>
        <h1 className='Limbogram mt-2'>Limbogram</h1>

        <form

          className='mx-5'
        >
          <FormControl variant='standard' >
            <InputLabel htmlFor="standard-adornment-email"> Email</InputLabel>
            <Input
              
              onChange={handleChange}
              value={takeInput}
              type='email'
            ></Input>
          </FormControl>


          <FormControl variant='standard' >
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              
              onChange={handlePassword}
              value={takePassword}
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
            size={`${showButton} small`}
            variant='extended'
            color='primary'
            type="button"
            onClick={handleSubmit}
            value={login}
            className="my-3 px-5 Login btn btn-primary"
          >Login</Fab>

          <hr />
          <a href="./" classname="my-3" >forget your password</a>
        </form>

      </div>
      <div className='card mt-4'>
        <p className='py-2'>Don't have account <Link to="/signup">Click here</Link> </p>

      </div>
    </div>
  )
}

export default Logincomp