import React,{useState} from 'react'
import TodoList from './Component/TodoList';
import Click from './Component/Click';
import UseRef from './Component/UseRef';
import Project1 from './Component/project1';
import Project2 from './Component/project2';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';



const App = () => {
  const [count,setCount]=useState(0);

  const handleClick=()=>{
    setCount(count+1)
  }


  return (
    <>
    <div>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>Click me </button> */}
    </div>
    <div>
      {/* <TodoList/> */}
      {/* <Click/> */}
      {/* <UseRef/> */}
      
    </div>
    <div>
    {/* <Project1/> */}
    {/* <Project2/> */}
    </div>
    <div>
      <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/contact" component={Contact}/>
    </Switch>
      </Router>
    
    </div>
    </>
  )
}

export default App