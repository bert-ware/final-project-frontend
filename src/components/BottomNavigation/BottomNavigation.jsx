// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// //import RestoreIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import FaceIcon from '@material-ui/icons/Face';
// //import { sizing } from '@material-ui/system';

// const useStyles = makeStyles({
//   root: {
//     //width: 414,
//     boxShadow: '5px 3px 0px 2px rgba(255, 255, 135, .3)'
//   },
// });

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <div className="testing">
//       <BottomNavigation  width="75%"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         showLabels
//         className={classes.root}
//       >
//         <BottomNavigationAction label="Recents" icon={<FaceIcon />} />
//         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//       </BottomNavigation>
//     </div>
//   );
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import './BottomNavigation.css'

export class BottomNavigation extends Component {
  render() {
    return (
      <div className='fondo'>
        <div className="navbar">
        <Link to={"#"}> Profile</Link>
        <Link to={"/products/"}> products</Link>
        <Link to={"/providers/"}> Providers</Link>
        
  
</div>
        {/* <h1>
          <Link to={'#'}> Icon 1</Link>
          <Link to={'#'}> Icon 2</Link>
          <Link to={'#'}> Icon 3</Link>
        </h1> */}
      </div>
    );
  }
}

export default BottomNavigation;
