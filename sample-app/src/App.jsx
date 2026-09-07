import { useState } from 'react'
import './App.css'
/*import Cricket from './cricket.jsx'
import Events from './events.jsx'
import DemoInput from './demo_input.jsx'
import DemoForm from './form_code.jsx'*/
import {Product, Total} from './functions.jsx'
function App() {
  const [potatoQty, setPotatoQty] = useState(0)
  const [chilliQty, setChilliQty] = useState(0)
  
  return (
    <>
    <Product name="Potato" qty={potatoQty} setQty={setPotatoQty}></Product>
    <Product name="Chillies" qty={chilliQty} setQty={setChilliQty}></Product>
  
  <br></br>
  <Total potatoQty={potatoQty} chilliQty={chilliQty} />

        </>
  )
}

export default App
