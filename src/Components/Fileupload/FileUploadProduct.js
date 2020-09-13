import React, { Component } from 'react'
import axios from "axios"

export class Fileupload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser.loggedInUser,  
            img : this.props.product.productImgUrl,
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
        axios.put("http://localhost:3000/api/products/image/" + this.props.product._id , formData, {withCredentials : true})
          .then(response => {
         this.setState({
            img: response.data.productImgUrl
          })  
          const updatedProduct = {
            ...this.props.product
        }
        updatedProduct.productImgUrl = response.data.productImgUrl
        
       
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
