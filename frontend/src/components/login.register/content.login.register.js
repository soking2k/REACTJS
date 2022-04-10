import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function ContentLoginRegister({ setFirstname, setEmail, registerSubmit, notificationRegister }){
        <h2>New User Signup!</h2>

      
        let xhtmlRegister='';

        xhtmlRegister =  <div className="signup-form">
                <div className = 'login-content col-sm-6'>

               
            <h2>New User Signup!</h2>
            <div className="noti">{notificationRegister}</div>

            <input type="email"
                placeholder="Email address"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <input type="text"
                placeholder="First name"
                onChange={(e) => { setFirstname(e.target.value) }}
            />
           
            <button
                className="btn btn-default"
                onClick={() => registerSubmit()}
            >Signup
                </button>
        </div>
        </div>
     
        return(
            xhtmlRegister

        );
    }
export default ContentLoginRegister