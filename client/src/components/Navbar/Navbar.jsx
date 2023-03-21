import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
// import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import Fab from '@mui/material/Fab'
import { Button, Popover, Typography } from '@mui/material';

const SideBar = () => {
    const width = { maxwidth: "600px" }
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined

    return (
        <div>


            <nav class=" NavBar navbar navbar-expand-sm navbar-light bg-light">
                <h1 class="navbar-brand limbogram mx-3" > limbogram</h1>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Fab size={width ? "large" : "small"} className='mx-4'>
                                <Link to="/home" class="nav-link mx-4" href="#">

                                    <HomeRoundedIcon />
                                </Link>
                            </Fab>
                        </li>
                        <li class="nav-item">
                            <Fab className='mx-4'>
                                <Link to="/createpost" class="nav-link mx-4" href="#"> <AddCircleRoundedIcon /></Link>
                            </Fab>
                        </li>
                        <li class="nav-item">
                            <Fab aria-describedby={id} onClick={handleClick} className='mx-4'>
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
                                        <li class="nav-item"><p>khushi gangwar <Fab size='small'><PersonAddAltRoundedIcon/></Fab></p></li>
                                        <hr/>
                                        <li><Link to="/addfriends">See more</Link></li>
                                    </ul>
                                </div>
                            </Popover>
                        </li>
                        <li class="nav-item">
                            <Fab className='mx-4'>
                                <Link to="/profile" class="nav-link mx-4" href="#"> <AccountBoxRoundedIcon /></Link>
                            </Fab>
                        </li>
                    </ul>


                </div>

            </nav>


            <nav class="bottomNav navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
                <Link to="/home"><HomeRoundedIcon color="action" /></Link>
                <Link to="/createpost"><AddCircleRoundedIcon color="action" /></Link>
                <Link to="/addfriends"><PersonAddAltRoundedIcon color="action" /></Link>
                <Link to="/profile"><AccountBoxRoundedIcon color="action" /></Link>
            </nav>

        </div>



    )
}

export default SideBar