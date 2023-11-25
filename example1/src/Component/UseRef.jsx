import React,{useState,useEffect,useRef} from 'react'

const UseRef = () => {
    const[count,setCount]=useState("khush");
    const refEle=useRef("");
    console.log(refEle)

    const reset=()=>{
        setCount("");
        refEle.current.focus();

    }
    const handleClick=()=>{
        refEle.current.style.color="blue";
        refEle.current.value="dim"
    }

  return (
    <>
    <h1>use ref</h1>
    <input ref={refEle} type="text" value={count} onChange={(e)=>setCount(e.target.value)} />
    <button onClick={reset}>reset</button>
    <button onClick={handleClick}>handleClick</button>
    </>
  )
}

export default UseRef