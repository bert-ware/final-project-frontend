import React, { Component } from 'react'
//import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Carrousel.css';
import "bootstrap/dist/css/bootstrap.min.css";

const content = [
	{
		title: 'DrinkApp',
		// description:
		// 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		image: './img/drinks/signupslider.png',
	},
	
];



// function Carrousel() {
//     const infoSlider = content.map((item, index) => (
//         <div
//             key={index}
//             className="slider-content"
//             style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//             <div className="inner">
//                 <h1>{item.title}</h1>
//                 {/* <p>{item.description}</p> */}
//             </div>
        
//         </div>
//     ))




//     return (
//         	<div>

// 		<Slider className="slider-wrapper">
// 			{infoSlider}
// 		</Slider>
// 	</div>
//     )
// }

// export default Carrousel





export class Carrousel extends Component {
    constructor(props){
        super(props)
    }
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
