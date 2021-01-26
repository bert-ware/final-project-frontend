import React, {useState} from 'react'
import axios from "axios"

import "./FileUpload.css"

function FileUploadNew(props) {

    const [state, setState] = useState({
        loggedInUser: props.loggedInUser.loggedInUser,  
        selectedFile: null,
        section : props.section,
    
    })

    const fileSelectHandler = event => {
        setState({
          ...state,
          selectedFile : event.target.files[0],
        })
      }

    const fileUploadHandler = () => {
        
        const formData = new FormData()
        formData.append("myFile", state.selectedFile, state.selectedFile.name)
        //PUT PARA CAMBIAR IMAGEN
        axios.put(process.env.REACT_APP_API_URL +`/${props.section}/image/` + props.item._id , formData, {withCredentials : true})
          .then(response => {
            props.changeImg(response.data.imgUrl)
      })
    }  

    return (
        <div>
            <div className="fileUpload-container">
              <input type="file" id="actual-btn"  hidden onChange={fileSelectHandler}/>
              <label id="fileLabel" htmlFor="actual-btn">Choose Image</label>
              <button id="fileBtn" onClick={fileUploadHandler} className="button is-success">Upload</button>
            </div>
        </div>
    )
}

export default FileUploadNew
