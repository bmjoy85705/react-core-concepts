import React, { useState, useEffect, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const product =[{
  name:"Photoshop",price:"$500"
},{
  name:"illustrator",price:"$300"
},{name:"Photoshop",price:"$500"
},{
  name:"illustrator",price:"$300"
}]

function App() {
  var style = {
    color: 'white',
    backgroundColor:"cyan"
  }
  let name = "mahfuz";
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>

        <Products name={product[0].name} price={product[0].price}></Products>
        <Products name={product[1].name} price={product[1].price}></Products>
       
       <Person name="rubel" nayeka="moushumi"></Person>
       <Person name="omor sani" nayeka="moyouri"></Person>

       <ul>
         {
           product.map(elem=><Products name={elem.name} nayeka="moyouri"></Products>
           )
         }
       </ul>
      </header>
    </div>
  );
}
function User() {
  const [users,setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> {
      setUser(data)
     
    })
  },[])
  return(
    <div>
      <h1>dynamic user:{users.length}</h1>
  
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count,countSet]=useState(0);
    const increaseHandler = ()=>{
      const newCount = count+1;
      countSet(newCount);
    }    
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseHandler}>increase count</button>
    </div>
  )
  }
function Products(props) {
  const productStyle ={
    border:"1px solid white",
    borderRadius:"5px",
    backgroundColor:"cyan",
    height: "200px",
    width:"200px",
    boxShadow:"5px 5px 10px white",
    float: "left"
  }
  
  return(
    <div style={productStyle}>
     <h3>{props.name}</h3>
     <h2>{props.price}</h2>
     <button>Buy now</button>
    </div>
  )
  
}
function Person(props){
  return(
    <div style={{border:"2px solid yellow",
    margin:"5px"
}}>
      <p>{props.name} was king in bangla flim industry</p>
<h1>nayeka:{props.nayeka}</h1>
    </div>
  )
}

export default App;
