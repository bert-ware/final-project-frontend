import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import axios from "axios"


export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser,
            selectedFile: null,
            img: this.props.loggedInUser.loggedInUser.userImgUrl
        } 
  }
         fileSelectHandler = event => {
          this.setState({
            selectedFile : event.target.files[0],
          })
        }
        fileUploadHandler = () => {
          console.log(this.state.loggedInUser.loggedInUser._id)
          
          const formData = new FormData()
          formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name)
          axios.put("http://localhost:3000/api/user/" + this.state.loggedInUser.loggedInUser._id , formData, {withCredentials : true})
            .then(response => {
            console.log(response.data)
           this.setState({
              img: response.data.userImgUrl
            })  
           const updatedUser = {
                ...this.props.loggedInUser.loggedInUser
            }
            updatedUser.userImgUrl = response.data.userImgUrl
            this.props.callback(updatedUser)
           
          })
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
            <img className="avatartImg" src={this.state.img} key={this.state.img} alt="User avatar"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Bienvenido {this.state.loggedInUser.loggedInUser.name}!</strong> <br />
              <small>Email: {this.state.loggedInUser.loggedInUser.email} </small> <br/>

              <input type="file" onChange={this.fileSelectHandler}/>
              <button onClick={this.fileUploadHandler}>Upload</button>
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
