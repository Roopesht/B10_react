import { useState } from 'react'

function Cricket(props) {
  const [active,setActive] = useState(true);
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  let fours = 1;
  const increment = () =>{
        fours = fours + 1;
        setRuns(runs+1);
    };
     const decrement = () =>{
      if (qty >0)
        setQty(qty-1);
    };
  return (

    <>
    <p >Runs: {runs}  </p>
    
    Wickets: {wickets}<br/>
    Fours: {fours}
<button onClick={increment} disabled={!active}>FOUR</button>

<button onClick={() => setActive(!active)}>Toggle Active</button>


    </>
  )
}
export default Cricket;
