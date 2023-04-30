import React, { Fragment, useEffect, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import ProfileIMg from "../../assets/profile.png"
import "./Profile.css"
import { Avatar, Button, IconButton } from '@mui/material'
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
  const[loginUserfollower, setLoginfollower] = useState('')
  const[loginUserfollowing, setLoginfollowing] = useState('')
  const[nonLoginUserfollower, setNonLoginfollower] = useState('')
  const[nonLoginUserfollowing, setNonLoginfollowing] = useState('')
  



  const handleFollow = async () => {
    await fetch(`http://localhost:5000/api/users/${id}/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:
        JSON.stringify({ userId: userID._id })
    }).then((res) => res.json().then((data) => {
      // console.log(data);
      setIsFollow(true);
      alert('following')
    }))
  }

  const handleUnFollow = async () => {
    await fetch(`http://localhost:5000/api/users/${id}/unfollow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userID._id })
    }).then((res) => res.json().then((data) => {
      // console.log(data);
      setIsFollow(false)
      alert('follow') 

    }))
  }

  useEffect(() => {
    const fetchUser = async () => {
      await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "GET",
      }).then((res) => res.json().then((user) => {
        // console.log(user);
        setUserData(user)
        setNonLoginfollower(user.followers.length)
        setNonLoginfollowing(user.following.length)

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
      setLoginfollower(userData.followers.length)
      setLoginfollowing(userData.following.length)
    })
  }, [])






  return (

    <Fragment>
      <Navbar />
      <div>
        <center>

          <div className='mt-5 d-flex profileInfo'>
          <Avatar sx={{ width: 100, height: 100 }}/>
            <div>
              <h2> <span className='userName'> { userData.username} </span>
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

              {
                userID._id === userData._id ?
                  (
                    <ul className='activity'>
                      <li className='info ms-3'><spam>{loginUserfollowing} </spam>following </li>
                      <li className='info ms-3'><spam>{loginUserfollower}</spam> followers</li>
                    </ul>
                  ) : (
                    <ul className='activity'>
                      <li className='info ms-3'><spam>{nonLoginUserfollowing} </spam>following </li>
                      <li className='info ms-3'><spam>{nonLoginUserfollower}</spam> followers</li>
                    </ul>
                  )
              }


              {
                userID._id === userData._id ?
                  null : (
                    <Fab size='small' variant="extended">
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