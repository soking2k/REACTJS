import React, { Component } from 'react'

import ContentLoginRegister from './content.login.register'
const Home = ({  setFirstname, setEmail,registerSubmit}) => (
        <div>
         
            <ContentLoginRegister
                setFirstname={(value) => setFirstname(value)}
                setEmail={(value) => setEmail(value)}
                registerSubmit={() => registerSubmit()}

            />
          
        </div>

    )

export default Home