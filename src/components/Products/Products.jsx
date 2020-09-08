//REFACTOR A FUNCTIONAL
import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import AddProduct from "../AddProduct/AddProduct"
export class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/products/", {withCredentials: true})
      .then((response) => {
        this.setState({
          products: response.data,    
        })
      })
      .catch((err) => console.log(" ESTE ES EL ERROR", err))
  }
  render() {
    const products = this.state.products.map((product) => (
      <div key={product._id}>
        <h1>
          <Link to={"/products/" + product._id}>{product.name}</Link>
        </h1>
        <hr></hr>
      </div>
<<<<<<< HEAD
    ))

=======
    ));
>>>>>>> 0e9209f81449441a66a5622298f79d6d0556434e
    let add = ""
    //Descomentar línea 34 & 37 para validación con usuario
    //if (this.props.user) {
      add = <AddProduct updateData={() => this.componentDidMount()} />  
    //}
    return (
      <div className="container">
        <div style={{ width: "60%", float: "left" }}>
          <h1>Products List</h1>
          {products}
        </div>
        <div style={{ width: "40%", float: "right" }}>{add}</div>
      </div>
    );
  }
}
export default Products;