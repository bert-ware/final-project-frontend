import React from 'react'


function Search(props) {
    
    return (
        <div className="searchBar">             
            <div className="field has-addons">              
                 <input  className="input" type="text" placeholder="Search ingredient" onChange= {props.handleSearchParam}
                 value={props.searchParam}
                 />                
            </div>
        </div>
    )
}
export default Search
