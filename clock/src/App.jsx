import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [time,settime]=useState(new Date());

  useEffect(()=>{
    const timmer=setInterval(()=>{
    settime(new Date())

  },1000);
  return ()=>clearInterval(timmer);//will stop this execution when component is out of there eg,switch to other page using nav bar
  },[])//without useeffect will lead every rerender on interval may change
   
  

  return (
    <>
    <h1>DIgital Clock</h1>
    <p>Time:{time.toLocaleTimeString()}</p>
    </>
    
  )
}

export default App
