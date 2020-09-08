import React, { Component } from 'react'

 class IngredientBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity : 0
        }   
    }
    //
    handleChange = ({target}) => { this.setState({quantity: target.value } )}
    //
    handleClick = () => {
          this.props.addProduct({
            product: {
             name: this.props.item.name, 
             id : this.props.item._id
            }, 
            quantity: this.state.quantity})

          this.setState(
            {quantity: 0})
     }

    render() {
        return (
            <div>   
               <div className="box" key={this.props.index}>
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img className="productImg" src={this.props.item.productImgUrl} alt="img"/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{this.props.item.name} {this.props.item.format}Cl</strong> <br />
            <small>Price: {this.props.item.price}€</small> <br/>
            <small>{this.props.item.info}</small>
          </p>
        </div>  
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input onChange={this.handleChange} value={this.state.quantity} name="quantity" className="input" type="number" placeholder="Select amount" />
          </div>
          <div className="control">
            <button onClick={this.handleClick} className="button is-primary">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div> 
            </div>
        )
    }
}

export default IngredientBox
