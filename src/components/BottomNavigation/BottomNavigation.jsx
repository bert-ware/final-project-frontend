// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import './BottomNavigation.css'

// export class BottomNavigation extends Component {
//   render() {
//     return (
//       <div className='fondo'>
//         <div className="bottomNav">
//         <Link to={"/user-profile"}> Profile</Link>
//         <Link to={"/products/"}> Products</Link>
//         <Link to={"/providers/"}> Providers</Link>
//         <Link to={"/recipes/"}> Recipes</Link>
//         <Link to={"/"}> Home</Link>
//         </div>
//         {/* <h1>
//           <Link to={'#'}> Icon 1</Link>
//           <Link to={'#'}> Icon 2</Link>
//           <Link to={'#'}> Icon 3</Link>
//         </h1> */}
//       </div>
//     )
//   }
// }
// export default BottomNavigation;

import React from "react";
import { Link } from "react-router-dom";
import "./BottomNavigation.css";

function BottomNavigation() {
  return (
    // <div className="bodyBar">
    //   <footer className="page-footer">
    //     <div className="row" id="frow">
    //       <div
    //       id='paddingUse'
    //         className="col s12"
    //       >
    //         <ul className="tabs tabs-fixed-width transparent white-text">
              
    //             <Link className="white-text" to={"/user-profile"}>
    //             <li className="tab col s3 white-text">
    //               PROFILE
    //             </li>
    //             </Link>
              
              
    //             <Link to={"/products/"} className="white-text">                  
    //             <li className="tab col s3">PRODUCTS</li>                  
    //             </Link>  
                
                          
    //           <li className="tab col s3">
    //             <Link to={"/recipes/"} className="white-text">
    //               RECIPES
    //             </Link>
    //           </li>
    //           <li className="tab col s3">
    //             <Link to={"/providers/"} className="white-text">
    //               PROVIDERS
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <div className='FooterNav'>
      <div>
      <Link to={"/user-profile"}>
        <div>
        <img src='./img/Profile.svg'  alt='profile icon'/>
        </div>
        
        Profile
        </Link>
      </div>
      
      <div>
      <Link to={"/recipes/"}>
        <div>
        <img src='./img/Recipes.svg'  alt='profile icon'/>
        </div>
        Recipes
        </Link>
      </div>

      <div>
      <Link to={"/recipes/"}>
        <div>
        <img src='./img/Provider.svg'  alt='profile icon'/>
        </div>
        Providers
        </Link>
      </div>
     

    </div>
  );
}

export default BottomNavigation;
