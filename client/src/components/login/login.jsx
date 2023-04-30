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

  const theme = useTheme();
  const showButton = useMediaQuery(theme.breakpoints.up("md"))

  const [showPassword, setShowPassword] = useState(false)

  const [credential, setCredential] = useState({email: "", password: "",})
  const handleClinkShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault()
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credential.email,password: credential.password })
    });
    const json = await responce.json();
    if (json.success){
      
      // SAVE THE AUTH TOKEN AND REDIRECT
        localStorage.setItem('token',json.authToken)
        localStorage.getItem("token")
        navigate("/home")

    }else{
      alert("Invalid Credentials")
    }
    }
  
  const onChange=(e)=>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className='card'>
        <h1 className='Limbogram mt-2'>Limbogram</h1>

        <form
          onSubmit={handleSubmit}
          className='mx-5'
        >
          <FormControl sx={{ m: 1, maxwidth: '45ch' }}  variant='standard' >
            <InputLabel htmlFor="standard-adornment-email"> Email</InputLabel>
            <Input
              name='email'
              onChange={onChange}
              value={credential.email}
              type='email'
            ></Input>
          </FormControl>


          <FormControl sx={{ m: 1, maxwidth: '45ch' }}  variant='standard'className='mt-2' >
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              
              onChange={onChange}
              name="password"
              value={credential.password}
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
            type="Submit"
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