import React, { useEffect, useState } from 'react'
import "./Search.css"
import Data from "../../mock-data.json"


const Search = () => {
   

    const [query, setquery] = useState("")
    const [serachUser, setserachUser]=useState([])


    useEffect(()=>{
      fetch("http://localhost:5000/api/users/timeline/user",{
        method: "GET",
        headers:{
          "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
        }
      }).then((res)=> res.json()).then(data=>{
        setserachUser(data)
      })
    })

    return (
        <div className=' show card mx-5 my-5'  >
            <center className='output'>
                <input className='search my-3' placeholder='Search your friends' onChange={event => setquery(event.target.value)} />
                {
                    
                    serachUser.filter(post => {
                        if (query === '') {
                          return null;
                        } else if (post.username.toLowerCase().includes(query.toLowerCase())) {
                          return post;
                        }
                      }).map((post, index) => (

                        <div className='box' key={index}>
                            <p>{post.username}</p>

                        </div>
                      )
                    )

                }

            </center>
        </div>
    )
}

export default Search