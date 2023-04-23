import React,{useState}from 'react'
import { Link } from 'react-router-dom';




export default function HomePage(props) {
const [flag,setFlag]= useState(false); 
const [company, setCompany]= useState();
const [spending, setSpending]= useState();

const showAction=()=>{
if (flag) {
return <div>
<input onChange={(e)=>{setCompany(e.target.value)}}type="text" placeholder='name of company' />
<input onChange={(e)=>{setSpending(e.target.value)}} type="number" placeholder='amount of money'/>
<button onClick={()=>{setFlag(false); props.action()}}>confirm</button>
</div>  
}else{
return   <div>
<button onClick={()=>{alert(props.val.money)}}>Balance</button> <br />
<button onClick={()=>{setFlag(true)}}>Action</button> <br />
<Link to={'/'}> <button>Exit</button> </Link><br />
<Link to={'/edit'}><button>Edit</button></Link>
    
</div>  
} 
}


  return (
    <div>
    {`hello ${props.client.name}`}
     <br />
    {showAction()}
        
    </div>
  )
}
