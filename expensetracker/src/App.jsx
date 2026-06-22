import { useState } from 'react'
import './App.css'

function App() {
  const [trans,settrans]=useState([]);
  const [text,settext]=useState("");
  const [amt,setamt]=useState("");
  const [type,settype]=useState("");

  function addtrans(){
    const newtrans={
      id:Date.now(),
      text:text,
      amount:(type==="expense")?-Number(amt):Number(amt)
    };
    settrans([...trans,newtrans]);
    settext("");
    setamt("");
  }

  function deltrans(id){
    settrans(
      trans.filter((item)=>item.id!==id)
    )
  }

  const income=trans.filter((item)=>item.amount>0).reduce((acc,item)=>acc+item.amount,0);

  const expense=trans.filter((item)=>item.amount<0).reduce((acc,item)=>acc+item.amount,0);
  
  const balance=income+expense;

  return (
    <>
    <h1>Expense Tracker</h1>
    <input
    value={text}
    onChange={(e)=>settext(e.target.value)}
    placeholder="Enter the purpose"
    />
    <input
    value={amt}
    onChange={(e)=>setamt(e.target.value)}
    placeholder="Enter the amount"
    />
    <label>
    <input
    type="radio"
    name="type"
    value="income"
    onChange={(e)=>settype(e.target.value)}/>
      Income
    </label>
    <label>
    <input
    type="radio"
    name="type"
    value="expense"
    onChange={(e)=>settype(e.target.value)}/>
      Expense
      </label>
    <button
    onClick={addtrans}>Add Transaction</button>
    <p>Balance:{balance}</p>
    <p>Income:{income}</p>
    <p>Expense:{Math.abs(expense)}</p>
    <div>
      <ul>
        {trans.map((item)=>(
        <li key={item.id}>
          {item.text}:{item.amount}
          <button
          onClick={()=>deltrans(item.id)}>DEL</button>
        </li>))}
      </ul>
    </div>
    </>
    
  )
}

export default App
