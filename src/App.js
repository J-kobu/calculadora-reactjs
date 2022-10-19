import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';

function App() {

  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) { //Cuando una cadena de caracteres está vacía es falsa, y cuando tiene contenido es true
      setInput(evaluate(input));
    } else {
      alert('Necesitas algún valor para poder calcular')
    }
  };

  return (
    <div className='App'>
      <div className='calculator-container'> 
        <Screen input={input}/>
        <div className='row'> 
          <Button clickManager={addInput}>1</Button>
          <Button clickManager={addInput}>2</Button>
          <Button clickManager={addInput}>3</Button>
          <Button clickManager={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickManager={addInput}>4</Button>
          <Button clickManager={addInput}>5</Button>
          <Button clickManager={addInput}>6</Button>
          <Button clickManager={addInput}>-</Button>

        </div>
        <div className='row'>
          <Button clickManager={addInput}>7</Button>
          <Button clickManager={addInput}>8</Button>
          <Button clickManager={addInput}>9</Button>
          <Button clickManager={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickManager={calculateResult}>=</Button>
          <Button clickManager={addInput}>0</Button>
          <Button clickManager={addInput}>.</Button>
          <Button clickManager={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton clearManager={() => setInput('')}>Clear</ClearButton> 
        </div>
      </div>
    </div>
  );
}

export default App;
