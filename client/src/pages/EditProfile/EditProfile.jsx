import React, { Fragment } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import ProfileImg from "../../assets/profile.png"
import "./EditProfile.css"
import { Button } from '@mui/material'
import Fab from '@mui/material/Fab'
import Footer from '../../components/footer/footer'

const editProfile = () => {
    return (
        <Fragment>
            <Navbar />
            <center>
                <div className='card p-4 mt-5'  >
                    <h4>Display picture</h4>
                    <img className='my-4 profileImg' src={ProfileImg} alt="profile" />
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <hr />
                    <h4>Your info</h4>
                    <label className='mt-4'>Name</label>
                    <input type="text" className="form-control mt-3" placeholder='Enter your name' required />
                    <label className='mt-4'>Username</label>
                    <input type="text" className="form-control mt-3" placeholder='Enter your Username' required />
                    <label className='mt-4'>Email id</label>
                    <input type="email" className="form-control mt-3" placeholder='sharthakshrivastav20112002@gmail.com' disabled />
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
                  
                    <Button  variant="contained" component="label" className='px-5' >
                        Submit
                    </Button>
                </div>
            </center>
            <Footer />
        </Fragment>
    )
}

export default editProfile