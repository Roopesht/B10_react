import { useState } from 'react'

function DemoInput(props) {
    const [name, setName] = useState("");
    const setValue = (e) => {
      
      setName(e.target.value.toUpperCase()) //converts to upper case
        
      };
    

  
  return (

    <>
    <p> Input Demo </p>
    <input type="text"
      value={name}
      onChange={setValue}
    ></input>
    <p>Hello {name} </p>
    

    </>
  )
}
export default DemoInput;
