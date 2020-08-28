import React, { Component } from 'react'
import SimpleBottomNavigation from '../BottomNavigation/BottomNavigation'
import { Link } from "react-router-dom"


export class Home extends Component {
    render() {
        return (
            <div>   
                <h1>Este es el Home</h1>
               <h2> <Link to={"/products/" }>Products</Link></h2>
               <h2> <Link to={"/providers/" }>Providers</Link></h2>
               <h2> <Link to={"/recipes/" }>Recipes</Link></h2>
               <h2> <Link to={"/user-profile" }>user profile</Link></h2>
                <SimpleBottomNavigation/>

            </div>
        )
    }
}

export default Home
