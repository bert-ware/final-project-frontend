import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import FileUploadUser from "../Fileupload/FileuploadUser"
import "./UserProfile.css"


export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser,
            img: this.props.loggedInUser.loggedInUser.userImgUrl
        } 
  }
        
    render() {
       
        if (!this.state.loggedInUser) {
            return <Redirect to='/login'/>
          }
         
        if (this.state.loggedInUser) {
             return   <div className="box" id="profilePage">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img className="avatartImg" src={this.state.img} key={this.state.img} alt="User avatar"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Bienvenido {this.state.loggedInUser.loggedInUser.name}!</strong> <br />
              <small>Email: {this.state.loggedInUser.loggedInUser.email} </small> <br/>
              <FileUploadUser {...this.props}/>
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
