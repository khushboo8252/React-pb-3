import React,{useState,useEffect} from 'react'

const Click = () => {
    const[count,setCount]=useState(0);
    const[list,setList]=useState(0)

   useEffect(()=>{
   alert('you clicked me')
   },[count])
  return (
    <>
    <button onClick={()=>{
        setCount(count+1)
    }} >click{count}</button>
    
    <button onClick={()=>{
        setList(list+1)
    }} >click{list}</button>
    </>
  )
}

export default Click