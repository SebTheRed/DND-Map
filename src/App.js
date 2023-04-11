import logo from './logo.svg';
import './App.css';

import { useEffect, useState, useRef } from 'react';



function App() {



const [baseURL, setBaseURL] = useState('')

useEffect(()=> {
  const getFunc = async() => {
    let res = fetch(baseURL + 'suncrest/data', {
      method: 'GET'
    })
    .then(res => console.log(res))
    // .then(data => console.log(data))
  }
  getFunc()
}, [])











  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
