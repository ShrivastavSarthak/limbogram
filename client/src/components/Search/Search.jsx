import React, { useState } from 'react'
import "./Search.css"
import Data from "../../mock-data.json"


const Search = () => {
   

    const [query, setquery] = useState("")



    return (
        <div className=' show card mx-5 my-5'  >
            <center className='output'>
                <input className='search my-3' placeholder='Search your friends' onChange={event => setquery(event.target.value)} />
                {
                    
                    Data.filter(post => {
                        if (query === '') {
                          return null;
                        } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
                          return post;
                        }
                      }).map((post, index) => (

                        <div className='box' key={index}>
                            <p>{post.first_name}</p>

                        </div>
                      )
                    )

                }

            </center>
        </div>
    )
}

export default Search