import React, { useState } from 'react'
import { Box, Fade, IconButton, Modal } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import './Modaltemplate.css'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';


const Modaltemplate = ({ children, title }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <IconButton onClick={handleOpen}>{title}</IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className='style'>
                       
                            <IconButton className='buttonPos'>
                                <CloseSharpIcon onClick={handleClose} />
                            </IconButton>
                    
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default Modaltemplate