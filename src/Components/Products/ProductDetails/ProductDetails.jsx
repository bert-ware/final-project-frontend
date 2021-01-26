import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'
import ModalPrueba from "../../Modal/ModalPrueba.js"

import "./ProductDetails.css"

export class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            product: {},
            img: "",
            redirect: false
        }
        this.handleImgState = this.handleImgState.bind(this)
    }

    //Funcion lifting state up
    handleImgState(input) {
        this.setState({ img: input })
    }

    //Recogida datos API
    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + "/products/" + this.state.id, { withCredentials: true })
            .then(response => {
                this.setState({
                    product: response.data,
                    img: response.data.imgUrl
                })
            })
    }
    //Handle borrar
    handleClick = () => {
        axios.delete(process.env.REACT_APP_API_URL + "/products/" + this.state.id, { withCredentials: true })
            .then(() => this.setState({ redirect: true }))
    }

    render() {
        //Redirect a products
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/products' />
        }

        return (
            <div>
                <h1>Product Details</h1>
                <div className="productDetailsPage">
                    <h2>{this.state.product.name}</h2>
                    <br />
                    <img className="productImgDetails" src={this.state.img} alt="Product Img"></img>
                    <br />
                    <div className="btnContainer">
                        <button onClick={this.handleClick} className="button is-danger" id="productDetailsDeleteBtn">Delete product</button>
                        <ModalPrueba {...this.props} item={this.state.product} section="products" changeImg={this.handleImgState} />
                    </div>
                    <hr />
                    <h4><b>Unitary cost:</b></h4>  {this.state.product.price}€
                     <hr />
                    <h4><b>Format:</b></h4> {this.state.product.format} {this.state.product.typeFormat}
                    <hr />
                    <h4><b>Info:</b></h4>{this.state.product.info}
                    <hr />
                </div>
            </div>
        )
    }
}
export default ProductDetails