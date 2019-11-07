import React from "react"
import Button from "@material-ui/core/Button"
export default class User extends React.Component {
    state = {
        userName: ``,
        firstName: ``,
        lastName: ``,
        email: ``,
    }

    constructor(props) {
        super(props)
       
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onUserNameChange = (event) => {
        this.setState( { userName: event.target.value })
    } 

    handleInputChange = event => {
        const target = event.target
        const value = event.value
        const name = target.name
        this.setState({
            [name]: value
        })
        console.log('hello', this.state)

        
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('hi', this.state)
        alert(`Hey ${this.state.firstName} ${this.state.lastName} I can reach you at ${this.state.email}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h4>Want to connect? </h4>
                <label>
                    Username:
                <input type="text" name="userName" value={this.userName} onChange={this.onUserNameChange.bind(this)} />
                </label>
                <label>
                    Name:
                <input type="text" name="firstName" value={this.firstName} onChange={this.handleInputChange.bind(this)} />
                </label>
                <label>
                    <input type="text" name="lastName" value={this.lastName} onChange={this.handleInputChange.bind(this)} />
                </label>
                <label>
                    Email:
                <input type="text" name="email" value={this.email} onChange={this.handleInputChange.bind(this)} />
                </label>

                <Button type="submit" value="Submit">Connect</Button>

            </form>
        )
    }
}