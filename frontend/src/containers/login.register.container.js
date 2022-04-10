import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import LoginRegister from '../components/login.register/login.register'

class LoginRegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            email: '',


        }
    }
    
    registerSubmit = async () => {
        
        try {
            await axios.post('http://localhost:5000/user/register', {
                firstName: this.state.firstname,
                email: this.state.email,
       
            })
        }
        catch (err) {
            if (err.response.data.msg === "Email already exist")
                this.setState({ notificationRegister: 'Email already exist' })
            else
                this.setState({ notificationRegister: 'Đăng Ký Thất Bại' })
            return
        }
        this.setState({ notificationRegister: 'Đăng Ký Thành Công' })
    }

  
    render() {
        return (
            <div>
                <LoginRegister
                    setFirstname={(value) => this.setState({ firstname: value })}
                    setEmail={(value) => this.setState({ email: value })}
                    registerSubmit={() => this.registerSubmit()}

                />
            </div>
        )

    }
}


export default LoginRegisterContainer