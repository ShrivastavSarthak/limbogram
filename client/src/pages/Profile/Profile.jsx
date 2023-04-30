import React, { Fragment, useEffect, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import ProfileIMg from "../../assets/profile.png"
import "./Profile.css"
import { Button, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
// import Data from "../../mock-data.json"
import { useParams } from 'react-router-dom'
// import Data from "../../mock-data.json"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Fab from '@mui/material/Fab';





const Profile = ({ match, location }) => {

  const [userData, setUserData] = useState([])
  const params = useParams()
  const [userID, setUserID] = useState([])
  const id = params.id
  // console.log(id);
  const [isFollow, setIsFollow] = useState(false)
  




  const handleFollow =  async() => {
     await fetch(`http://localhost:5000/api/users/${id}/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        JSON.stringify({userId: userID._id})
    }).then((res) => res.json().then((data)=>{
      console.log(data);
      setIsFollow(true);
    }))
  }

  const handleUnFollow = async () => {
    await fetch(`http://localhost:5000/api/users/${id}/unfollow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userID._id })
    }).then((res) => res.json().then((data)=>{
      console.log(data);
      setIsFollow(false)
    }))
  }

  useEffect(() => {
    const fetchUser = async () => {
      await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "GET",
      }).then((res) => res.json().then((user) => {
        // console.log(user);
        setUserData(user)

      }))
    }
    fetchUser()
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    }).then((res) => res.json()).then((userData) => {
      // console.log(userData);
      setUserID(userData)
    })
  }, [])

 

  
 

  return (

    <Fragment>
      <Navbar />
      <div>
        <center>

          <div className='mt-5 d-flex profileInfo'>
            <img src={ProfileIMg} alt="profile" className='profile ' />
            <div>
              <h2> <span className='userName'>{userData.username} </span>
                {
                  userID._id === userData._id ?
                    (
                      <>
                        <Link className='btn' to="/editprofile">
                          <Button size="small" color="success" variant="contained" className='ms-2 Button'>Edit profile</Button>
                        </Link>
                        <IconButton>
                          <SettingsIcon />
                        </IconButton>
                      </>
                    ) : null

                }


              </h2>
              <ul className='activity'>
                <li className='info ms-3'><span>7</span> posts</li>
                <li className='info ms-3'><spam>319</spam> follower</li>
                <li className='info ms-3'><spam>284</spam> following</li>
              </ul>
              {
                userID._id === userData._id ?
                  null : (
                    <Fab  size='small' variant="extended">
                      {isFollow
                        ? <span onClick={handleUnFollow}><PersonRemoveIcon sx={{ mr: 1 }} /> unfollow</span> :
                        <span onClick={handleFollow}><PersonAddIcon sx={{ mr: 1 }} /> follow</span>

                      }

                    </Fab>
                  )
              }

            </div>
          </div>


        </center>
      </div>
    </Fragment>
  )
}

export default Profile