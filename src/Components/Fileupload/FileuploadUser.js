import React, { Component } from 'react'
import axios from "axios"

export class Fileupload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser,  
            img : this.props.loggedInUser.loggedInUser.userImgUrl,
            selectedFile: null,
        }
    }
    fileSelectHandler = event => {
        this.setState({
          selectedFile : event.target.files[0],
        })
      }
      fileUploadHandler = () => {
        
        const formData = new FormData()
        formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name)
        axios.put("http://localhost:3000/api/user/" + this.state.loggedInUser.loggedInUser._id , formData, {withCredentials : true})
          .then(response => {
          console.log(response.data)
          console.log(response.data.userImgUrl)
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
        return (
            <div>
            <input type="file" onChange={this.fileSelectHandler}/>
              <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default Fileupload
