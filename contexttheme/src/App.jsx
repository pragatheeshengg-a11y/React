//import { useContext } from 'react';
import Home  from "./home";
import Navbar from './Navbar';
//import 
import './App.css'
import { ThemeContext} from './context';
import { useContext } from "react";

function App() {

  const {theme}=useContext(ThemeContext)
  

  return (
    <>
    <div className={theme}>  
      <Navbar/>
      <Home/>
    
    </div>  
    </>
  )
}

export default App
