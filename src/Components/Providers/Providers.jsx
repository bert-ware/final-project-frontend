//REFACTOR A FUNCTIONAL
import React, { Component } from "react";
import axios from "axios";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/api/providers/")
        .then((response) => {
          this.setState({
            providers: response.data
          });
        })
        .catch((error) => console.log(" ESTE ES EL ERROR", error));
  }
  render() {
    const providers = this.state.providers.map((provider) => (
      <div key={provider._id}>
        <h1>{provider.name}</h1>
      </div>
    ));
    return (
      <div className="container">
        <div style={{ width: "60%", float: "left" }}>
          <h1>Products List</h1>
          {providers}
        </div>
      </div>
    );
  }
}

export default Products;
