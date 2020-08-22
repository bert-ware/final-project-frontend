import React, { Component } from 'react'
import axios from "axios"
export class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            product: {}
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/api/products/" + this.state.id)
        .then(response => {
            this.setState({
                product: response.data
            })
        })
    }
    render() {
        return (
            <div>
            <h1>{this.state.product.name}</h1>
            <h2>{this.state.product.price}$</h2>
            <h3>{this.state.product.graduation}{this.state.product.format}</h3>
            <p>{this.state.product.info}</p>
            </div>
        )
    }
}
export default ProductDetails