import { useState } from "react"
import React from 'react'
import Client from '../component/Client'


export default function Admin(props) {
const [flag,setFlag]=useState(true);  

const changeFlag=()=>{
setFlag(!flag)  
}

const show=()=>{
if (flag===false){
  return <Client/>
}else{
    return <div> {props.val.id} {props.val.name} <button>more details</button> </div> 
}  
}
  return (
  <div>
 
{show()}


    </div>
  )
}
