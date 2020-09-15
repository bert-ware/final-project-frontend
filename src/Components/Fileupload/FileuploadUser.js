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
            // <div className='col-lg-7 contact-right mt-lg-0 mt-5 testing-centered'>
            // <input className="form-control" type="file" onChange={this.fileSelectHandler}/>
            //   <button className="btn submit-contact-main ml-auto" onClick={this.fileUploadHandler}>Upload</button>
            // </div>
            <div className="input-group">
            <div className="input-group-prepend">
              <span onClick={this.fileUploadHandler} className="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"  onChange={this.fileSelectHandler}/>/>
              <label className="custom-file-label"  htmlFor="inputGroupFile01">Profile image</label>
            </div>
          </div>
        )
    }
}

export default Fileupload
