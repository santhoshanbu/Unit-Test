import React from "react" 

function Search(){
    
    return (
        <input type='text' onChange={(e)=>e.target.value} title='search'/>
    )
}

export default Search