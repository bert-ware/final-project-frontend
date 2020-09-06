import React, { Component } from 'react'

export class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe : ""
        }
    }

    render() {

        return (
            <div>
                <button type="submit" className="button is-info">Submit</button>
            </div>
        )
    }
}

export default RecipeForm
