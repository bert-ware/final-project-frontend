import React, { Component } from 'react'
import axios from "axios"

export class Fileupload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.loggedInUser.loggedInUser,  
            img : this.props.recipe.providerImgUrl,
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
        axios.put(process.env.REACT_APP_API_URL + "/recipes/image/" + this.props.recipe._id , formData, {withCredentials : true})
          .then(response => {
         this.setState({
            img: response.data.recipeImgUrl
          })  
          const updatedRecipe = {
            ...this.props.recipe
        }
        updatedRecipe.recipeImgUrl = response.data.recipeImgUrl
        
       
      })
    }
     

      
    render() {
        return (
            <div>
            <input type="file" onChange={this.fileSelectHandler}/>
              <button className="button is-success" onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default Fileupload
