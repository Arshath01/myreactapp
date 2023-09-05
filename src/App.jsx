import {useState} from 'react';

function App(){
  const [display,setDisplay] = useState('');
  const arr = ['0','1','2','3','4','5',
  '6','7','8','9','+','*','-',
  '/','=','C','del'];

  function handleButton(buttons){
    if(buttons === "="){
      // 0 === '0'
      // console.log(eval(display));
      const result = eval(display);
      setDisplay(result);
    }
    else if(buttons === 'C'){
      setDisplay('');
    }
    else if(buttons === 'del'){
      setDisplay((prevState) => prevState.slice(0,-1));
    }
    else{
      setDisplay(prevState => prevState + buttons);
    }
  }

  return(
    <div className="calc">
        <h1>Calculator</h1>
        <div className='display'>
          <h2>{display}</h2>
        </div>
        <div className='buttons_wrap'>
          {
            arr.map((buttons) => (
              <button id='button' onClick={()=>handleButton(buttons)}>
                {buttons}
              </button>
            ))
          }
        </div>
    </div>
  )
}

export default App;