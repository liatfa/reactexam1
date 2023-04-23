import './App.css';
import { useState } from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import HomePage from './component/HomePage';
import Admin from './component/Admin';
import Edit from './component/Edit';

function App() {  
const [client,setClient]=useState([]);

const addClient=(name,id,money)=>{
setClient([...client,{name:name,id:id,money:money,expenses:[]}]);  
}

const action=(index,company,spending)=>{
let temp={company:company,spending:spending}
client[index].expenses.push(temp);
setClient([...client])
}

const edit=(changeName,changeId,changeMoney)=>{
setClient([...client,{name:changeName,id:changeId,money:changeMoney}])
}

  return (
  <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<SignIn/>} />
  <Route path='/signup' element={<SignUp addClient={addClient}/>} />
  {/* {client.map((val,index)=>{
  return <Route path='/homepage' element={<HomePage edit={edit} val={val} index={index} action={action} client={client}/>} />  */}
 <Route path='/homepage' element={<HomePage edit={edit} action={action} client={client}/>} /> 
  {client.map((val,index)=>{
  return <Route path='/admin' element={<Admin val={val} index={index}/>} />
  })}
  
  <Route path='/edit' element={<Edit edit={edit}/>} />
  </Routes>
  </BrowserRouter>

  
    </div>
  );
}

export default App;
