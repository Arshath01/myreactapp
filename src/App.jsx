
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]  = useState(0);
  const [value, setValue] = useState("");
  //  value = "my name";
  //  count = 0
  function handleIncrement(){
    console.log("increment button is pressed...");
    setCount(count+1);
  }

  function handleDecrement() {
    console.log("decrement button is pressed...");
    if(count <= 0){
      setCount(0);
    }
    else{
      setCount(count - 1);
    }
  }

  function handleChange(myval){
    console.log(myval);
    setValue(myval.target.value);
    console.log(value);
  }

  return (
    <div className="App">
      <h1>hello</h1>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <p> {count} </p>

      <button onClick={handleDecrement}>
        Decrement
      </button> <br /> <br />

      <input 
        type="text" 
        placeholder='enter name...' 
        value={value} 
        onChange={(myval)=> handleChange(myval)}
      />

    </div>
  );
}

export default App;
