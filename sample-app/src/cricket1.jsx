import { useState } from "react";

function Cricket(props) {
  const [runs, setRuns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const addFour = (r) => {
    setLoading(true);
    //setTimeout( ,2000) await, async
    setRuns([4]);
    setLoading(false);
  };

  return (
    <>
      {runs.length === 0 && (
        <p style={{ color: "gray" }}>Match has not begun yet!</p>
      )}

      {runs.length > 0 && (
        <>
          <p>Runs: </p>
          <ul>
            {runs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
      <button onClick={addFour} >4</button>
    </>
  );
}
export default Cricket;
