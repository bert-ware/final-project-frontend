import React, { Component } from 'react';
import { Redirect } from "react-router-dom"

export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser
        }
    }
    render() {
        if (!this.state.loggedInUser) {
            return <Redirect to='/login'/>
          }
         
           if (this.state.loggedInUser) {
             
             return   <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img className="avatartImg" src={this.state.loggedInUser.loggedInUser.userImgUrl} alt="User avatar"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Bienvenido {this.state.loggedInUser.loggedInUser.name}!</strong> <br />
              <small>Email: {this.state.loggedInUser.loggedInUser.email} </small> <br/>
              <input type="file"/>
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
