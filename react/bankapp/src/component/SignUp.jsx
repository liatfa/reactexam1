import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
  const [name,setName]=useState();
  const [pass,setPass]=useState();
  const [confPass,setConfPass]=useState();
  const [id,setId]=useState();
  const [money,setMoney]=useState();
  const nav= useNavigate();

  const validate=()=>{
  if (id.length!==9){
    alert('id has to be 9 characters')
  }else if(name.length<4){
    alert('name has to be at least 4 characters')
  }else if(pass.length<6){
    alert('pass has to be at least 6 characters')
  }else if(confPass!==pass){
    alert('passwords do not match')
  }else if(money.length<0 || money.length>1000000){
    alert('amount of money must to be between 0 to 1000000')
  }
  props.addClient(name,id,money);
  nav('/homepage')
  }
  
  return (
    <div>
  <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter your name'/> <br />
  <input onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder='Enter your pass'/> <br />
  <input onChange={(e)=>{setConfPass(e.target.value)}} type="password" placeholder='Confirm pass'/> <br />
  <input onChange={(e)=>{setId(e.target.value)}} type="number" placeholder='Enter your id' /> <br />
  <input onChange={(e)=>{setMoney(e.target.value)}} type="number" placeholder='Enter amount of money' /> <br />
  <button onClick={validate}>SIGN UP</button>
  </div>
  )
}
