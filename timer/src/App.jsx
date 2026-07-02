import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [time,settime]=useState(0);
  const [timercon,settimercon]=useState(false);
  useEffect(()=>{
    let interval;
    if(timercon){
      interval=setInterval(()=>{
        settime((pre)=>pre+1);
      },1000);
    }
    return ()=>clearInterval(interval);
  },[timercon])

  const hours=Math.floor(time/3600);
  const mins=Math.floor((time%3600)/60);
  const sec=time%60;

  return (
    <>
    <h1>
      {String(hours).padStart("2",0)}:
      {String(mins).padStart("2",0)}:
      {String(sec).padStart("2",0)}
    </h1>
    <button
    onClick={()=>settimercon(true)}>
      Start</button>
    <button
    onClick={()=>settimercon(false)}>Stop</button>
    <button
    onClick={()=>settime(0)}>Reset</button>
    </>
    
  )
}

export default App
