import { useState} from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [image, setimage] = useState()

  /*async function Getimg(){
    const response=await fetch("https://dog.ceo/api/breeds/image/random");
    const data=await response.json();
    setimage(data.message);
  }*/
  function Getimg(){
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response)=>response.json())
      .then((data)=>setimage(data.message));
    
  }
  

  return (
    <>
    <button onClick={Getimg} >Get</button>
    {(image &&(
      <img src={image} alt="img"/>
    )

    )}  
    
    </>
    
  )
}

export default App
