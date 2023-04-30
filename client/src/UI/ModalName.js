import React, { Fragment, useEffect, useState } from 'react'

const MOdalName = ({ userID }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const fetchUser = async () => {
            // console.log(userID);
            await fetch(`http://localhost:5000/api/users/${userID}`, {
                method: 'GET'
            }).then((res) => res.json().then((data) => {
                // console.log(data);
                setUser(data.username)
            }))
        }
        fetchUser();
    })


    return (
        <Fragment>
            <h6 className='pt-2 ps-3'>{user}</h6>
        </Fragment>
    )
}

export default MOdalName 