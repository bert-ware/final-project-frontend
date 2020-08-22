//REFACTOR A FUNCTIONAL
import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/api/products/")
        .then((response) => {
          this.setState({
            products: response.data
          });
        })
        .catch((err) => console.log(" ESTE ES EL ERROR", err));
  }
  render() {
    const products = this.state.products.map((product) => (
      <div key={product._id}>
        <h1><Link to={"/products/" + product._id}>{product.name}</Link></h1>
      </div>
    ));
    return (
      <div className="container">
        <div style={{ width: "60%", float: "left" }}>
          <h1>Products List</h1>
          {products}
        </div>
      </div>
    );
  }
}

export default Products;
