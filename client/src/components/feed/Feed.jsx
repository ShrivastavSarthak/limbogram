import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Profile from "../../assets/profile.png"
import "./Feed.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import SendIcon from '@mui/icons-material/Send';
// import Data from "../../mock-data.json"
// import Comment from '../comment/Comment';
import { useNavigate } from "react-router-dom";
import MOdalName from '../../UI/ModalName';

const Feed = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState([])
  const [data, setData] = useState([])
  // const [userPost, setUserPost] = useState([])


  const onClickLike = (items) => {
    let Index = like.findIndex((x) => x === items._id)
    if (Index >= 0) like.splice(Index, 1);
    else like.push(items._id)
    setLike([...like])
  }
  // const width = { maxWidth: "800px" }


  useEffect(() => {
    const authToken = localStorage.getItem("token")
    if (!authToken) {
      navigate("/")
    }
    fetch("http://localhost:5000/api/post/timeline/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
    }).then((res) => res.json()).then((result) => {
      // console.log(result);
      setData(result);

    }).catch((err) => {
      console.log(err);
    })
  }, [])


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     await fetch(`http://localhost:5000/api/users/${data.userId}`, {
  //       method: "GET",
  //     }).then((res) => res.json().then((user) => {
  //       console.log(user.username);
  //       // setUserName(user.username)

  //     }))
  //   }
  //   fetchUser()
  // }, [])

  const likeDislikePost = async (id) => {
    await fetch(`http://localhost:5000/api/post/${id}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        userId: id
      })
    }).then((res) => res.json()).then((result) => {
      const newData = data.map((person) => {
        if (person._id === result._id) {
          return result
        } else {
          return person;
        }
      })
      setData(newData)
      // console.log(result);
    })
  }




  return (
    <div className='cardArea mb-5' >

      {data?.map(person => {

        return (
          <center className='cardbox' key={person.index}>
            <div >
              <Link to={'/profile/' + person.userId} className='d-flex m-2' style={{ textDecoration: 'none' }}>
                <Avatar alt='sarthak' src={person.image} />
               
                <MOdalName userID={person.userId}/>
              </Link>
              <p>{person.description}</p>
              <div >
                <img className='ImageBox' alt={person} src={person.image} />
              </div>

              <div className='d-flex m-1'>


                <IconButton onClick={onClickLike.bind(this, person)}>
                  {like.findIndex((x) => x === person._id) >= 0 ? (
                    <FavoriteIcon onClick={() => {
                      likeDislikePost(person._id)
                    }} />
                  ) :
                    (
                      <FavoriteBorderIcon onClick={() => {
                        likeDislikePost(person._id)
                      }} />

                    )}
                </IconButton>
                <p>{person.likes.length}</p>
               
                

              </div>
            </div>
          </center>
        )
      })}
    </div>


  )
}

export default Feed