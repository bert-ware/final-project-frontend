import React, { Component } from 'react'
//import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Carrousel.css';
import "bootstrap/dist/css/bootstrap.min.css";








export class Carrousel extends Component {

    render() {
            
        return (
          <div>
            <Slider className="slider-wrapper">
            <div
                
                className="slider-content"
                style={{
                  background: `url('${this.props.image}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{this.props.title}</h1>
                  {/* <p>{item.description}</p> */}
                </div>
              </div>
            </Slider>
          </div>
        );
    }
}

export default Carrousel
