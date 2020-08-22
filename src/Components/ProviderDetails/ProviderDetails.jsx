import React, { Component } from 'react'
import axios from "axios"

export class ProviderDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.id,
            provider: {}
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/api/providers/" + this.state.id)
        .then(response => {
            console.log(response.data)
            this.setState({
                provider: response.data
            })
        })
    }

    render() {
        return (    
            <div>
            <h1>{this.state.provider.name}</h1>
            <h2>{this.state.provider.telephone}</h2>
            <h3>La direccion da error no se porque</h3>
            <p>{this.state.provider.info}</p>
                
            </div>
        )
    }
}

export default ProviderDetails
