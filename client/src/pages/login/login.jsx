import React from 'react'
import './login.css'
import login from "../../assets/login.png"
import Logincomp from "../../components/login/login"
import Footer from '../../components/footer/footer'
const Login = () => {
    return (
        <center>
            <div className='row mt-5'>
                <div className='box1 col  d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block '>
                    
                    <img src={login} alt='loginpic' className='loginpic'/>
                </div>
                <div className='box2 col'>
                    
                    <Logincomp/>
                </div>

            </div>
            <Footer/>
        </center>
    )
}

export default Login