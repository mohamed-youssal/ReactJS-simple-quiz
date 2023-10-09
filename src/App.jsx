import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz';
import End from './components/End';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);


  const bridge = (score) =>{
    setResult(score)
  }

  const bridge2 = (m, s) =>{
    setMinutes(m)
    setSeconds(s)
  }

  return (
    <div className='container bgi'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Start/>}/>
        <Route exact path='/quiz' element={<Quiz passFunction={bridge} passFunction2={bridge2} />}/>
        <Route exact path='/result' element={<End score={result} minutes={minutes} seconds={seconds} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
