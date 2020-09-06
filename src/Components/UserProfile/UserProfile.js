import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'

export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.user.name,
        }
    }
    render() {
        //Redirect a login si no hay usuario logueado
  /*   if (!this.state.loggedInUser) {
      return <Redirect to='/login'/>
    } */
        
        return (
            <div>
            <h1>Este es el perfil de usuario</h1>
            
                <p>Welcome !!!</p>
            </div>
        )
    }
}

export default UserProfile
