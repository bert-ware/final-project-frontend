import React, { Component } from 'react'
import axios from "axios"

export class Fileupload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser.loggedInUser,  
            img : this.props.Provider.providerImgUrl,
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
        axios.put("http://localhost:3000/api/providers/image/   " + this.props.Provider._id , formData, {withCredentials : true})
          .then(response => {
         this.setState({
            img: response.data.providerImgUrl
          })  
          const updatedProvider = {
            ...this.props.Provider
        }
        updatedProvider.providerImgUrl = response.data.providerImgUrl
        
       
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
