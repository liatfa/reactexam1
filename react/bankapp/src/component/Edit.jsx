import React,{useState} from 'react'

export default function Edit(props) {
  const [changeName,setChangeName]=useState();
  const [changeId,setChangeId]=useState();
  const [changeMoney,setChangeMoney]=useState();
  return (
    <div>

<input onChange={(e)=>{setChangeName(e.target.value)}} type="text" placeholder='Enter your name'/> <br />
  <input onChange={(e)=>{setChangeId(e.target.value)}} type="number" placeholder='Enter your id' /> <br />
  <input onChange={(e)=>{setChangeMoney(e.target.value)}} type="number" placeholder='Enter amount of money' /> <br />
  <button onClick={()=>{props.edit()}}>change details</button>
    
    </div>
  )
}
