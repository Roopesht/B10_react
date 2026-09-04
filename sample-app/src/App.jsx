import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

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
  const [qty, setQty] = useState(0)
  const increment = () =>{
        setQty(qty+1);
    };
     const decrement = () =>{
      if (qty >0)
        setQty(qty-1);
    };
  return (

    <>
    name: {props.name} <br/>
    qty: {qty}

    <button onClick={increment} >Increment</button>
    <button onClick={decrement}>Decrement</button>
    
    </>
  )
}

function Names(props) {
  return (
    <>
    <h2> {props.name}</h2>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        
        <Product name="Potato" />
        <Product name="Tomato" />
        
      
     
    </>
  )
}

export default App
