import React from 'react'
import signup from "../../assets/signup.png"
import Footer from '../../components/footer/footer'
import "./signup.css"
import Reg from '../../components/Reg/Reg'

const Signup = () => {
  return (
    <center>
        <div className='row mt-5'>
            <div className='box1 col  d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block '>
                
                <img src={signup} alt='loginpic' className='loginpic'/>
            </div>
            <div className='box2 col'>
                <Reg/>
               
            </div>

        </div>
        <Footer/>
    </center>
)
}

export default Signup