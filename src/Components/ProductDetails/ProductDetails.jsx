import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'
import "./ProductDetails.css"
import FileUploadProducts from "../Fileupload/FileUploadProduct"

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
        axios.get("http://localhost:3000/api/products/" + this.state.id ,{withCredentials: true})
        .then(response => {
            this.setState({
                product: response.data
            })
        })
    }
    //Handle borrar
    handleClick = () => {
        axios.delete("http://localhost:3000/api/products/" + this.state.id, {withCredentials: true})
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
            <img className="productImg" src={this.state.product.productImgUrl} alt="Product Img"></img>
            <h1>{this.state.product.name}</h1>

            <h2>Unitary cost: {this.state.product.price}$</h2>  

            <h3>Format: {this.state.product.format}</h3>
            <p>{this.state.product.info}</p>
            <button onClick={this.handleClick} className="delete">Delete</button>
            <FileUploadProducts {...this.props} product={this.state.product}/>
            </div>
        )
    }
}
export default ProductDetails