import { useState } from 'react'
import './App.css'

function App() {
  const [list,setlist] = useState("");
  const [todo,settodo] =useState([]);

  function addtodo(){
    if(list.trim()===""){
      return;
    }
    settodo([...todo,{
      text:list,
      completed:false
    }]);
    setlist("");
  }

  function deltodo(indexdel){
    settodo(
      todo.filter((list,index)=>index!==indexdel)
    )  
  }

  function checkboxtodo(indexcheck){
    settodo(
      todo.map((item,ind)=>
      ind==indexcheck?{...item,completed:!item.completed}:item)
    );
  }

  return (
    <>
    <h1>TODO LIST</h1>
    <input
    onChange={(e)=>setlist(e.target.value)}
    value={list}
    placeholder="Type ur List"
    />
    <button onClick={addtodo}>Add</button>
    <ul>
      {todo.map((list,index)=>(
        <li key={index}>{list.text}
        <input
        type="checkbox"
        value={list.completed}
        onChange={()=>checkboxtodo(index)}/>
        <span>{list.completed ?"completed":"Incompleted"}</span>
        <button onClick={()=>deltodo(index)}>DEL</button>
        </li>
        
      ))}
    </ul>

    </>
    
  )
}

export default App
