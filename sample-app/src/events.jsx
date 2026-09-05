import { useState } from 'react'

function Events(props) {
    const [text, setText] = useState("In")

  return (
    <p 
    onMouseEnter={()=> setText('In') }
    onMouseLeave={() => setText('Out')}
    > {text} </p>
  )
}
export default Events;
