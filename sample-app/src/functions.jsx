import { useState } from 'react'

function Welcome(props) {
  return (
    <>
    <h1>Hello</h1>

    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => { setCount(count + 1) }
  return (
    <>
    Count = {count}

    <button onClick={increment}>Increment</button>
    </>
  )
}

function Product(props) {
  const increment = () =>{
        props.setQty(props.qty+1);
    };
     const decrement = () =>{
      if (props.qty >0)
        props.setQty(props.qty-1);
    };
  return (

    <>
    name: {props.name} <br/>
    qty: {props.qty}

    <button onClick={increment} >Increment</button>
    <button onClick={decrement}>Decrement</button>
    
    </>
  )
}

function Total(props){
  return (

    <>Total: {props.potatoQty + props.chilliQty} </>
  );
}

function Names(props) {
  return (
    <>
    <h2> {props.name}</h2>
    </>
  )
}
export  {Product, Total};