import React,{useState} from "react" 

function Button(){
    const [value,setvalue]=useState('click me')
    const changetext=()=>{
        setvalue('clicked')
    }
    return (
        <button onClick={changetext} title='dummy'>{value}</button>
    )
}

export default Button