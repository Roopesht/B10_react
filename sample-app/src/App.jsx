import { useState } from 'react'
import './App.css'
import Cricket from './cricket.jsx'
import Events from './events.jsx'

function App() {
  const [matchStarted, setMatchStarted] = useState(false)

  return (
    <>
    { matchStarted ?
    <Cricket /> : <p>Match has not started yet</p> }


    <button onClick={() => setMatchStarted(! matchStarted)}>Match started: {matchStarted} </button>
    </>
  )
}

export default App
