import React, { Fragment } from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <Fragment>
      <center className='mb-5 mt-2  fixed-bottom'>
        <p>
          <a href="./" className="link-secondary mx-3">Help</a>
          <a href="./" className="link-secondary mx-3">privacy</a>
          <a href="./" className="link-secondary mx-3">Term</a>
          <a href="./" className="link-secondary mx-3">Location</a>
        </p>
        <p className='mt-3'>Copyright @ 2023</p>

      </center>


    </Fragment>
  )
}

export default Footer