import React from 'react'
import { handleLogin, isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'

class Login extends React.Component{
    state = {
        userName: ``,
        password: ``
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        handleLogin(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/blog-list`)
        }
    return (
        <>
            <h2>Log in</h2>
            <form method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`blog-list`)
                    }} >
                <label>
                    Username: 
                    <input type="text" name="userName" onChange={this.handleUpdate} />
                </label>
                <label>Password: 
                    <input type="text" name="password" onChange={this.update} />
                </label>
                <input type="submit" value="Log In" />
            </form>
                
        </>
    )
    }
}

export default Login