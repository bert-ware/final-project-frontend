import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from 'react-router-dom'

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
        axios.get("http://localhost:3000/api/products/" + this.state.id)
        .then(response => {
            this.setState({
                product: response.data
            })
        })
    }
    //Handle borrar
    handleClick = () => {
        axios.delete("http://localhost:3000/api/products/" + this.state.id)
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
            <h1>{this.state.product.name}</h1>
            <h2>{this.state.product.price}$</h2>
            <h3>{this.state.product.graduation}{this.state.product.format}</h3>
            <p>{this.state.product.info}</p>
            <button onClick={this.handleClick} className="delete">Delete</button>
            </div>
        )
    }
}
export default ProductDetails