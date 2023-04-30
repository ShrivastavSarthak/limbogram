import React, { Fragment, useEffect, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import ProfileImg from "../../assets/profile.png"
import "./EditProfile.css"
import { Avatar, Button } from '@mui/material'
import Footer from '../../components/footer/footer'

const EditProfile = () => {

    const[editUser,setEditUser] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/api/auth/getuser", {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token")
          }
        }).then((res) => res.json()).then((userData) => {
          setEditUser(userData)
         
        })
      }, [])
    

    return (
        <Fragment>
            <Navbar />
            <center>
                <div className='card p-4 mt-5'  >
                    <h4>Display picture</h4>
                    <Avatar className='my-4 profileImg' sx={{ width: 100, height: 100 }}/>
                   
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <hr />
                    <h4>Your info</h4>
                    <label className='mt-4'>Name</label>
                    <input type="text" className="form-control mt-3" placeholder='Enter your name' required />
                    <label className='mt-4'>Username</label>
                    <input type="text" className="form-control mt-3" placeholder={editUser.username} disabled />
                    <label className='mt-4'>Email id</label>
                    <input type="email" className="form-control mt-3" placeholder={editUser.email} disabled />
                    <label className='mt-4'>Bio</label>
                    <textarea class="form-control mt-3" aria-label="With textarea"></textarea>

                    <hr />
                    <h4>Education</h4>
                    <label className='mt-4'>School</label>
                    <input type="text" className="form-control mt-3" placeholder='What is your school name' />
                    <label className='mt-4'> Heigher studies</label>
                    <input type="text" placeholder='enter your college' className="form-control mt-3" />
                </div>
                <div className=' my-5'>

                    <Button variant="contained" component="label" className='px-5' >
                        Submit
                    </Button>
                </div>
            </center>
            
        </Fragment>
    )
}

export default EditProfile