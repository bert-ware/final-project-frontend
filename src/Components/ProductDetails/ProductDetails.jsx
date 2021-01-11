import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'
import FileUploadNew from '../Fileupload/FileUploadNew'

import "./ProductDetails.css"

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            product: {},
            redirect: false
        }
    
    }
    
     //Recogida datos API
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL +"/products/" + this.state.id ,{withCredentials: true})
        .then(response => {
            
            this.setState({
                product: response.data
            })
            console.log(this.state.product._id)
        })
    }
    //Handle borrar
    handleClick = () => {
        axios.delete(process.env.REACT_APP_API_URL +"/products/" + this.state.id, {withCredentials: true})
        .then(() => this.setState({ redirect: true }))  
    }
    
    render() {
        //Redirect a products
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to='/products'/>
        }

        return (
            <div>
                <h1>Product Details</h1>
                    <div className="productDetailsPage">
                     <img className="productImgDetails" src={this.state.product.imgUrl} alt="Product Img"></img>
                     <h1>{this.state.product.name}</h1>
                     <h2>Unitary cost: {this.state.product.price}$</h2>  
                     <h3>Format: {this.state.product.format}</h3>
                     <p>{this.state.product.info}</p>
                     <button onClick={this.handleClick} className="button is-danger" id="productDetailsDeleteBtn">Delete product</button>
                     <FileUploadNew {...this.props} item={this.state.product} section="products" />
                </div>
            </div>
        )
    }
}
export default ProductDetails