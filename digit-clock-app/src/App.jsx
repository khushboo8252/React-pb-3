import { useState } from 'react'
import './App.css'

function App() {
  let newTime= new Date(). toLocaleTimeString();
  const [count, setCount] = useState(newTime);
  const handleClick=()=>{
    newTime=new Date(). toLocaleTimeString();
    setCount(newTime)
  }
  setInterval(handleClick,1000)

  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default App
