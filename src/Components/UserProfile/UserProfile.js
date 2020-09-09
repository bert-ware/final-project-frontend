import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.user
        }
    }
    render() {
       /*  if (!this.state.isloggedin) {
            return <Redirect to='/login'/>
          } */
         
           if (this.state.loggedInUser) {
             
             return   <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img className="avatartImg" src={this.props.user.loggedInUser.userImgUrl} alt="User avatar"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Bienvenido {this.props.user.loggedInUser.name}!</strong> <br />
              <small>Email: {this.props.user.loggedInUser.email}</small> <br/>
            </p>
          </div>  
        </div>
      </article>
      
      </div>
            
          }

        
        return (
            <div>
            <h1>Profile</h1>
                
            </div>
        )
    }
}

export default UserProfile
