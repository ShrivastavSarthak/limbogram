import React, { Fragment } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import ProfileIMg from "../../assets/profile.png"
import "./Profile.css"
import { Button, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
import Data from "../../mock-data.json"
import { useParams } from 'react-router-dom'
// import Data from "../../mock-data.json"
const Profile = ({ match, location }) => {

  const params = useParams()

  const userId = params.id

  return (

    <Fragment>
      <Navbar />
      <div>
        <center>

          <div className='mt-5 d-flex profileInfo'>
            <img src={Data[userId-1].image} alt="profile" className='profile ' />
            <div>
              <h2> <span className='userName'>{Data[userId - 1].first_name} {Data[userId - 1].last_name} </span>
                <Link className='btn' to="/editprofile">
                  <Button size="small" color="success" variant="contained" className='ms-2 Button'>Edit profile</Button>
                </Link>
                <IconButton>
                  <SettingsIcon />
                </IconButton>
              </h2>
              <ul className='activity'>
                <li className='info ms-3'><span>7</span> posts</li>
                <li className='info ms-3'><spam>319</spam> follower</li>
                <li className='info ms-3'><spam>284</spam> following</li>
              </ul>
            </div>



          </div>


        </center>
      </div>
    </Fragment>
  )
}

export default Profile