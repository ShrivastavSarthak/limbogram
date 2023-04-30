import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
// import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import Fab from '@mui/material/Fab'
import { IconButton, Popover } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useTheme } from '@mui/material';
import Post from '../Post/Post';
import Modaltemplate from '../../UI/Modaltemplate';
import Search from "../Search/Search";



const SideBar = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const theme = useTheme()
    const [userID,setUserID] = useState('')
    const toggle = useMediaQuery(theme.breakpoints.up("md"))


    const handleClick = (e) => { setAnchorEl(e.currentTarget) }

    const handleClose = () => { setAnchorEl(null) }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined
    useEffect(() => {
        fetch("http://localhost:5000/api/auth/getuser", {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token")
          }
        }).then((res) => res.json()).then((userData) => {
        //   console.log(userData);
          setUserID(userData._id)
        })
      }, [])
    return (
        <div className='NavBar'>


            <nav class="  navbar navbar-expand-sm navbar-light bg-light">
                <h1 class="navbar-brand limbogram mx-3" > limbogram</h1>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Fab size={toggle ? "medium" : "small"} className='mx-4'>
                                <Link to="/home" class="nav-link mx-4" href="#">

                                    <HomeRoundedIcon />
                                </Link>
                            </Fab>
                        </li>
                        <li class="nav-item">
                            <Fab className='mx-4' size={toggle ? "medium" : "small"}>
                                {
                                    toggle ? <Post /> : <Link to="/createpost" class="nav-link mx-4"  ><AddCircleRoundedIcon /></Link>
                                }
                            </Fab>
                        </li>
                        <li class="nav-item">
                            <Fab
                                size={toggle ? "medium" : "small"}
                                className='mx-4'>
                                <Link to={`/profile/${userID}`} class="nav-link mx-4" href="#"> <AccountBoxRoundedIcon /></Link>
                            </Fab>
                        </li>
                        <li class="nav-item setButtonVisibility">
                            <Fab
                                size={toggle ? "medium" : "small"}
                                aria-describedby={id}
                                onClick={handleClick} 
                                className='mx-4 '>
                                <PersonAddAltRoundedIcon />
                            </Fab>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',

                                }}>
                                <div className='p-3'>

                                    <ul >
                                        <li class="nav-item"><p>khushi gangwar <Fab size='small'><PersonAddAltRoundedIcon /></Fab></p></li>
                                        <hr />
                                        <li><Link to="/addfriends">See more</Link></li>
                                    </ul>
                                </div>
                            </Popover>
                        </li>
                        
                    </ul>


                </div>

            </nav>


            <nav class="bottomNav navbar  fixed-bottom navbar-expand-sm navbar-light bg-light">
                <IconButton>
                    <Link to="/home">
                        <HomeRoundedIcon color="action" />
                    </Link>
                </IconButton>
                <IconButton>
                    <Link to="/createpost">
                        <AddCircleRoundedIcon color="action" />
                    </Link>
                </IconButton>
                <IconButton>
                    <Modaltemplate title={<PersonSearchIcon />} className="setCard">
                        <div>
                            <h6>Search</h6>
                            <Search/>
                        </div>
                    </Modaltemplate>

                </IconButton>
                <IconButton>
                    <Link to="/addfriends">
                        <PersonAddAltRoundedIcon color="action" />
                    </Link>
                </IconButton>
                <IconButton>
                    <Link to={`/profile/${userID}`}>
                        <AccountBoxRoundedIcon color="action" />
                    </Link>
                </IconButton>
            </nav>

        </div>



    )
}

export default SideBar