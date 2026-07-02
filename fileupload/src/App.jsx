import { useState } from 'react'

import './App.css'

function App() {
  const [image ,setimage]=useState(null);
  const [preview ,setpreview]=useState("");

  function handleimg(e){
    const file=e.target.files[0];
    if(file){
      setimage(file);
    setpreview(URL.createObjectURL(file));
    }
  }
  function handlepre(){
    if(image){
      alert("Uploaded Sucessfully!!")
    }
    else{
      alert("File not Uploaded!!")
    }

  }

  return (
    <div>
      <input
      type="file"
      accept="image/*"
      onChange={handleimg}
      />
      <br></br>
      {(image &&
        <img
        src={preview}
        alt="preview"
        width="200px"
        />
      )}
      <br></br>
      <button
      onClick={handlepre}>Upload</button>
    </div>
    
  )
}

export default App
