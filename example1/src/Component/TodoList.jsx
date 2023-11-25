import React,{useState} from 'react'

const TodoList = () => {
   const[count,setCount]=useState("");
   const[list,setList]=useState([]);

  const handleClick=()=>{
    // setList([...list,count])
    setList((list)=>{
        const updated=[...list,count]
        console.log(updated)
        setCount('')
        return updated
    })
    }

   const removeList=(i)=>{
    const updatedList=list.filter((ele,id)=>{
        return i!=id
    })
    setList(updatedList)
   }
   const removeAll=()=>{
      setList([])
   }
  return (
    <>
    <div className='container'>
     <div className='container-head'>TODO LIST</div>
      <input type="text"  placeholder='Add Todo' value={count} onChange={(e)=>setCount(e.target.value)}/>
    <button onClick={handleClick}>Add</button>
    <p className='list-heading'> Here is your list:</p>
    {list!=[] && list.map((data,i)=>{
        return(
            <>
            <p key={i}>
                   <div>{data}</div>
                   <div><button onClick={()=>removeList(i)} >remove</button></div>
            </p>
            
            </>
        )
    })}

    {list.length && 
      <button onClick={removeAll}>remove all</button>
    }
    </div>

    
    </>
  )

  }
export default TodoList