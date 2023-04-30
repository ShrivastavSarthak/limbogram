import React, { useEffect, useState } from 'react'
import Modaltemplate from '../../UI/Modaltemplate'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './Post.css'
import { Button, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';




const Post = () => {

  const [post, setPost] = useState({ desc: "", File: "" })
  const [id, setId] = useState("")
  const navigate = useNavigate()
  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  useEffect(() => {
    fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem("token")
      }
    }).then((res) => res.json()).then((userData) => {
      setId(userData._id)

    })
  }, [])



  const postDetails = (e) => {
    e.preventDefault();
    console.log(body, image)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "limbogram")
    data.append("cloud_name", "shrivastavsarthak")
    fetch("https://api.cloudinary.com/v1_1/shrivastavsarthak/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))
    console.log(url)

  }


  useEffect(() => {
    if (url) {
      try {
        fetch("http://localhost:5000/api/post/addpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          },
          body: JSON.stringify({ description: body, image: url, userId:id})
        }).then((res) => res.json()).then(navigate("/home"))

      } catch (error) {
        console.log(error);
      }


    }
  },[url])


    const height = { minHeight: '100px', maxHeight: '200px' }
    return (

      <Modaltemplate title={<AddCircleRoundedIcon />}>
        <div className='layout1'>
          <form className='pt-4 InputArea'>
            <div className="form-floating">
              <textarea name='desc' value={body} onChange={(e) => {
                setBody(e.target.value)
              }} className="form-control textHere" style={height} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label htmlfor="floatingTextarea2">Description</label>
            </div>
            <Button className='mt-4' variant="contained" component="label">
              Upload photo
              <input name='File' onChange={(event) => {

                setImage(event.target.files[0])
              }} hidden accept="image/*" multiple type="file" />
            </Button>
            <Button type='submit' size='medium' className='buttonSize' onClick={postDetails} variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </form>
        </div>
      </Modaltemplate>

    )
  }

  export default Post