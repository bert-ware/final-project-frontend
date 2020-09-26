import React, { Component } from 'react'
import axios from "axios"
import './FileUpload.css'
import "bootstrap/dist/css/bootstrap.min.css";

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
        axios.put(process.env.REACT_APP_API_URL +"/user/" + this.state.loggedInUser.loggedInUser._id , formData, {withCredentials : true})
          .then(response => {
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
            <div className="input-group">
            <div className="input-group-prepend">
              <span onClick={this.fileUploadHandler} className="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div className="custom-file">
              <input style={{display : "none"}} type="file" className="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"  onChange={this.fileSelectHandler}/>
              <label className="custom-file-label"  htmlFor="inputGroupFile01">Profile image</label>
            </div>
          </div>
        )
    }
}

export default Fileupload
