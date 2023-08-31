
import InputField from './components/input';
import Navbar from "./components/Navbar";
import Section from './components/section';

import './App.css';
import { useState } from 'react';

function App() {

  const [bool,setBool] = useState(false);
 return (
  <div>
    <Navbar/>
    <button onClick={()=>setBool(true)}>
      click me to show section...
    </button>

    <button onClick={()=>setBool(false)}>
      click me to hide section...
    </button>

    {bool && <Section/>}
    {/* <InputField/> */}
    
  </div>
 );
}

export default App;
