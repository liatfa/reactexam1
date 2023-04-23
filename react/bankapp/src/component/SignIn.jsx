import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [name,setName]=useState();
  const [pass,setPass]=useState();
  const nav=useNavigate();

  const validate=()=>{
  if (name!=='ADMIN' && pass) {
  alert('name/pass is unvalid')
  }  else{
   nav('/homepage');
  }

  }
  return (
    <div>
  <input type="text" placeholder='Enter your name' /> <br />
  <input type="password" placeholder='Enter your password' /> <br />
  <a href='/SignUp'> Create an account</a> <br />
  <button onClick={()=>{validate()}}>SIGN IN</button>
    </div>
  )
}
