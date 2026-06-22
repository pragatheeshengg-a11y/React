import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [page, setpage] = useState(1);
  const [user,setuser]=useState([]);
  const pageperuser=3;
  const start=((page-1)*pageperuser);
  const end=(start+pageperuser);

  function pagination(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((data)=>{
      const sliceduser =data.slice(start,end)
    setuser(sliceduser);
  });
      
  }

  useEffect(() => {
  pagination();
}, [page]);



  return (
    <>
    <h1>PAGINATION</h1>
    {user.map((user,index)=>(
      <ul>
        <li key={index}>{user.username}</li>
      </ul>
    ))}
    <button 
    disabled={page===1}
    onClick={()=>setpage(page-1)}>
      PRE</button>
    <span>Page:{page}</span>
    <button
    disabled={page==4}
    onClick={()=>setpage(page+1)}>
      NEXT</button>  

    </>
    
  )
}

export default App
